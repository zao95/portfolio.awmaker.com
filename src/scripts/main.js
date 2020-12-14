import volumeUp from "../assets/icons/volume_up.svg"
import volumeDown from "../assets/icons/volume_down.svg"
import volumeZero from "../assets/icons/volume_zero.svg"
import volumeMute from "../assets/icons/volume_mute.svg"
import playArrow from "../assets/icons/play_arrow.svg"
import pause from "../assets/icons/pause.svg"

// P5 variable
let MAX_PARTICLES = null  // ADD
let MAX_TRIANGLES = null  //500 // ADD
let PARTICLE_FREQUENCY = 0.9  // 1.0
let MAX_PARTICLE_SPEED = 2  // 1.0;
let MAX_PARTICLE_SPEED_MULTIPLE = 1  // 1.0;
let SIZE = 2  //2;
let LIFESPAN_DECREMENT = 1.4  //.5  //2.0
let MAX_TRI_DISTANCE = 80  //50  //35 //25
let MIN_TRI_DISTANCE = 15  //15  //10
let MAX_PARTICLE_NEIGHBOURS = 10  //5;//10;//5;
let MAX_WANDERER_SPEED = 5  //4;
let SPAWN_DELAY = 20  //10
let PARTICLE_LIFESPAN = 255
let SPAWN_POS_RANDOM = 10
let MAX_BRIGHTNESS = 120
let MAX_SPAWNER = 0
let system = null
let triangles = null
let spawners = []
let colour = null
let p5 = null
let MAX_PARTICLE_DRAG = null
let isActive = 0
// Audio variable
let audioElement = null
let audioIconElement = null
let audioPlayIconElement = null
let audioVolumeSave = 1
let audioVolume = 1
let audioMute = false
let audioCtx = null
let analyser = null
let source = null
let data = null
let visualizerElement = null
let mouseClicked = 0

export class p5MainScript {
    constructor(setMixFunction) {
        this.setMixBlend = setMixFunction
    }
    musicState(mode) {
        const target = document.getElementById("musicState")
        if(mode === "play") {
            audioElement.play()
            audioPlayIconElement.style.backgroundImage = `url(${pause})`
            target.style.backgroundImage = `url(${playArrow})`
        }
        if(mode === "pause") {
            audioElement.pause()
            MAX_PARTICLE_SPEED_MULTIPLE = 1
            audioPlayIconElement.style.backgroundImage = `url(${playArrow})`
            if(visualizerElement) {
                for (let i = 0; i < visualizerElement.children.length; i++) {
                    visualizerElement.children[i].style.height = `0`
                }
            }
            target.style.backgroundImage = `url(${pause})`
        }
        const newone = target.cloneNode(true)
        target.parentNode.replaceChild(newone, target)
    }
    musicPlay() {
        const createAnalyser = async () => {
            audioElement = document.getElementById("bgm")
            audioElement.volume = audioVolume
            audioCtx = new AudioContext()
            // 주파수 데이터 제공
            analyser = audioCtx.createAnalyser()
            // 분석기 리턴값 최대 크기
            analyser.fftSize = 256
            // DOM 내에서 돌리지 못하니, media element 생성
            source = audioCtx.createMediaElementSource(audioElement)
            // 노드와 스피커를 연결시켜준다.
            source.connect(analyser)
            source.connect(audioCtx.destination)
            // analyser.connect(audioCtx.destination)
            // 데이터 저장소 생성
            data = new Uint8Array(analyser.frequencyBinCount)
            visualizerElement = document.getElementById("visualizer")
            audioPlayIconElement = document.getElementById("musicPlay")
        }
        if(!source) {
            createAnalyser()
            .then(() => {
                this.musicState("play")
            }).catch((e) => {
                console.log("Create Analyser function error")
                console.log(e)
            })
        }
        else {
            if (audioElement.paused) {
                this.musicState("play")
            } else {
                this.musicState("pause")
            }
        }
    }
    looping() {
        if(audioCtx && !audioElement.paused) {
            // data에 데이터를 넣어라
            analyser.getByteFrequencyData(data)
            let volume = data.slice(0, 16).reduce(( p, c ) => p + c, 0) / data.length
            volume = !audioMute && audioVolume ? volume / (Math.log(audioVolume * 100) - Math.log(1.5)) / 1.5 - 2.25: 1
            MAX_PARTICLE_SPEED_MULTIPLE = volume
            if(visualizerElement) {
                for (let i = 0; i < visualizerElement.children.length; i++) {
                    let height = data.slice(i * 3, (i + 1) * 3).reduce(( p, c ) => p + c, 0) / data.length * 20
                    if (height > 100) {
                        height = 100
                    }
                    visualizerElement.children[i].style.height = `${height}%`
                }
            }
        }
    }
    volumeControl(volume) {
        if(volume === "mute") {
            audioMute = !audioMute
            if (audioMute) {
                audioVolume = 0
            } else {
                audioVolume = audioVolumeSave
            }
        } else {
            audioVolume = audioMute ? 0 : volume / 100
            audioVolumeSave = audioVolume
        }
        if (audioElement) {
            audioElement.volume = audioVolume
        }
        audioIconElement = document.getElementById("volumeIcon")
        if (audioMute) {
            audioIconElement.style.backgroundImage = `url(${volumeMute})`
        }
        else if (audioVolume === 0) {
            audioIconElement.style.backgroundImage = `url(${volumeZero})`
        }
        else if (audioVolume < 0.5) {
            audioIconElement.style.backgroundImage = `url(${volumeDown})`
        }
        else {
            audioIconElement.style.backgroundImage = `url(${volumeUp})`
        }
    }
    async preload(p5Lib) {
        p5 = p5Lib
		// Simulation Systems
		system = new ParticleSystem()
        triangles = new TriangleSystem()
        // Particle spawner
        if (window.innerWidth < 960) {
            MAX_SPAWNER = 1
            MAX_PARTICLE_DRAG = 1
            MAX_PARTICLES = 50
            MAX_TRIANGLES = 150
        } else {
            MAX_SPAWNER = 4
            MAX_PARTICLE_DRAG = 2
            MAX_PARTICLES = 500  // ADD
            MAX_TRIANGLES = 2500  //500 // ADD
        }
        colour = new ColourGenerator()

        this.setMixBlend(true)
        document.getElementById("root").style.height = "auto"
        document.getElementById("root").style.overflow = "auto"
        document.getElementById("loadingContainer").remove()
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 100)
    }
    setup(p5Lib, canvasParentRef) {
		p5.createCanvas(window.innerWidth, window.innerHeight + 11).parent(canvasParentRef)
		p5.clear()
		p5.frameRate(30)
		p5.noStroke()
        p5.smooth()
        for (let i = 0; i < MAX_SPAWNER; i++) {
            spawners.push(new Wanderer())
        }
		/* Global colour object */
        // for (let i = 0; i < 100; i++) {
        //     system.addParticle(this.locationRandom())
        // }
    }
    locationRandom() {
        const x = p5.random(0, p5.width)
        const y = p5.random(0, p5.height)
        return p5.createVector(x, y)
    }
    draw(p5) {
        this.looping()
        isActive = 0
        p5.clear()
        // Clear Triangles
        triangles.clear()
        // Move spawner
        // Add particles at spawner location
        const locationRandom = (locX, locY) => {
            const x = locX + p5.random(-SPAWN_POS_RANDOM, SPAWN_POS_RANDOM)
            const y = locY + p5.random(-SPAWN_POS_RANDOM, SPAWN_POS_RANDOM)
            return p5.createVector(x, y)
        }
        for (let i = 0; i < spawners.length; i++) {
            spawners[i].update()
        }
        for (let i = 0; i < spawners.length; i++) {
            !Math.round(p5.random(0, PARTICLE_FREQUENCY)) && system.addParticle(locationRandom(spawners[i].loc.x, spawners[i].loc.y))
        }
        // for (let i = 0; i < 2; i++) {
        //     system.addParticle(this.locationRandom())
        // }
        // Update our particle and triangle systems each frame
        system.update()
        triangles.display()
    }
    mousePressed() {
        mouseClicked = 1
    }
    mouseClicked() {
        if (p5.mouseY < p5.height && mouseClicked) {
            this.musicPlay()
        }
    }
    mouseDragged(p5) {
        if (isActive) {
            mouseClicked = 0
        }
        if (isActive < MAX_PARTICLE_DRAG && system) {
            isActive += 1
            let posX = p5.mouseX
            let posY = p5.mouseY
            system.addParticle(p5.createVector(posX, posY))
        }
    }
    touchStarted(p5) {
        let posX = p5.mouseX
        let posY = p5.mouseY
        if (system) {
            system.addParticle(p5.createVector(posX, posY))
            system.addParticle(p5.createVector(posX, posY))
            system.addParticle(p5.createVector(posX, posY))
            system.addParticle(p5.createVector(posX, posY))
            system.addParticle(p5.createVector(posX, posY))
            system.addParticle(p5.createVector(posX, posY))
        }
    }
    windowResized(p5) {
        p5.resizeCanvas(window.innerWidth, window.innerHeight + 11)
        // window.innerWidth < 960 ? MAX_SPAWNER = 2 : MAX_SPAWNER = 5
    }
}

class ColourGenerator {
    constructor() {
        this.MIN_SPEED = 0.2
        this.MAX_SPEED = 0.7
        // Starting colour
        this.R = p5.random(0, MAX_BRIGHTNESS)
        this.G = p5.random(0, MAX_BRIGHTNESS)
        this.B = p5.random(0, MAX_BRIGHTNESS)
        // Starting transition speed
        this.Rspeed = (p5.random(1) > 0.5 ? 1 : -1) * p5.random(this.MIN_SPEED, this.MAX_SPEED)
        this.Gspeed = (p5.random(1) > 0.5 ? 1 : -1) * p5.random(this.MIN_SPEED, this.MAX_SPEED)
        this.Bspeed = (p5.random(1) > 0.5 ? 1 : -1) * p5.random(this.MIN_SPEED, this.MAX_SPEED)
    }
    update() {
        // Use transition to alter original colour (Keep within RGB bounds)
        this.Rspeed = ((this.R += this.Rspeed) > MAX_BRIGHTNESS ||
            (this.R < 0)) ? -this.Rspeed : this.Rspeed
        this.Gspeed = ((this.G += this.Gspeed) > MAX_BRIGHTNESS ||
            (this.G < 0)) ? -this.Gspeed : this.Gspeed
        this.Bspeed = ((this.B += this.Bspeed) > MAX_BRIGHTNESS ||
            (this.B < 0)) ? -this.Bspeed : this.Bspeed
    }
}

class Particle {
    constructor(origin) {
        this.velocity = p5.createVector(p5.random(-MAX_PARTICLE_SPEED, MAX_PARTICLE_SPEED), p5.random(-MAX_PARTICLE_SPEED, MAX_PARTICLE_SPEED))
        this.pos = origin
        this.lifespan = PARTICLE_LIFESPAN
        // Stores nearby particles, for drawing triangles
        this.neighbours = []
    }
    move() {
        // Apply velocity to particle
        this.pos.x += this.velocity.x * MAX_PARTICLE_SPEED_MULTIPLE
        this.pos.y += this.velocity.y * MAX_PARTICLE_SPEED_MULTIPLE
        // Wrap around screen
        if (this.pos.x > p5.width) {
            this.pos.x -= p5.width
        }
        if (this.pos.x < 0) {
            this.pos.x += p5.width
        }
        if (this.pos.y > this.height) {
            this.pos.y -= this.height
        }
        if (this.pos.y < 0) {
            this.pos.y += this.height
        }
        // Decrease particle lifespan
        this.lifespan -= LIFESPAN_DECREMENT;
    }
    display() {
        p5.noFill()
        p5.fill(colour.R, colour.G, colour.B, this.lifespan)
        p5.ellipse(this.pos.x, this.pos.y, SIZE, SIZE)
    }
    isDead() {
        if (this.lifespan < 0) {
            return true
        } else {
            return false
        }
    }
}

class ParticleSystem {
    constructor() {
        this.particles = []
    }
    addParticle(loc) {
        if (this.particles.length < MAX_PARTICLES) {
            const part = new Particle(loc)
            for (let i = 0; i < SPAWN_DELAY; i++) {
                part.move()
            }
            this.particles.push(part)
        }
    }
    /* Discover and draw triangles between particle neighbours */
    discoverNeighbours() {
        let p1 = null
        let p2 = null
        // Work out neighbours/triangles for each particle
        for (let x = 0; x < this.particles.length; x++) {
            p1 = this.particles[x]
            // Clear neighbours
            p1.neighbours = []
            // Add particle itself to list of its neighbours (so traingles form using this particle)
            p1.neighbours.push(p1)
            // For other particles
            for (let y = x + 1; y < this.particles.length; y++) {
                p2 = this.particles[y]
                const distance = p5.dist(p1.pos.x, p1.pos.y, p2.pos.x, p2.pos.y)
                // If particle is within max distance
                if (distance > MIN_TRI_DISTANCE && distance < MAX_TRI_DISTANCE) {
                    // Add to neighbours
                    p1.neighbours.push(p2)
                }
            }
            if (p1.neighbours.length > 1 && p1.neighbours.length < MAX_PARTICLE_NEIGHBOURS) {
                triangles.addTriangles(p1.neighbours)
            }
        }
    }
    /* Update Particle System */
    update() {
        // Loop through particles and remove inactive particles
        for (let i = 0; i < this.particles.length; i++) {
            // Get next particle
            // update position and lifespan
            this.particles[i].move()
            // Remove particle if dead
            if (this.particles[i].isDead()) {
                this.particles.splice(i, 1)
            } else {
                this.particles[i].display()
            }
        }
        // Update the colour of the particle system
        colour.update()
        // Discover neighbours and draw triangles
        this.discoverNeighbours()
    }
}

class Triangle {
    constructor(p1, p2, p3) {
        this.A = p1
        this.B = p2
        this.C = p3
    }
    display() {
        p5.vertex(this.A.x, this.A.y)
        p5.vertex(this.B.x, this.B.y)
        p5.vertex(this.C.x, this.C.y)
    }
}

class TriangleSystem {
    constructor() {
        this.triangles = []
    }
    addTriangles(neighbours) {
        // Takes neighbours of a particle and adds triangles
        const size = neighbours.length
        // Foreach neighbour (if there are over 2 neighbours)
        if (size > 2) {
            for (let i = 1; i < size - 1; i++) {
                for (let j = i + 1; j < size; j++) {
                    if (this.triangles.length < MAX_TRIANGLES) {
                        // Create new triangle for each neighbour (always use the particle itself as part of the triangle)
                        this.triangles.push(new Triangle(neighbours[0].pos, neighbours[i].pos, neighbours[j].pos));
                    }
                }
            }
        }
    }
    display() {
        p5.noStroke()
        p5.stroke(`rgba(${Math.round(p5.max(colour.R, 0))}, ${Math.round(p5.max(colour.G, 0))}, ${Math.round(p5.max(colour.B, 0))}, 0.12)`)  // - 15, 0), max(colour.G - 15, 0), max(colour.B, 0), 13);
        p5.fill(`rgba(${Math.round(colour.R)}, ${Math.round(colour.G)}, ${Math.round(colour.B)}, 0.07)`)
        //noFill()
        p5.beginShape(p5.TRIANGLES);
        for (let i = 0; i < this.triangles.length; i++) {
            const t = this.triangles[i]
            t.display()
        }
        p5.endShape()
    }
    clear() {
        // Clear triangles
        this.triangles = []
    }
}

class Wanderer {
    constructor() {
        this.loc = p5.createVector(p5.random(p5.width), p5.random(p5.height))
        this.vel = p5.createVector(0, 0)
        this.acc = p5.createVector(0, 0)
        this.angle = null
    }
    update() {
        // Move in random direction with random speed
        this.angle += p5.random(0, p5.TWO_PI)
        const magnitude = p5.random(0, 1.5) //3
        // Work out force
        this.acc.x += p5.cos(this.angle) * magnitude
        this.acc.y += p5.sin(this.angle) * magnitude
        // limit result
        this.acc.limit(3)
        // Add to current velocity
        this.vel.add(this.acc)
        if (MAX_PARTICLE_SPEED_MULTIPLE < 1) {
            this.vel.limit(MAX_WANDERER_SPEED * MAX_PARTICLE_SPEED_MULTIPLE)  //6);
        } else {
            this.vel.limit(MAX_WANDERER_SPEED)
        }
        // Appy result to current location
        this.loc.add(this.vel)
        // Wrap around screen
        if (this.loc.x > p5.width) {
            this.loc.x -= p5.width
        }
        if (this.loc.x < 0) {
            this.loc.x += p5.width
        }
        if (this.loc.y > p5.height) {
            this.loc.y -= p5.height
        }
        if (this.loc.y < 0) {
            this.loc.y += p5.height
        }
    }
    display() {
        p5.fill(0);
        p5.ellipse(this.loc.x, this.loc.y, 10, 10);
    }
}