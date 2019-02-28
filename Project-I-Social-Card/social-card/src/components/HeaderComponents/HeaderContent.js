import React from 'react';
import './Header.css';

import HeaderTitle from "./HeaderTitle";
import ImageThumbnail from "./ImageThumbnail"

const HeaderContent = (props) => (
	<div className="container">
		<ImageThumbnail />

		<div className="header-content">
			<HeaderTitle name="Lambda School" handle="LambdaSchool" date="26 jan"/>
			
			<p>{props.postContent}</p>
		</div>

	</div>
);

export default HeaderContent;
