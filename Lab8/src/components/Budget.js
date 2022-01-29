import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget} = useContext(AppContext);

	return (
		<div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{budget}
		</div>
	);
};

export default Budget;
