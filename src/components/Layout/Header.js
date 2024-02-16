import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg';
import classes from "./Header.module.css";

const Header = props => {
	return <Fragment>
		<header className={classes.header}>
			<h1>피처1</h1>
			<h2>피처2</h2>
			<HeaderCartButton />
		</header>
		<div className={classes['main-image']}>
			<img src={mealsImage} alt="A table full of delicious food" />
		</div>
		<h3>피처1 머지</h3>
	</Fragment>
};

export default Header;