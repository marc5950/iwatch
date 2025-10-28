import { FaApple } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
	return (
		<header className="header">
			<FaApple />
			<nav>
				<ul>
					<li>Mac</li>
					<li>iPhone</li>
					<li>iPad</li>
					<li className="active">iWatch</li>
					<li>Support</li>
				</ul>
			</nav>
			<div>
				<CiSearch />
				<span></span>
				<FiShoppingBag />
			</div>
		</header>
	);
};

export default Header;
