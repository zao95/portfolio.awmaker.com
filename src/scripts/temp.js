export class p5MainScript {
    constructor(a) {
        this.a = a
    }
    setup = (p5, canvasParentRef) => {
		p5.createCanvas(window.innerWidth, window.innerHeight + 11).parent(canvasParentRef)
		p5.clear()
		p5.frameRate(60)
		p5.noStroke()
        p5.smooth()

        const temp = p5.dist(1, 2, 7, 8)
        console.log(temp)
    }
    draw = (p5) => {
        p5.clear()
		p5.frameRate(60)
		p5.noStroke()
		p5.smooth()
        p5.background(50)
    }
}
