import React from 'react';
import IRepoInfo from './RepoInfo';
export interface ILicenseInfo {
	licenseInfo: {
		spdxId?: boolean;
	};
}
const LicenseInfo: React.FC<ILicenseInfo> = (repo) => {
	let license: JSX.Element;

	switch (repo.licenseInfo?.spdxId) {
		case undefined:
			return (
				<span
					className="px-1 py-0 ms-1 d-inline-block btn btn-sm btn-danger"
					style={{ fontSize: '1em' }}
				>
					NO LICENSE
				</span>
			);
			break;

		default:
			return (
				<span
					className="px-1 py-0 ms-1 d-inline-block btn btn-sm btn-outline-success"
					style={{ fontSize: '1em' }}
				>
					{repo.licenseInfo.spdxId}
				</span>
			);
	}
};

export default LicenseInfo;
