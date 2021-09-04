video = "";
object = [];

function preload() {}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
}

function draw() {
    image(video, 0, 0, 480, 380);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status:Detecting Objects";
    object_name = document.getElementById("object_name").value;
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    }