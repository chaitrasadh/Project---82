var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var color = "red"
var radius = 1
var width= 25
var mouseevent = "empty"

canvas.addEventListener("mousedown", md)

function md(e) {
  color = document.getElementById("color").value
  width = document.getElementById("width").value
   radius = document.getElementById("radius").value
    mouseevent = "mousedown"
}

canvas.addEventListener("mouseup", mu)

function mu(e) {
    mouseevent = "mouseup"
}

canvas.addEventListener("mouseleave", ml)

function ml(e) {
    mouseevent = "mouseleave"
}


canvas.addEventListener("mousemove", mm)

function mm(e) {
   
    cx = e.clientX - canvas.offsetLeft
    cy = e.clientY - canvas.offsetTop
    if (mouseevent == "mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width
        ctx.arc(cx, cy, radius, 0, 2 * Math.PI)
        ctx.stroke()

    }
}