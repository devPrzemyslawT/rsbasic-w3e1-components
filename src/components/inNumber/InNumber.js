import React from "react";
import "./InNumber.css";
const InNumber = props => {
	const {
		inNumberBgColor,
		inNumberColor,
		inNumberBorderSize,
		inNumberBorderRadius,
		inNumberBorderColor,
	} = props;
	return (
		<input
			type='number'
			style={{
				backgroundColor: inNumberBgColor,
				color: inNumberColor,
				borderWidth: inNumberBorderSize,
				borderRadius: inNumberBorderRadius,
				borderColor: inNumberBorderColor,
			}}></input>
	);
};

export default InNumber;
