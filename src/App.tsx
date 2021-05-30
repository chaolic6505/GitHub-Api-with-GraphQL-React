import Main from './components/Main';
import React, { useEffect, useReducer, useCallback } from 'react';
import github from './db';
import './App.scss';
import {
	mainReducer,
	MainAction,
	MainState,
	MainActionType,
} from './Reducer/main.reducer';
import githubQuery from './Query';
import RepoInfoList from './components/RepoInfo';
import SearchBox from './components/SearchBox';

const initialState: MainState = {
	userName: ' ',
	repoList: [],
	pageCount: 10,
	queryString: '',
	totalCount: 0,
	startCursor: null,
	endCursor: null,
	hasPreviousPage: false,
	hasNextPage: true,
	paginationKeyword: 'first',
	paginationString: '',
};

function App() {
	const [state, dispatch] = useReducer<React.Reducer<MainState, MainAction>>(
		mainReducer,
		initialState,
	);
	const queryText = JSON.stringify(
		githubQuery(state.pageCount, state.queryString),
	);

	const fetchData = useCallback(() => {
		fetch(github.baseURL, {
			method: 'POST',
			headers: github.headers,
			body: queryText,
		})
			.then((res) => res.json())
			.then((data) => {
				const viewer = data.data;
				dispatch({
					type: MainActionType.setUserName,
					payload: viewer.viewer.name,
				});
				dispatch({
					type: MainActionType.setRepoList,
					payload: viewer.search.nodes,
				});
				dispatch({
					type: MainActionType.setTotalCount,
					payload: viewer.search.nodes.repositoryCount,
				});
				console.log(data);
			});
	}, [state.pageCount, state.queryString]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<Main name={state.userName}>
			<SearchBox
				totalCount={state.totalCount}
				pageCount={state.pageCount}
				queryString={state.queryString}
				onTotalChange={(myNumber) => {
					dispatch({
						type: MainActionType.setPageCount,
						payload: myNumber,
					});
				}}
				onQueryChange={(myString) => {
					dispatch({
						type: MainActionType.setQueryString,
						payload: myString,
					});
				}}
			/>
			<RepoInfoList items={state.repoList} />
		</Main>
	);
}

export default App;
