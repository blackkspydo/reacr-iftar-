import React, { useState } from "react";
import "./Cart.css";

const Cart = (props) => {
	const { cart, handleRandom, resetCart, randomItem, randomClickHandler } = props;

	const total = cart.reduce((total, item) => total + parseInt(item.price), 0);

	console.log(total);
	// console.log(cart[item])
	return (
		<div className="cart">
			<h3>Selected Items</h3>
			{cart.map((product) => (
				<>
					<li>
						{product.name}
						{"  "}
						<span>{product.price}</span>
					</li>
				</>
			))}
			{cart.length > 0 && <h1>{total}</h1>}
			<p>Random Item</p>
			{randomItem.map((product) => (
				<>
					<li>{product.name} <button onClick={()=>randomClickHandler(product)}>+</button></li>
				</>
			))}
			<button onClick={() => handleRandom()}>choose randomly</button>

			<button onClick={() => resetCart()}>reset</button>
		</div>
	);
};

export default Cart;
