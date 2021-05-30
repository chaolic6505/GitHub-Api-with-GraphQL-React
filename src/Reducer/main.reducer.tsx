import { RepoInfo } from '../components/RepoInfo';

export enum MainActionType {
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
	payload: any;
}

export interface MainState {
	userName: string;
	repoList: Array<RepoInfo>;
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
): MainState => {
	switch (action.type) {
		case MainActionType.setUserName:
			return { ...state, userName: action.payload };
		case MainActionType.setRepoList:
			return { ...state, repoList: [...action.payload] };

		default:
			return state;
	}
};
