import {Toolbar} from '@mui/material';

export default function InfoPanel(props) {
	return (
		<div>
			<Toolbar />
			{props.loading ? (
				<p className='info-data'>Awaiting input...</p>
			) : props.error ? (
				<p className='info-data'>Error! {props.error}</p>
			) : (
				<div>
					<div>
						<p className='info-label'>IP ADDRESS</p>
						<p className='info-data'>{props.data.ip}</p>
					</div>
					<div>
						<p className='info-label'>LOCATION</p>
						<p className='info-data'>
							{props.data.location.region}, {props.data.location.country}
						</p>
					</div>
					<div>
						<p className='info-label'>TIMEZONE</p>
						<p className='info-data'>UTC {props.data.location.timezone}</p>
					</div>
					<div>
						<p className='info-label'>ISP</p>
						<p className='info-data'>{props.data.isp}</p>
					</div>
				</div>
			)}
		</div>
	);
}
