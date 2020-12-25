import React, { useRef } from 'react'
import onlinePortfolioVideo from "../../../assets/video/online_portfolio.mp4"
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'

const Index = () => {
    const videoElement = useRef(null)
    const progressTime = (progress, startPercent, usingPercent = 1) => {
        if (progress <= startPercent) {
            return 0
        }
        return (progress - startPercent) / usingPercent
    }
	return (
		<>
            <Controller>
                <Scene
                    triggerHook="onLeave"
                    duration={1200}
                    pin
                >
                    {(progress) => {
                        if (progress <= 0 && videoElement.current) {
                            if (videoElement.current.currentTime !== 0) {
                                videoElement.current.pause()
                                videoElement.current.currentTime = 0
                                videoElement.current.load()
                            }
                        }
                        return (
                            <div className="sticky">
                                <div id="section2Index" className="indexPageWrap pageWrap">
                                    <div className="indexWrap">
                                        <div className="mainTitle title">
                                            <Timeline totalProgress={progressTime(progress, 0.10, 0.3)} paused>
                                                <Tween
                                                    from={{ opacity: '1', x: '0' }}
                                                    to={{ opacity: '0', x: '-200px' }}
                                                >
                                                    <div className="lineHorizon line" />
                                                </Tween>
                                            </Timeline>
                                            <Timeline totalProgress={progressTime(progress, 0.26, 0.3)} paused>
                                                <Tween
                                                    from={{ opacity: '1', y: '0' }}
                                                    to={{ opacity: '0', y: '200px' }}
                                                >
                                                    <p className="condensed">02</p>
                                                </Tween>
                                            </Timeline>
                                            <Timeline totalProgress={progressTime(progress, 0.18, 0.3)} paused>
                                                <Tween
                                                    from={{ opacity: '1', y: '0' }}
                                                    to={{ opacity: '0', y: '-200px' }}
                                                >
                                                    <div className="lineVertical line" />
                                                </Tween>
                                            </Timeline>
                                            <Timeline totalProgress={progressTime(progress, 0.34, 0.3)} paused>
                                                <Tween
                                                    from={{ opacity: '1', x: '0' }}
                                                    to={{ opacity: '0', x: '200px' }}
                                                >
                                                    <p className="condensed">website</p>
                                                </Tween>
                                            </Timeline>
                                        </div>
                                        <div className="subTitle title">
                                            <Timeline totalProgress={progressTime(progress, 0.30, 0.3)} paused>
                                                <Tween
                                                    from={{ opacity: '1', x: '0' }}
                                                    to={{ opacity: '0', x: '200px' }}
                                                >
                                                    <p>online portfolio</p>
                                                </Tween>
                                            </Timeline>
                                            <Timeline totalProgress={progressTime(progress, 0.22, 0.3)} paused>
                                                <Tween
                                                    from={{ opacity: '1', y: '0' }}
                                                    to={{ opacity: '0', y: '200px' }}
                                                >
                                                    <div className="lineVertical line" />
                                                </Tween>
                                            </Timeline>
                                        </div>
                                    </div>
                                </div>
                                <div id="section1Title" className="titlePageWrap pageWrap">
                                    <div className="titleWrap">
                                        <div className="background">
                                            <Timeline totalProgress={progressTime(progress, 0.24, 0.3)} paused>
                                                <Tween
                                                    from={{ opacity: '0' }}
                                                    to={{ opacity: '1' }}
                                                >
                                                    <div className="videoWrap">
                                                        <video ref={videoElement} className="video" autoPlay muted={true}>
                                                            <source src={onlinePortfolioVideo} type="video/mp4" />
                                                        </video>
                                                    </div>
                                                </Tween>
                                            </Timeline>
                                            <Timeline totalProgress={progressTime(progress, 0.48, 0.4)} paused>
                                                <Tween
                                                    from={{ opacity: '0' }}
                                                    to={{ opacity: '1' }}
                                                >
                                                    <div className="dark" />
                                                </Tween>
                                            </Timeline>
                                        </div>
                                        <div className="overlayWrap">
                                            <Timeline totalProgress={progressTime(progress, 0.65, 0.2)} paused>
                                                <Tween
                                                    from={{ opacity: '0', y: '-20px' }}
                                                    to={{ opacity: '1', y: '0' }}
                                                >
                                                    <div className="titleBox">
                                                        <p className="title condensed">
                                                            onl ine portfolio
                                                        </p>
                                                    </div>
                                                </Tween>
                                            </Timeline>
                                            <Timeline totalProgress={progressTime(progress, 0.75, 0.1)} paused>
                                                <Tween
                                                    from={{ opacity: '0', y: '-20px' }}
                                                    to={{ opacity: '1', y: '0' }}
                                                >
                                                    <div className="lineVertical line"></div>
                                                    <div className="contentsWrap">
                                                        <p><b>ONLINE PORTFOLIO</b></p>
                                                        <p><b>PERSONAL PROJECT</b></p>
                                                        <p>&nbsp;</p>
                                                        <p><b>PLATFORM</b></p>
                                                        <p>WEBSITE</p>
                                                        <p>&nbsp;</p>
                                                        <p><b>SIZE</b></p>
                                                        <p>RESPONSIVE</p>
                                                        <p>BASED ON 1920 x 1080</p>
                                                        <p>&nbsp;</p>
                                                        <p><b>TOOLS</b></p>
                                                        <p>ADOBE PHOTOSHOP</p>
                                                        <p>ADOBE ILLUSTRATOR</p>
                                                        <p>VS CODE</p>
                                                        <p>&nbsp;</p>
                                                        <p><b>SKILLS</b></p>
                                                        <p>SASS</p>
                                                        <p>ECMASCRIPT</p>
                                                        <p>THREE.JS</p>
                                                        <p>P5.JS</p>
                                                        <p>REACT</p>
                                                    </div>
                                                </Tween>
                                            </Timeline>
                                            <Timeline totalProgress={progressTime(progress, 0.75, 0.1)} paused>
                                                <Tween
                                                    from={{ opacity: '0', y: '20px' }}
                                                    to={{ opacity: '1', y: '0' }}
                                                >
                                                    <div className="indexWrap">
                                                        <div className="lineVertical line"></div>
                                                        <p className="index condensed">
                                                            website
                                                        </p>
                                                    </div>
                                                </Tween>
                                            </Timeline>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }}
                </Scene>
            </Controller>
		</>
	)
}

export default Index