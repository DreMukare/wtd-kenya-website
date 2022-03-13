import styles from './Logo.module.sass';

const Logo = () => {
	return (
		<div className={styles.logo}>
			WRITE THE DOCS <span className={styles.red}>KE</span>N
			<span className={styles.green}>YA</span>
		</div>
	);
};

export default Logo;
