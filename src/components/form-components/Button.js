import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
const Button = ({
	type,
	value,
	children,
	onClick,
	link,
	theme,
	parentClass,
	versions,
	disabled,
}) => {
	const parent = `${parentClass}__btn`;
	const versionClass = versions.map((el) => `c-btn--${el}`).join(" ");
	const onBtnClick = () => {
		if (typeof onClick === "function") onClick();
	};
	const className = classNames("c-btn", {
		[`c-btn--${theme}`]: theme,
		[parent]: parentClass,
		[versionClass]: versions,
	});
	switch (type) {
		case "button":
		case "submit":
			return (
				<button
					disabled={disabled}
					className={className}
					type={type}
					// onClick={onBtnClick}
				>
					{value}
					{children}
				</button>
			);
		case "link":
			if (typeof link === "string")
				return (
					<Link href={link}>
						<Link
							className={className}
							// onClick={onBtnClick}
						>
							{value}
							{children}
						</Link>
					</Link>
				);
			return (
				<span className={className} onClick={onBtnClick}>
					{value}
					{children}
				</span>
			);
		default:
			return (
				<button
					disabled={disabled}
					className={className}
					type={type}
					// onClick={onBtnClick}
				>
					{value}
					{children}
				</button>
			);
	}
};

Button.defaultProps = {
	versions: [],
	disabled: false,
};
export default Button;
