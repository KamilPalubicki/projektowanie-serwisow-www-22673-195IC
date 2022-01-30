import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Box from '@mui/material/Box';
import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			<Box
				component="div"
				sx={{
					display: 'inline',
					p: 1,
					m: 1,
					bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
					color: (theme) =>
						theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
					border: '1px solid',
					borderColor: (theme) =>
						theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
					borderRadius: 2,
					fontSize: '0.875rem',
					fontWeight: '700',
				}}
			>
				{props.name}
			</Box>
			<Box
				component="div"
				sx={{
					display: 'inline',
					p: 1,
					m: 1,
					bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
					color: (theme) =>
						theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
					border: '1px solid',
					borderColor: (theme) =>
						theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
					borderRadius: 2,
					fontSize: '0.875rem',
					fontWeight: '700',
					alignItems: 'center',
				}}
			>
				{props.category}
			</Box>
			<div>
				<Box
					component="div"
					sx={{
						display: 'inline',
						p: 1,
						m: 1,
						bgcolor: (theme) => '#EE3322',
						color: (theme) =>
							theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
						border: '1px solid',
						borderColor: (theme) =>
							theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
						borderRadius: 2,
						fontSize: '0.875rem',
						fontWeight: '700',
					}}
				>
					- {props.cost}zł
				</Box>
				<IconButton aria-label="delete">
					<DeleteIcon onClick={handleDeleteExpense} />
				</IconButton>
			</div>
		</li>
	);
};

export default ExpenseItem;
