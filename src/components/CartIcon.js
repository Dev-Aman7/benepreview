import React from "react";
import { connect } from "react-redux";
// import ReactSVG from "react-svg";
import _ from "lodash";

const CartIcon = ({ items, ...props }) => {
	const itemCount =
		_.flatten([...items.map((el) => Array(el.qty || 0).fill(0))]).length || 0;
	if (itemCount > 0) {
		return (
			<span className="c-cart-icon">
				<span className="c-cart-icon__count">{itemCount}</span>
				<img src="/images/cart-icon-active.svg" />
			</span>
		);
	} else {
		return <img src="/images/cart-icon-1.svg" />;
	}
};

export default CartIcon;
