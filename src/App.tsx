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

const initialState: MainState = {
	userName: ' ',
	repoList: [],
	pageCount: 10,
	queryString: '',
	totalCount: null,
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

	const fetchData = useCallback(() => {
		fetch(github.baseURL, {
			method: 'POST',
			headers: github.headers,
			body: JSON.stringify(githubQuery),
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
			});
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);
	return (
		<Main name={state.userName}>
			<RepoInfoList items={state.repoList} />
		</Main>
	);
}

export default App;
