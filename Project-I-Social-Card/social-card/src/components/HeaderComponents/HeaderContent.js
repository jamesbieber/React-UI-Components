import React from 'react';
import './Header.css';

import HeaderTitle from "./HeaderTitle";
import ImageThumbnail from "./ImageThumbnail"

const HeaderContent = (props) => (
	<div className="container">
		<ImageThumbnail img="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"/>

		<div className="header-content">
			<HeaderTitle name="Lambda School" handle="LambdaSchool" date="26 jan"/>
			
			<p>{props.postContent}</p>
		</div>

	</div>
);

export default HeaderContent;
