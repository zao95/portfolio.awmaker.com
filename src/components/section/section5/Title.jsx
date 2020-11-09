import React from 'react'
import restaiVideo from "../../../assets/video/restai.mp4"

const Title = () => {
	return (
		<>
            <div id="section5" className="titlePageWrap pageWrap">
				<div className="titleWrap">
					<div className="background">
						<div className="videoWrap">
							<video className="video" autoPlay loop muted={true}>
								<source src={restaiVideo} type="video/mp4" />
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