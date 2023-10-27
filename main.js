 noseX = 0
 noseY = 0

 function preload() {
     laco1 = loadImage("9.png")
     laco2 = loadImage("77.png")
 }

 function setup() {
     canvas = createCanvas(300, 300);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(300, 300);
     video.hide();
     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
 }

 function modelLoaded() {
     console.log('PoseNet foi inicializado');
 }

 function gotPoses(results) {}

 function draw() {
     image(video, 0, 0, 300, 300);
     image(laco2, noseX + 20, noseY - 120, 30, 30)
 }

 function takeSnapshot() {
     save('myFilterImage.png');
 }

 function gotPoses(results) {
     if (results.length > 0) {
         console.log(results);
         noseX = results[0].pose.nose.x;
         noseY = results[0].pose.nose.y;
     }
 }