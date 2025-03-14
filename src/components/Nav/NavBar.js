import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className={styles.nav}>
			{/* <Container> */}
			<img src="/logo192.png" href="#" alt="logo" className={styles.logo}></img>
			<ul className={styles.ul}>
				<li className={styles.li}>
					<NavLink
						className={({ isActive }) =>
							`${styles.link} ${isActive ? styles.linkActive : ""}`
						}
						to="/"
					>
						Home
					</NavLink>
				</li>
				<li className={styles.li}>
					<NavLink
						className={({ isActive }) =>
							`${styles.link} ${isActive ? styles.linkActive : ""}`
						}
						to="/favorite"
					>
						Favorite
					</NavLink>
				</li>
				<li className={styles.li}>
					<NavLink
						className={({ isActive }) =>
							`${styles.link} ${isActive ? styles.linkActive : ""}`
						}
						to="/about"
					>
						About
					</NavLink>
				</li>
			</ul>
			{/* </Container> */}
		</nav>
	);
};

export default NavBar;
