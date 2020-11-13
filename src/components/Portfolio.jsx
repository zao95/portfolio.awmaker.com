import React from 'react'
import Sections from "./Sections"
import Main from "./Main"
import Footer from "./Footer"
import Nav from "./Nav"

// 넣어야 할 기능 List
// Index -> title scroll animation
// scroll 올라갔다가 다시 내려갔을때 영상 다시 플레이

const Portfolio = () => {
	return (
		<>
			<Nav />
			<Main />
			<Sections />
			<Footer />
		</>
	)
}

export default Portfolio
