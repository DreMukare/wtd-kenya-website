import Head from 'next/head';
import Image from 'next/image';
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
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header>
				<Navbar />
			</header>

			<main>
				<Hero />
			</main>

			<Footer />
		</div>
	);
}
