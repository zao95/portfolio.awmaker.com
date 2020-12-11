import React, { useState, useRef, useEffect } from 'react'
import Sketch from "react-p5"
import { p5MainScript } from "../scripts/main"
import music from "../assets/musics/bgm.mp3"
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import "../styles/Main.sass"

// 할 것
// https://medium.com/@nishancw/audio-visualization-in-javascript-with-p5-js-cf3bc7f1be07
// 음악에 맞춰서 particle 움직임 속도 배속넣기
// 배속은 mainScript에서 메소드로 전역변수 변경해버리기

// 중앙 부분에 특정 텍스트 모양으로 두껍게 고정 파티클 넣기
// 로고 테두리 따라서 파티클 넣고,
// 음악에 맞춰서 확대/축소 반복하기
// 볼륨에 역수 취해서 particle speed 곱하기. 0은 제외.
//
const Main = () => {
	const p5Main = new p5MainScript()
	const [mixBlend, setMixBlend] = useState(false)
	const volumeIcon = useRef(null)
	const volumeControlWrap = useRef(null)
	const SliderView = (e) => {
		if (volumeControlWrap.current !== null) {
			const target = volumeControlWrap.current.children[1]
			e ? target.style.width = "30px" : target.style.width = "60px"
		}
	}
	useEffect(() => {
		if (!mixBlend) {
			window.addEventListener('scroll', (e) => {
				setMixBlend(true)
				document.getElementById("nav").style.mixBlendMode = "difference"
				document.getElementById("nav").style.filter = "invert(100%)"
				document.getElementById("musicBox").style.mixBlendMode = "difference"
				document.getElementById("musicBox").style.filter = "invert(100%)"
			})
		}
	}, [mixBlend])
	return (
		<>
            <div id="Main" className="pageWrap" style={{justifyContent: "center"}}>
				<div id="musicBox" onMouseLeave={() => SliderView(1)}>
					<div id="musicPlay" onClick={p5Main.musicPlay}/>
					<div id="volumeWrap" ref={volumeControlWrap} onMouseOver={() => SliderView(0)}>
						<div id="volumeIcon" ref={volumeIcon} onClick={() => p5Main.volumeControl("mute")}/>
						<Slider
							className="volumeControl"
							defaultValue={100}
							min={0}
							max={100}
							onChange={p5Main.volumeControl}
							trackStyle={{backgroundColor: "#000"}}
							railStyle={{backgroundColor: "#000"}}
							handleStyle={{borderColor: "#000"}}
						/>
					</div>
					<div id="visualizer">
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
						<div />
					</div>
					<audio id="bgm" controls loop>
						<source src={music} type="audio/mp3" />
						Your browser does not support the audio element.
					</audio>
				</div>
				<Sketch
					preload={(p5) => {
						p5Main.preload(p5)
					}}
					setup={(p5, canvasParentRef) => {
						p5Main.setup(p5, canvasParentRef)
					}}
					draw={(p5) => {
						p5Main.draw(p5)
					}}
					windowResized={(p5) => {
						p5Main.windowResized(p5)
					}}
					mouseDragged={(p5) => {
						p5Main.mouseDragged(p5)
					}}
					touchStarted={(p5) => {
						p5Main.touchStarted(p5)
					}}
				/>
			</div>
		</>
	)
}

export default Main