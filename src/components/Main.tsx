import React, { useEffect, useReducer, useCallback } from 'react';
import github from '../db';
import '../App.scss';
import {
	mainReducer,
	MainAction,
	MainState,
	MainActionType,
} from '../Reducer/main.reducer';
import githubQuery from '../Query';
import RepoInfoList from './RepoInfo';

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
const Main: React.FC = () => {
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
		<div className="App container mt-5">
			<h1 className="text-primary">
				<i className="bi bi-diagram-2-fill"></i> Repositories
			</h1>
			<p>Hi {state.userName}</p>

			<RepoInfoList items={state.repoList} />
		</div>
	);
};

export default Main;
