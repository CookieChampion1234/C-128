song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song = loadSound("music.mp3");
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.posenet(video, modelLoaded);
    posenet.on('posenet', gotPoses);
}

function modelLoaded(){
    console.log("Posenet is initialized!");
}

function gotPoses(results){
    if(results > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X is - " + leftWristX + "Left Wrist Y is - " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X is - " + rightWristX + "Right Wrist Y is - " + rightWristY);
    }
}

function draw(){
    image(video, 0, 0, 600, 500);
}
