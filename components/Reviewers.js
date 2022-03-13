import Link from 'next/link';
import Card from '../components/Card';
import { reviewers } from '../utils/reviewers';
import styles from './Reviewers.module.sass';

const Reviewers = () => {
	return (
		<section id='reviewers' className={styles.reviewers}>
			<h2>Reviewers</h2>
			<h3>Our reviewers help you QA your technical articles.</h3>
			{reviewers.length === 0 ? (
				<p>
					PLEASE{' '}
					<Link href='/signUp'>
						<a>CONTACT US</a>
					</Link>{' '}
					IF YOU WOULD LIKE TO BE ONE OF OUR COMMUNITY REVIEWERS.
				</p>
			) : (
				reviewers.map(({ name, title, img, available, articlesReviewed }) => (
					<Card
						key={name}
						img={img}
						name={name}
						title={title}
						available={available}
						articlesReviewed={articlesReviewed}
					/>
				))
			)}
		</section>
	);
};

export default Reviewers;
