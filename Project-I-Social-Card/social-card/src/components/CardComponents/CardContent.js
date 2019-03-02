import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';

const CardContent = (props) => (
	<div class="card-container">
		<CardBanner />
		<h2>{props.title}</h2>
		<p>{props.post}</p>
		<h3 class="grey-text">{props.link}</h3>
	</div>
);

export default CardContent;