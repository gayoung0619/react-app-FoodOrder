import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = props => {
	return <button className={classes.button}>
		<span className={classes.icon}>
			<CartIcon />
		</span>
		<span>
			피처2 머지해보기
		</span>
		<span className={classes.badge}>
			3
		</span>
	</button>
}
export default HeaderCartButton;