type ActionType = {
	type:
		| 'setUserName'
		| 'setRepoList'
		| 'setPageCount'
		| 'setQueryString'
		| 'setTotalCount'
		| 'setStartCursor'
		| 'setEndCursor'
		| 'setHasPreviousPage'
		| 'setHasNextPage'
		| 'setPaginationKeyword'
		| 'setPaginationString';
};

type StateType = {
	userName: string;
	repoList: unknown;
	pageCount: number;
	queryString: string;
	totalCount: unknown;
	startCursor: unknown;
	endCursor: unknown;
	hasPreviousPage: boolean;
	hasNextPage: boolean;
	paginationKeyword: string;
	paginationString: string;
};

export const mainReducer = (state: StateType, action: ActionType) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default mainReducer;
