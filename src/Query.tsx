type TGQ = (
	pageCount: number,
	queryString: string,
	paginationKeyword: string,
	paginationString: string,
) => object;

export const githubQuery: TGQ = (
	pageCount,
	queryString,
	paginationKeyword,
	paginationString,
) => {
	return {
		query: `
			{
				viewer 
				{
					name
				}
				search(query: "${queryString} user:chaolic6505 sort:updated-desc", type: REPOSITORY, ${paginationKeyword}: ${pageCount}, ${paginationString}) 
				{
						repositoryCount
						edges 
						{
							cursor
										node 
												{
													... on Repository 
													{
														name
														description
														id
														url
														viewerSubscription
														licenseInfo
																		{
																			spdxId
																		}
													}
												}

						}
						
  				}
			}
			`,
	};
};

export default githubQuery;
