import styles from './Event.module.sass';

const months = {
	1: 'January',
	2: 'February',
	3: 'March',
	4: 'April',
	5: 'May',
	6: 'June',
	7: 'July',
	8: 'August',
	9: 'September',
	10: 'October',
	11: 'November',
	12: 'December',
};

const Event = ({ name, time, description, date, speakers, link }) => {
	const [year, month, day] = date.split('-');
	const monthInWords = months[month];
	return (
		<a
			href={link}
			className={styles.event}
			rel='noopener noreferrer'
			target='_blank'
		>
			<h4>{name}</h4>
			<p className={styles.date}>
				{date && <span>Date: </span>} {`${day} ${monthInWords} ${year}`}
			</p>
			<p className={styles.time}>
				{time && <span>Time: </span>}
				{time}
			</p>
			<p className={styles.speaker}>
				{speakers && <span>Speaker(s): </span>}
				{speakers}
			</p>
			<p className={styles.description}>
				{description && <span>About Event: </span>}
				{description}
			</p>
		</a>
	);
};

export default Event;
