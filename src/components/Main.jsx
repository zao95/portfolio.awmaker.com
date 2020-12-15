import React, { useState, useRef, useEffect } from 'react'
import Sketch from "react-p5"
import { p5MainScript } from "../scripts/main"
import music from "../assets/musics/bgm.mp3"
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import "../styles/Main.sass"

const Main = () => {
	const [mixBlend, setMixBlend] = useState(false)
	const p5Main = new p5MainScript(setMixBlend)
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
			document.getElementById("nav").style.mixBlendMode = "normal"
			document.getElementById("nav").style.filter = "none"
			document.getElementById("musicBox").style.mixBlendMode = "normal"
			document.getElementById("musicBox").style.filter = "none"
			document.getElementById("scrollAnimate").style.opacity = "0.8"
			document.getElementById("mainPageTitle").classList.remove("fadeout")
			window.addEventListener('scroll', (e) => {
				setMixBlend(true)
				document.getElementById("nav").style.mixBlendMode = "difference"
				document.getElementById("nav").style.filter = "invert(100%)"
				document.getElementById("musicBox").style.mixBlendMode = "difference"
				document.getElementById("musicBox").style.filter = "invert(100%)"
				document.getElementById("scrollAnimate").style.opacity = "0"
				document.getElementById("mainPageTitle").classList.add("fadeout")
			})
		}
	}, [mixBlend])
	return (
		<>
            <div id="Main" className="pageWrap" style={{justifyContent: "center"}}>
				<div id="musicBox" onMouseDown={(e) => e.stopPropagation()} onMouseLeave={() => SliderView(1)}>
					<div id="musicPlay" onClick={(e) => {p5Main.musicPlay(); e.stopPropagation()}} />
					<div id="volumeWrap" onClick={(e) => e.stopPropagation()} ref={volumeControlWrap} onMouseOver={() => SliderView(0)}>
						<div id="volumeIcon" ref={volumeIcon} onClick={() => p5Main.volumeControl("mute")}/>
						<Slider
							className="volumeControl"
							defaultValue={100}
							min={0}
							max={100}
							onChange={(val) => p5Main.volumeControl(val)}
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
					mousePressed={(p5) => {
						p5Main.mousePressed(p5)
					}}
					mouseClicked={(p5) => {
						p5Main.mouseClicked(p5)
					}}
					mouseDragged={(p5) => {
						p5Main.mouseDragged(p5)
					}}
					touchStarted={(p5) => {
						p5Main.touchStarted(p5)
					}}
				/>
				<div id="scrollAnimate">
					<p className="condensed">SCROLL DOWN</p>
					<div className="arrow">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div id="musicStateWrap">
					<div id="musicState" />
				</div>
				<div id="mainPageTitle">
					<p className="condensed">Front-end Developer</p>
					<p className="condensed">Lee Jeong-Woo</p>
				</div>
			</div>
		</>
	)
}

export default Main