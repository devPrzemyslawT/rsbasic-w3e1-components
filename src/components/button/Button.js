import React from "react";

import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = props => {
	const { buttonLabel, buttonColor, buttonBColor } = props;

	return (
		<div>
			<FontAwesomeIcon icon='check-square' /> - icon checkbox
			<FontAwesomeIcon icon='coffee' /> - icon coffee
			<button style={{ color: buttonColor, backgroundColor: buttonBColor }}>
				{buttonLabel}
			</button>
			<FontAwesomeIcon icon='bicycle' /> - icon bucycle
		</div>
	);
};

export default Button;
