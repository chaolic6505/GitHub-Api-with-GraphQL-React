export interface IRepoInfo {
	id: string;
	name: string;
	description: string;
	url: string;
}
interface RepoListType {
	items: Array<IRepoInfo>;
}

const RepoInfoList: React.FC<RepoListType> = (props) => {
	return (
		<>
			<ul className="list-group list-group-flush">
				{props.items.map((repo) => (
					<li className="list-group-item" key={repo.id.toString()}>
						<div className="d-flex justify-content-between align-items-center">
							<div className="d-flex flex-column">
								<a className="h5 mb-0 text-decoration-none" href={repo.url}>
									{repo.name}
								</a>
								<p className="small">{repo.description}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</>
	);
};

export default RepoInfoList;
