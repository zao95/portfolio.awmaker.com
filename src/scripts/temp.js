// audio variable
let audioElement = null
let audioCtx = null
let analyser = null
let source = null
let data = null

export class p5MainScript {
    constructor(a) {
        this.a = a
    }
    musicStart = async () => {
        console.log("musicPlay")
        const createAnalyser = async () => {
            audioElement = document.getElementById("bgm")
            audioCtx = new AudioContext()
            // 주파수 데이터 제공
            analyser = audioCtx.createAnalyser()
            // 분석기 리턴값 최대 크기
            analyser.fftSize = 2048
            // DOM 내에서 돌리지 못하니, media element 생성
            source = audioCtx.createMediaElementSource(audioElement)
            // 노드와 스피커를 연결시켜준다.
            source.connect(analyser)
            source.connect(audioCtx.destination)
            // analyser.connect(audioCtx.destination)
            // 데이터 저장소 생성
            data = new Uint8Array(analyser.frequencyBinCount)
        }
        if(!source) {
            await createAnalyser()
            .then(() => {
                audioElement.play()
            }).catch(() => {
                console.log("Create Analyser function error")
            })
        }
        else {
            audioElement.paused ? audioElement.play() : audioElement.pause()
        }
    }
    looping = () => {
        if(audioCtx && !audioElement.paused) {
            // data에 데이터를 넣어라
            analyser.getByteFrequencyData(data)
            // console.log(data)
            console.log(data.reduce( ( p, c ) => p + c, 0 ) / data.length)
        }
    }
    setup = (p5, canvasParentRef) => {
		p5.createCanvas(window.innerWidth, window.innerHeight + 11).parent(canvasParentRef)
		// p5.clear()
		p5.frameRate(60)
		p5.noStroke()
        p5.smooth()
    }
    draw = (p5) => {
        // temp
        this.looping()
    }
    windowResized = (p5) => {
        // temp
    }
    mouseDragged = (p5) => {
        // temp
    }
    touchStarted = (p5) => {
        // temp
    }
}
