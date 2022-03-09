import styles from './Hero.module.sass';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<video loop muted autoPlay className={styles.video}>
				<source src='/video.mp4' type='video/mp4' />
			</video>
			<div className={styles.textSection}>
				<h1>Write The Docs</h1>
				<h1>Kenya</h1>
			</div>
		</div>
	);
};

export default Hero;
