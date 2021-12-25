

scorerightwrist=0;
scoreleftwrist=0;
rightwristx=0;
rightwristy=0;
leftwristx=0;
leftwristy=0;
function setup()
{
    canvas=createCanvas(500,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);  
}
function modelloaded()
{
    console.log("posenet is started");
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        scoreleftwrist=results[0].pose.keypoints[9].score;
        scorerightwrist=results[0].pose.keypoints[10].score;
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        console.log("rightx= "+rightwristx+ "righty= "+rightwristy);
        console.log("leftx= "+leftwristx+ "lefty= "+leftwristy);
    }
}

function draw()
{
    image(video,0,0,500,400);
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
