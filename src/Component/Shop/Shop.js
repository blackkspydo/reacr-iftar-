import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	const [randomItem, setRandomItem] = useState([]);

	useEffect(() => {
		fetch("products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	const handleCart = (product) => {
		if (cart.length < 4) {
			setCart([...cart, product]);
		}
	};
	const handleRandom = () => {
		const random = Math.floor(Math.random() * products.length);
		setRandomItem([products[random]]);
	};

	const resetCart = () => {
		setCart([]);
	};

	const randomClickHandler = (product) => {
		setCart([...cart, product]);
		setRandomItem([]);
	};

	return (
		<div className="shop-container">
			<div className="products-container">
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						handleCart={handleCart}></Product>
				))}
			</div>

			<div className="cart-container">
				<Cart
					key={cart.id}
					cart={cart}
					handleRandom={handleRandom}
					randomItem={randomItem}
					resetCart={resetCart}
					randomClickHandler={randomClickHandler}></Cart>
			</div>
		</div>
	);
};

export default Shop;
