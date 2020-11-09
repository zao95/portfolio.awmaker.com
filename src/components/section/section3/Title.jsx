import React from 'react'
import tajaVideo from "../../../assets/video/taja.mp4"

const Title = () => {
	return (
		<>
            <div id="section3" className="titlePageWrap pageWrap">
				<div className="titleWrap">
					<div className="background">
						<div className="videoWrap">
							<video className="video" autoPlay loop muted={true}>
								<source src={tajaVideo} type="video/mp4" />
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