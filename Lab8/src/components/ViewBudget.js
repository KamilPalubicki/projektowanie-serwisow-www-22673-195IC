import React from 'react';
import Button from '@mui/material/Button';

const ViewBudget = (props) => {
	return (
		<>
			<span>Budget: {props.budget} zł</span>
			<Button onClick={props.handleEditClick} variant="contained" >Edit</Button>
		</>
	);
};
export default ViewBudget;
