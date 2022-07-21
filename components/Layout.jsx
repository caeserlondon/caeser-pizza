import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ Children }) => {
	return (
		<>
			<Head>
				<title>Caeser&apos;s Pizza</title>
				<meta name='description' content='Created by Caeser Ibrahim' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div>
				<Navbar />
				{Children}
				<Footer />
			</div>
		</>
	)
}

export default Layout
