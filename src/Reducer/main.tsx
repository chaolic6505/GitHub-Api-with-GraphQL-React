enum MainActionType {
	setUserName = 'setUserName',
	setRepoList = 'setRepoList',
	setPageCount = 'setPageCount',
	setQueryString = 'setQueryString',
	setTotalCount = 'setTotalCount',
	setStartCursor = 'setStartCursor',
	setEndCursor = 'setEndCursor',
	setHasPreviousPage = 'setHasPreviousPage',
	setHasNextPage = 'setHasNextPage',
	setPaginationKeyword = 'setPaginationKeyword',
	setPaginationString = 'setPaginationString',
}
export interface MainAction {
	type: MainActionType;
	payload: {
		data: [];
	};
}

export interface MainState {
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
}

export const mainReducer: React.Reducer<MainState, MainAction> = (
	state,
	action,
) => {
	switch (action.type) {
		default:
			return state;
	}
};
