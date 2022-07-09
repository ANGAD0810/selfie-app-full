var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = " ";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if (Content == "take my selfie") {
        console.log("taking your selfie ...")
        speak();

    }
}

function speak() {
    var sy = window.speechSynthesis;
    var s_d = "Taking your selfie in 5 seconds  Naruto ";
    var speakThis = new SpeechSynthesisUtterance(s_d);
    sy.speak(speakThis);
    Webcam.attach(camera);
    setTimeout(function () {
        take_snapshot();
            save();
    }, 5000);


}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 100
});
camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src ="' + data_uri + '">';

    });
}
function save(){
    link=document.getElementById("link");
    Photo = document.getElementById("selfie_image").src; 
    link.href = Photo;
    link.click();
}