"use strict"

// Exercise create a bouncing ball, with some radius (r) ..
// The ball should bounce of all four walls of the canvas
// Hints:-
// You will need to clear the canvas each frame
// The ball should have a DX and DY (initialise them both to (about 10)
// Negate DX when a side wall is hit
// Negate DY when the top/bottom is hit

// let x=50
// let y=50
// let x2=80
// let y2=80
// let dx=Math.floor(Math.random()*10)+1
// let dy=Math.floor(Math.random()*8)+1
// let dx2=Math.floor(Math.random()*20)+1
// let dy2=Math.floor(Math.random()*20)+1
let c=<HTMLCanvasElement>document.getElementById("myCanvas")
let ctx=<CanvasRenderingContext2D>c.getContext("2d")
let sound = new Audio("34TSCQ2-bounce-distorted-impulse.mp3")


class Ball {
    color="#333637"
    radius=40
    x= 50
    y=50
    dx=(Math.random()*10)+1
    dy=(Math.random()*8)+1
    

    constructor (color:string, radius:number, x:number, y:number, dx:number, dy:number) {

        this.color=color
        this.radius=radius
        this.x=x
        this.y=y
        // this.dx=dx
        // this.dy=dy

    }

    move() {
        this.x+=this.dx
        this.y+=this.dy
    }

    checkBounce() {

        if (this.x>460 || this.x<40) {
            this.dx=-this.dx
            sound.play()
        }
    
        if (this.y>460 || this.y<40) {
            this.dy=-this.dy
            sound.play()
        }
    }
    draw () {

        
        //draw the ball
        ctx.beginPath();
        ctx.arc(this.x, this.y, 40, 0, 2 * Math.PI);
        ctx.fillStyle= "#333637"
        ctx.fill()
        ctx.stroke();

    }
}

const balls:Ball[]=[]
let numBalls=200
for (let i=0;i<numBalls;i++) {
    balls.push(new Ball("red",30,100,150,10+i,8+i))
}

requestAnimationFrame(cycle)


function cycle(){

    ctx.clearRect(0,0,500,500) //Clears the canvas
    for (let i=0;i<numBalls;i++) {
        balls[i].draw()
        //move the ball
        balls[i].move()
        
        balls[i].checkBounce()
    }


    requestAnimationFrame(cycle) // calls the next frame (1/60th of a second later)

}
