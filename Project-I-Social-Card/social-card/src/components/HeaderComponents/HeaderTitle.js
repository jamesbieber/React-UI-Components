import React from 'react';
import './Header.css';

const HeaderTitle = (props) => (
	<div className="post-details">
		<h2>{props.name}</h2>
		<h3 className="grey-text">{props.handle}</h3>
		<li className="grey-text">{props.date}</li>
	</div>
);

export default HeaderTitle;