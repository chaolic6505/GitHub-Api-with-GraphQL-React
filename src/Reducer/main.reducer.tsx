import { IRepoInfo } from '../components/RepoInfo';

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
	repoList: Array<IRepoInfo>;
	pageCount: number;
	queryString: string;
	totalCount: number;
	startCursor: string;
	endCursor: string;
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
		case MainActionType.setPageCount:
			return { ...state, pageCount: action.payload };
		case MainActionType.setQueryString:
			return { ...state, queryString: action.payload };

		case MainActionType.setTotalCount:
			return { ...state, totalCount: action.payload };

		case MainActionType.setPaginationKeyword:
			return { ...state, paginationKeyword: action.payload };
		case MainActionType.setPaginationString:
			return { ...state, paginationString: action.payload };

		case MainActionType.setStartCursor:
			return { ...state, startCursor: action.payload };
		case MainActionType.setEndCursor:
			return { ...state, endCursor: action.payload };
		case MainActionType.setHasNextPage:
			return { ...state, hasNextPage: action.payload };
		case MainActionType.setHasPreviousPage:
			return { ...state, hasPreviousPage: action.payload };

		default:
			return state;
	}
};
