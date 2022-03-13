import Head from 'next/head';
import Image from 'next/image';
import Events from '../components/Events';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div>
			<Head>
				<title>WTD - Kenya</title>
				<meta name='description' content='Write The Docs Kenya official site' />
				<meta property='og:title' content='Write The Docs KE' />
				<meta property='og:locale' content='en_US' />
				<meta property='og:type' content='article' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header>
				<Navbar />
			</header>

			<Hero />

			<Events />

			{/*<Footer />*/}
		</div>
	);
}
