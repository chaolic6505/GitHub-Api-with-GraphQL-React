import React from 'react';

export interface ILicenseInfo {
	licenseInfo: {
		spdxId?: boolean;
	};
}
const LicenseInfo: React.FC<ILicenseInfo> = (repo) => {
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
