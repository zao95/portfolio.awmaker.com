import React, { useRef } from 'react'
import tajaVideo from "../../../assets/video/taja.mp4"
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
                    duration={1800}
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
                                <div id="section3Index" className="indexPageWrap pageWrap">
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
                                                    <p className="condensed">03</p>
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
                                                    <p className="condensed">application</p>
                                                </Tween>
                                            </Timeline>
                                        </div>
                                        <div className="subTitle title">
                                            <Timeline totalProgress={progressTime(progress, 0.30, 0.3)} paused>
                                                <Tween
                                                    from={{ opacity: '1', x: '0' }}
                                                    to={{ opacity: '0', x: '200px' }}
                                                >
                                                    <p>taja</p>
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
                                <div id="section3Title" className="titlePageWrap pageWrap">
                                    <div className="titleWrap">
                                        <div className="background">
                                            <Timeline totalProgress={progressTime(progress, 0.24, 0.3)} paused>
                                                <Tween
                                                    from={{ opacity: '0' }}
                                                    to={{ opacity: '1' }}
                                                >
                                                    <div className="videoWrap">
                                                        <video ref={videoElement} className="video" autoPlay muted={true}>
                                                            <source src={tajaVideo} type="video/mp4" />
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
                                                        taja
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
                                                        <p><b>taja</b></p>
                                                        <p><b>TEAM PROJECT</b></p>
                                                        <p>&nbsp;</p>
                                                        <p><b>PLATFORM</b></p>
                                                        <p>ANDROID</p>
                                                        <p>IOS</p>
                                                        <p>&nbsp;</p>
                                                        <p><b>ROLE</b></p>
                                                        <p>PLAN</p>
                                                        <p>DESIGN</p>
                                                        <p>DEVELOPE</p>
                                                        <p>&nbsp;</p>
                                                        <p><b>SIZE</b></p>
                                                        <p>RESPONSIVE</p>
                                                        <p>BASED ON 1080 x 1920</p>
                                                        <p>&nbsp;</p>
                                                        <p><b>TOOLS</b></p>
                                                        <p>ADOBE PHOTOSHOP</p>
                                                        <p>ADOBE ILLUSTRATOR</p>
                                                        <p>VS CODE</p>
                                                        <p>&nbsp;</p>
                                                        <p><b>SKILLS</b></p>
                                                        <p>ECMASCRIPT</p>
                                                        <p>REACT-NATIVE</p>
                                                        <p>SENDBIRD</p>
                                                        <p>AWS ARCHITECTURE</p>
                                                        <p><b>HONOR</b></p>
                                                        <p>THE FIRST PRIZE</p>
                                                        <p>LSD PROGRAM</p>
                                                        <p>ANYANG UNIVERSITY</p>
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
                                                            application
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