import React from 'react'
import Sketch from "react-p5"
import { p5MainScript } from "../scripts/main"
import "../styles/Main.sass"

// webGL 내용은 hello, world에서 따오기
const Main = () => {
	const p5Main = new p5MainScript("123")
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
						p5.resizeCanvas(window.innerWidth, window.innerHeight + 11)
					}}
				/>
			</div>
		</>
	)
}

export default Main