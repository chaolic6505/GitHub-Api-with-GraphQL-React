import React, { useEffect, useReducer, useCallback } from 'react';
import github from '../db';
import '../App.scss';
import mainReducer from '../Reducer/main';

const initialState = {
	userName: '',
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
	//const [state, dispatch] = useReducer(mainReducer, initialState);

	useEffect(() => {
		const gquery = {
			query: `
			{
				viewer {
					name
				}
			}
			`,
		};
		fetch(github.baseURL, {
			method: 'POST',
			headers: github.headers,
			body: JSON.stringify(gquery),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	}, []);

	return (
		<div className="App container mt-5">
			<h1 className="text-primary">
				<i className="bi bi-diagram-2-fill"></i> Repos
			</h1>
		</div>
	);
};

export default Main;
