import React, { useState } from 'react';
import Button from "@mui/material/Button";

const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget);
	return (
		<>
			<input
				required='required'
				type='number'
				class='form-control mr-3'
				id='name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<Button onClick={() => props.handleSaveClick(value)} variant="contained" >Save</Button>
		</>
	);
};

export default EditBudget;
