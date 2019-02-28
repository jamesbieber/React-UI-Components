import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';

const CardContent = (props) => (
	<div>
		<CardBanner img="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" />
		<h2>{props.title}</h2>
		<p>{props.post}</p>
		<h3>{props.link}</h3>
	</div>

);

export default CardContent;