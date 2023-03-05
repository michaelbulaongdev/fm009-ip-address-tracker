import {Box, Grid} from '@mui/material';

export default function InfoPanel({data}) {
	return (
		<Box>
			<Grid container spacing={1}>
				<Grid item sm={12} md={3}>
					<p className='info-label'>IP ADDRESS</p>
					<p className='info-data'>{data.ip}</p>
				</Grid>
				<Grid item sm={12} md={3}>
					<p className='info-label'>LOCATION</p>
					<p className='info-data'>
						{data.location.region}, {data.location.country}
					</p>
				</Grid>
				<Grid item sm={12} md={3}>
					<p className='info-label'>TIMEZONE</p>
					<p className='info-data'>UTC {data.location.timezone}</p>
				</Grid>
				<Grid item sm={12} md={3}>
					<p className='info-label'>ISP</p>
					<p className='info-data'>{data.isp}</p>
				</Grid>
			</Grid>
		</Box>
	);
}
