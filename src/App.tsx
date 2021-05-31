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
import NavButtons from './components/NavBotton';

const initialState: MainState = {
	userName: ' ',
	repoList: [],
	pageCount: 10,
	queryString: '',
	totalCount: 0,
	startCursor: ' ',
	endCursor: ' ',
	hasPreviousPage: false,
	hasNextPage: true,
	paginationKeyword: 'first',
	paginationString: ' ',
};

function App() {
	const [state, dispatch] = useReducer<React.Reducer<MainState, MainAction>>(
		mainReducer,
		initialState,
	);
	const queryText = JSON.stringify(
		githubQuery(
			state.pageCount,
			state.queryString,
			state.paginationKeyword,
			state.paginationString,
		),
	);

	const fetchData = useCallback(() => {
		fetch(github.baseURL, {
			method: 'POST',
			headers: github.headers,
			body: queryText,
		})
			.then((res) => res.json())
			.then((data) => {
				const repos = data.data.search.edges;
				const viewer = data.data.viewer;
				const total = data.data.search.repositoryCount;

				const start = data.data.search.pageInfo?.startCursor;
				const end = data.data.search.pageInfo?.endCursor;
				const next = data.data.search.pageInfo?.hasNextPage;
				const prev = data.data.search.pageInfo?.hasPreviousPage;

				dispatch({
					type: MainActionType.setUserName,
					payload: viewer.name,
				});
				dispatch({
					type: MainActionType.setRepoList,
					payload: repos,
				});
				dispatch({
					type: MainActionType.setTotalCount,
					payload: total,
				});

				dispatch({
					type: MainActionType.setStartCursor,
					payload: start,
				});
				dispatch({
					type: MainActionType.setEndCursor,
					payload: end,
				});
				dispatch({
					type: MainActionType.setHasNextPage,
					payload: next,
				});
				dispatch({
					type: MainActionType.setHasPreviousPage,
					payload: prev,
				});
				console.log(data);
			});
	}, [queryText]);
	console.log(state);
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
			<NavButtons
				start={state.startCursor}
				end={state.endCursor}
				next={state.hasNextPage}
				previous={state.hasPreviousPage}
				onPage={(myKeyword, myString) => {
					dispatch({
						type: MainActionType.setPaginationKeyword,
						payload: myKeyword,
					});
					dispatch({
						type: MainActionType.setPaginationString,
						payload: myString,
					});
				}}
			/>
			<RepoInfoList items={state.repoList} />
		</Main>
	);
}

export default App;
