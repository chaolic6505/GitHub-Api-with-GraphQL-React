export const githubQuery: object = {
	query: `
			{
				viewer 
				{
					name
				}
				search(query: "user:chaolic6505 sort:updated-desc", type: REPOSITORY, first: 10) 
				{
						nodes 
					{
						... on Repository 
						{
							name
							description
							id
							url
						}
    				}
  				}
			}
			`,
};

export default githubQuery;
