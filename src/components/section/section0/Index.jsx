import React, { useRef } from 'react'
import profileVideo from "../../../assets/video/profile.mp4"
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
                                <div id="section0Index" className="indexPageWrap pageWrap">
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
                                                    <p className="condensed">00</p>
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
                                                    <p className="condensed">profile</p>
                                                </Tween>
                                            </Timeline>
                                        </div>
                                    </div>
                                </div>
                                <div id="section0Title" className="titlePageWrap pageWrap">
                                    <div className="titleWrap">
                                        <div className="background">
                                            <Timeline totalProgress={progressTime(progress, 0.24, 0.3)} paused>
                                                <Tween
                                                    from={{ opacity: '0' }}
                                                    to={{ opacity: '1' }}
                                                >
                                                    <div className="videoWrap">
                                                        <video ref={videoElement} className="video" autoPlay muted={true}>
                                                            <source src={profileVideo} type="video/mp4" />
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
                                                            lee jeong-woo
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
                                                        <p><b>position</b></p>
                                                        <p>full stack developer</p>
                                                        <p>designer</p>
                                                        <p>&nbsp;</p>
                                                        <p>+82 10-9522-0890</p>
                                                        <p id="emailAddress">awmaker@kakao.com</p>
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
                                                            profile
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