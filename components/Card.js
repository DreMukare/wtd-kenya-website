import Image from 'next/image';

const Card = ({
	name,
	title,
	role,
	hobbies,
	img,
	LinkedIn,
	email,
	github,
	twitter,
	blogs,
}) => {
	return (
		<section>
			<Image
				src={img}
				alt='Image of person'
				height={20}
				width={20}
				objectFit='contain'
				objectPosition='center'
			/>
			<h4>{name}</h4>
			{title && <p>Title: {title}</p>}
			{role && <p>{role}</p>}
			{hobbies && (
				<p>
					Hobbies:{' '}
					{hobbies.map((hobby, index) => (
						<span key={index}>{hobby}</span>
					))}
				</p>
			)}
			{email && <p>Email Address: {email}</p>}
			{blogs &&
				blogs.map(({ name, link }) => (
					<a key={link} href={link} rel='noopener noreferrer' target='_blank'>
						{name}
					</a>
				))}
			<div>
				{LinkedIn && (
					<a href={LinkedIn} rel='noopener noreferrer' target='_blank'>
						icon
					</a>
				)}
				{github && (
					<a href={github} rel='noopener noreferrer' target='_blank'>
						icon
					</a>
				)}
				{twitter && (
					<a href={twitter} rel='noopener noreferrer' target='_blank'>
						icon
					</a>
				)}
			</div>
		</section>
	);
};

export default Card;
