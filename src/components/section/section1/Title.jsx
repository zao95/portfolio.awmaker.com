import React from 'react'
import onlinePortfolioVideo from "../../../assets/video/online_portfolio.mp4"

const Title = () => {
	return (
		<>
            <div id="section1" className="titlePageWrap pageWrap">
				<div className="titleWrap">
					<div className="background">
						<div className="videoWrap">
							<video className="video" autoPlay loop muted={true}>
								<source src={onlinePortfolioVideo} type="video/mp4" />
							</video>
						</div>
						<div className="dark" />
					</div>
				</div>
			</div>
		</>
	)
}

export default Title