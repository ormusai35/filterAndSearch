import React from 'react';
import './Card.css';

const Card = ({name, email, id}) => {
	return (
		<div className="card">
			<img class="image" alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div class="overlay">My Name is John</div>
			<div> 
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;