function preload(){}

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(600, 500); 
    canvas.position(560,150);

  posenet = ml5.poseNet(video, modelReady);
  posenet.on('pose', gotPoses);
}
function modelReady(){
    console.log("model is ready");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
}
}