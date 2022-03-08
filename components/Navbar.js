import React from 'react';
import Logo from './Logo';
import styles from './Navbar.module.sass';

const Navbar = () => {
	return (
		<div>
			<nav className={styles.navbar}>
				<Logo />
				<div className={styles.links}>
					<a href='#events'>Events</a>
					<a href='#the_team'>Meet the Team</a>
					<a href='#reviewers'>Reviewers</a>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
