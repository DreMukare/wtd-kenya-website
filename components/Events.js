import styles from './Events.module.sass';
import Event from './Event';
import { sortedEvents as events } from '../utils/events';

const Events = () => {
	return (
		<section id='events' className={styles.events}>
			<h2>Events</h2>
			<h3>
				At WTD Kenya, we occasionally have events geared towards aiding people
				getting into technical writing and documentation as well as those
				looking for opportunities in or to improve their skills in technical
				writing.
			</h3>
			{events.length !== 0 && (
				<p className={styles.hint}>
					Click on the event card to see the event details.
				</p>
			)}
			<div className={styles.eventSection}>
				{events.length === 0 ? (
					<p className={styles.noEvent}>
						WE CURRENTLY DO NOT HAVE ANY EVENTS SCHEDULED. PLEASE CHECK OUR{' '}
						<a href='#footer'>SOCIAL MEDIA</a> FOR ANY NOTIFICATIONS.
					</p>
				) : (
					events.map(({ name, date, time, description, speakers, link }) => (
						<Event
							key={name}
							name={name}
							date={date}
							time={time}
							speakers={speakers}
							description={description}
							link={link}
						/>
					))
				)}
			</div>
		</section>
	);
};

export default Events;
