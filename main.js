noseX=0;
noseY=0;

function preload(){
clown_nose = loadImage('https://i.postimg.cc/CxxXrpD8/clown-Nose-removebg-preview.png');
glasses_png = loadImage('https://i.postimg.cc/gkCLNm1S/Glasses-removebg-preview.png');
top_hat = loadImage('https://i.postimg.cc/9Fhr7J9K/Tophat-removebg-preview.png')
}

function setup(){
    canvas = createCanvas(600,600);
    canvas.position(950,300);
    video = createCapture(VIDEO);
    video.size(600,600);
    video.hide();

    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("nose x =" +noseX);
        console.log("nose y ="+ noseY);
    }
}


function draw(){
image(video, 0, 0, 600, 600);
image(clown_nose, noseX-45, noseY-35, 85, 85);
image(glasses_png, noseX-80, noseY-110, 160, 160);
image(top_hat, noseX-100, noseY-380, 220, 250 )
}

function take_snapshot(){
    save('Vyom.png')
}