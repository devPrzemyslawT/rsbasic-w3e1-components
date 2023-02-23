import React from "react";
import "./TextArea.css";
const InText = props => {
	const {
		inNumberBgColor,
		inNumberColor,
		inNumberBorderSize,
		inNumberBorderRadius,
		inNumberBorderColor,
	} = props;
	return (
		<textarea
			style={{
				backgroundColor: inNumberBgColor,
				color: inNumberColor,
				borderWidth: inNumberBorderSize,
				borderRadius: inNumberBorderRadius,
				borderColor: inNumberBorderColor,
			}}></textarea>
	);
};

export default InText;
