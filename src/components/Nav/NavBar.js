import Container from "../Container/Container";
import styles from "./Nav.module.scss";

const NavBar = () => {
	return (
		<nav className={styles.nav}>
			{/* <Container> */}
				<img src="#" href="/" className={styles.logo}></img>
				<ul className={styles.ul}>
					<li className={styles.li}>
						<a href="/" className={styles.a}>Home</a>
					</li>
					<li className={styles.li}>
						<a href="/favorite" className={styles.a}>Favorite</a>
					</li>
					<li className={styles.li}>
						<a href="/about" className={styles.a}>About</a>
					</li>
				</ul>
			{/* </Container> */}
		</nav>
	);
};

export default NavBar;
