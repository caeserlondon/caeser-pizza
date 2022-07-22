import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Caeser&apos;s Pizza</title>
				<meta name='description' content='Created by Caeser Ibrahim' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div>
				<Navbar />
				{children}
				<Footer />
			</div>
		</>
	)
}

export default Layout
