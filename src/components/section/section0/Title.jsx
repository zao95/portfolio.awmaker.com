import React from 'react'
import profileVideo from "../../../assets/video/profile.mp4"

const Title = () => {
	return (
		<>
            <div id="section0" className="titlePageWrap pageWrap">
				<div className="titleWrap">
					<div className="background">
						<div className="videoWrap">
							<video className="video" autoPlay loop muted={true}>
								<source src={profileVideo} type="video/mp4" />
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