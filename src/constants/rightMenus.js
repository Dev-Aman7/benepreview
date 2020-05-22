import React from "react";
// import ReactSVG from "react-svg";
// import { AiOutlineUser } from "react-icons/ai";
// import { FiShoppingCart } from "react-icons/fi";
const rightMenus = [
	{
		label: "Learn",
		link: "/learn",
		action: "link",
	},
	{
		label: "Consult",
		link: "/consult",
		action: "link",
	},
	{
		icon: <img src="/images/user-icon.svg" />,
		// link: "/user",
		action: "dropdown",
		onlyLogin: true,
		dropdownMenu: [
			{
				label: "My Account",
				link: "/account",
			},
			{
				label: "logout",
				action: "logout",
			},
		],
	},
	{
		icon: <img src="/images/user-icon.svg" />,
		action: "reg",
		onlyLogin: false,
	},
	{
		// icon: <ReactSVG src="/images/cart-icon-1.svg" />,
		// activeIcon: <ReactSVG src="/images/cart-icon-active.svg" />,
		isCart: true,
		action: "cart",
	},
];
export default rightMenus;
