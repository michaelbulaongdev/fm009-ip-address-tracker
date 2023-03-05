import {ReactComponent as IconArrow} from '../images/icon-arrow.svg';
import {TextField} from '@mui/material';

export default function InputPanel(props) {
	return (
		<form className='input-container' onSubmit={props.handleSubmit}>
			<TextField
				size='small'
				variant='outlined'
				label='Enter IP address'
				onChange={props.handleChange}
			/>
			<button className='icon-arrow' type='submit'>
				<IconArrow />
			</button>
		</form>
	);
}
