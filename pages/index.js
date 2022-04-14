import Head from 'next/head';
import * as React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Layout />
			<Head>
				<title>ຄຳສອນພຣະພຸດທະເຈົ້າ App</title>
				<meta name="description" content="ຄຳສອນພຣະພຸດທະເຈົ້າ App" />
				<link rel="icon" href="../public/favicon.ico" />
				<link rel="apple-touch-icon" href="../public/128.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#D48F20C6" />
				<meta name="background_color" content="#D48F20C6" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>
		</div>
	);
}
