import React, { useEffect } from 'react'
import Sketch from "react-p5"
import { p5MainScript } from "../scripts/main"
import "../styles/Main.sass"
import music from "../assets/musics/bgm.mp3"

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
	useEffect(() => {
        document.getElementById("volume").value = 100
	})
	return (
		<>
            <div id="Main" className="pageWrap" style={{justifyContent: "center"}}>
				<div id="musicBox">
					<div id="music_start" onClick={p5Main.musicStart}/>
					<div id="volume-control">
						<input id="volume" type="range" max="100" onInput={p5Main.volumeControl} />
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