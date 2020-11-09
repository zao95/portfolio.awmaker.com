import React from 'react'
import nutryVideo from "../../../assets/video/nutry.mp4"

const Title = () => {
	return (
		<>
            <div id="section4" className="titlePageWrap pageWrap">
				<div className="titleWrap">
					<div className="background">
						<div className="videoWrap">
							<video className="video" autoPlay loop muted={true}>
								<source src={nutryVideo} type="video/mp4" />
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