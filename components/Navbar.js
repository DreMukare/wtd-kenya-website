import React from 'react';
import Logo from './Logo';
import styles from './Navbar.module.sass';

const Navbar = () => {
	const handleClick = () => {
		let linkSection = document.getElementById('linkSection');
		linkSection.style.display =
			linkSection.style.display === 'none' ? 'flex' : 'none';
	};

	return (
		<div>
			<nav className={styles.navbar}>
				<Logo />
				<div className={styles.links}>
					<a href='#events'>Events</a>
					<a href='#the_team'>Meet the Team</a>
					<a href='#reviewers'>Reviewers</a>
				</div>
				<button onClick={handleClick}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className={styles.responsive}
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M4 6h16M4 12h8m-8 6h16'
						/>
					</svg>
				</button>
			</nav>
			<div id='linkSection' className={styles.mobile_links}>
				<a href='#events'>Events</a>
				<a href='#the_team'>Meet the Team</a>
				<a href='#reviewers'>Reviewers</a>
			</div>
		</div>
	);
};

export default Navbar;
