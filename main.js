

function setup()
{
    canvas=createCanvas(500,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);  
}
function gotposes(results)
{
    console.log(results);
}
function modelloaded()
{
    console.log("posenet is started");
}
function draw()
{
    image(video,0,0,500,400);
}
