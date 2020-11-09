import React from 'react'
import Pages from "./pages/Pages"
import Footer from "./Footer"
import Nav from "./Nav"

const Portfolio = () => {
	return (
		<>
			<Nav />
			<Pages.Page00 />
			<Pages.Page01 />
			<Pages.Page02 />
			<Footer />
		</>
	)
}

export default Portfolio
