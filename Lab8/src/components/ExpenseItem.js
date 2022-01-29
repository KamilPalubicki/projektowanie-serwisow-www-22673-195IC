import React, { useContext } from 'react';

const ExpenseItem = (props) => {
	return (
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span class='badge badge-primary badge-pill mr-3'>£{props.cost}</span>
			</div>
		</li>
	);
};

export default ExpenseItem;
