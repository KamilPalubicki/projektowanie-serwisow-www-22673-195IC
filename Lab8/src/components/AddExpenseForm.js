import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);
	const [name, setName] = useState('');
	const [category, setCategory] = useState('');
	const [cost, setCost] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			name,
			category,
			cost: parseInt(cost),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

		setName('');
		setCategory('');
		setCost('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div class='row'>
				<div class='col-sm col-lg-4 '>
					<label for='name'>Name</label>
					<input
						required='required'
						type='text'
						class='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div class='col-sm col-lg-4'>
					<label for='category'>Category</label>
					<select
						required='required'
						type='text'
						class='form-control'
						id='category'
						value={category}
						onChange={(event) => setCategory(event.target.value)}
					>
						<option value="Holiday">Holiday</option>
						<option value="Investment">Investment</option>
						<option value="Transportation">Transportation</option>
						<option value="Food">Food</option>
						<option value="Medical & Healthcare">Medical & Healthcare</option>
						<option value="Personal Spending">Personal Spending</option>
					</select>
				</div>
				<div className='col-sm col-lg-4'>
					<label htmlFor='cost'>Cost</label>
					<input
						required='required'
						type='number'
						className='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
			</div>
			<div class='row mt-3'>
				<div class='col-sm'>
					<button type='submit' class='btn btn-primary'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;
