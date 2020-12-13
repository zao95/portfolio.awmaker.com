import React from 'react'
import Sections from "./Sections"
import Main from "./Main"
import Footer from "./Footer"
import Nav from "./Nav"
import Loading from "./common/Loading"

const Portfolio = () => {
	return (
		<>
			<Loading />
			<Nav />
			<Main />
			<Sections />
			<Footer />
		</>
	)
}

export default Portfolio
