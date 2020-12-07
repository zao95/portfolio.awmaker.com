import React from 'react'
import Sketch from "react-p5"
import { p5MainScript } from "../scripts/main"
import "../styles/Main.sass"

// 할 것
// https://medium.com/@nishancw/audio-visualization-in-javascript-with-p5-js-cf3bc7f1be07
// 음악에 맞춰서 particle 움직임 속도 배속넣기
// 중앙 부분에 특정 텍스트 모양으로 두껍게 고정 파티클 넣기
const Main = () => {
	const p5Main = new p5MainScript()
	return (
		<>
            <div id="Main" className="pageWrap" style={{justifyContent: "center"}}>
				<Sketch
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