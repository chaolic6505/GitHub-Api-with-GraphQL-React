type TGQ = (pageCount: number, queryString: string) => object;

export const githubQuery: TGQ = (pageCount, queryString) => {
	return {
		query: `
			{
				viewer 
				{
					name
				}
				search(query: "${queryString} user:chaolic6505 sort:updated-desc", type: REPOSITORY, first: ${pageCount}) 
				{
						repositoryCount
						nodes 
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
			`,
	};
};

export default githubQuery;
