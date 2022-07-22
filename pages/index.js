import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Caeser&apos;s Pizza</title>
				<meta name='description' content='Created by Caeser Ibrahim' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div>home page</div>
		</div>
	)
}
