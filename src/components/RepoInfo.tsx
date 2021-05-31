import LicenseInfo from './LicenseInfo';
export interface IRepoInfo {
	node: {
		id: string;
		name: string;
		description: string;
		url: string;
		viewerSubscription: string;
		licenseInfo: {
			spdxId?: boolean;
		};
	};
}
interface RepoListType {
	items: Array<IRepoInfo>;
}

const RepoInfoList: React.FC<RepoListType> = (props) => {
	return (
		<>
			<ul className="list-group list-group-flush">
				{props.items.map((repo) => (
					<li className="list-group-item" key={repo.node.id.toString()}>
						<div className="d-flex justify-content-between align-items-center">
							<div className="d-flex flex-column">
								<a className="h5 mb-0 text-decoration-none" href={repo.node.url}>
									{repo.node.name}
								</a>
								<p className="small">{repo.node.description}</p>
							</div>
							<div className="text-nowrap ms-3">
								<LicenseInfo licenseInfo={repo.node.licenseInfo} />
								<span
									className={
										'px-1 py-0 ms-1 d-inline-block btn btn-sm ' +
										(repo.node.viewerSubscription === 'SUBSCRIBED'
											? 'btn-success'
											: 'btn-outline-secondary')
									}
									style={{ fontSize: '1em' }}
								>
									{repo.node.viewerSubscription}
								</span>
							</div>
						</div>
					</li>
				))}
			</ul>
		</>
	);
};

export default RepoInfoList;
