import styles from './Hero.module.sass';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<video loop muted autoPlay className={styles.video}>
				<source src='/video.mp4' type='video/mp4' />
			</video>
			<div className={styles.textSection}>
				<h1 className={styles.write}>Write The Docs</h1>
				<h1 className={styles.ke}>Kenya</h1>
				<p>
					We consider everyone who cares about{' '}
					<span>communication, documentation, and their users</span> to be a
					member of our community. This can be{' '}
					<span>
						programmers, tech writers, developer advocates, customer support,
						marketers, and anyone else
					</span>{' '}
					who wants people to have great experiences with software.
				</p>
			</div>
		</div>
	);
};

export default Hero;
