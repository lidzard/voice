var SpeechRecognition = window.webkitSpeechRecognition;//API for converting speech text

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;

    if (Content == "take my selfie") {//compares if content is eqaul take my selfie 
        console.log("taking selfie...");
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;//API that converts text to speech
    speak_data = "taking selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);//converts the speak_data variable into speech 

    synth.speak(utterThis);//speak what is stored in the utterthis variable
    Webcam.attach(camera);

    save();
}
Webcam.set({
    width:360,
    height:250,
    image_formate : "png",
    png_quality:90
});
var camera = document.getElementById("camera");
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    })
}
function save()
{
    var link = document.getElementById("link");
    var image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}