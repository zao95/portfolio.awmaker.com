import React from 'react'
import profileVideo from "../../../assets/video/profile.mp4"

const Title = () => {
	return (
		<>
            <div id="section0Title" className="titlePageWrap pageWrap">
				<div className="titleWrap">
					<div className="background">
						<div className="videoWrap">
							<video className="video" autoPlay muted={true}>
								<source src={profileVideo} type="video/mp4" />
							</video>
						</div>
						<div className="dark" />
					</div>
					<div className="overlayWrap">
						<div className="titleBox">
							<p className="title condensed">
								lee jeong-woo
							</p>
						</div>
						<div className="lineVertical line"></div>
						<div className="contentsWrap">
							<p><b>position</b></p>
							<p>front-end developer</p>
							<p>designer</p>
							<p>&nbsp;</p>
							<p>+82 10-9522-0890</p>
							<p>awmaker@kakao.com</p>
						</div>
						<div className="indexWrap">
							<div className="lineVertical line"></div>
							<p className="index">
								profile
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Title