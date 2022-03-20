Webcam.set({
    width: 310,
    height: 300,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("Camera"); Webcam.attach("#Camera");
function clicpic() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + ' "/>';
    });
} console.log("ml5_version", ml5.version); classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fdLWBYX9o/model.json", modelLoaded)
function modelLoaded() {
    console.log("modelLoaded");
} function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "SEE FIRST PREDICTION IS " + prediction_1;
     speak_data_2 = "AND SEE SECOND PREDICTION IS " + prediction_2;
      var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
       synth.speak(utterThis);
}