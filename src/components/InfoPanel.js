import React from 'react';

export default function InfoPanel({data}) {
	return (
		<div>
			<div>
				<p className='info-label'>IP ADDRESS</p>
				<p className='info-data'>{data.ip}</p>
			</div>
			<div>
				<p className='info-label'>LOCATION</p>
				<p className='info-data'>
					`${data.location.region}, ${data.location.country}`
				</p>
			</div>
			<div>
				<p className='info-label'>TIMEZONE</p>
				<p className='info-data'>UTC {data.location.timezone}</p>
			</div>
			<div>
				<p className='info-label'>ISP</p>
				<p className='info-data'>{data.isp}</p>
			</div>
		</div>
	);
}
