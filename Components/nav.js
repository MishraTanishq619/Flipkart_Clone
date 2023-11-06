"use client";
import React from "react";

const Nav = () => {
	return (
		<div id="nav">
			<div id="logo">
				<img src="flipkart-logo.png" alt="LOGO" />
			</div>
			<input
				type="text"
				name="search"
				id="search"
				placeholder="Search for products brands and more"
			/>
			<button>Login</button>
			<p>Become a Seller</p>
			<p>More</p>
			<div id="cart">
				<i class="fa-solid fa-cart-shopping"></i>
				<p>Cart</p>
			</div>
		</div>
	);
};

export default Nav;
