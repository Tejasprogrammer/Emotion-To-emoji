Webcam.set
({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90,
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 Version', ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3t7Er-7O-/model.json", modelLoaded);

function modelLoaded()
{
  console.log("Model Loaded");
}

function speak()
{
    var synth=window.speechSynthesis
    speak_data_1="The first Predictation"+predication_1;
    speak_data_2="The second Predictation"+predication_2;

    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);

synth.speak(utterThis);

}

function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}

function gotResult(error,results)
{
    if(error)
    {
        console.error(error);
    }


    else
{
console.log(results);
document.getElementById("result_emotion_name").innerHTML=results[0].label;
document.getElementById("result_emotion_name2").innerHTML=results[1].label;
predication_1=results[0].label;
predication_2=results[1].label;

speak()
if (results[1].label=="Happy")
{
    document.getElementById("update_emoji").innerHTML="&#128522;";
}
if(results[1].label=="Sad")
{
    document.getElementById("update_emoji").innerHTML="&#128546;";
}
if(results[1].label=="Angry")
{
    document.getElementById("update_emoji").innerHTML="&#128548;";
}

if (results[0].label=="Happy")
{
    document.getElementById("update_emoji").innerHTML="&#128522;";
}
if(results[0].label=="Sad")
{
    document.getElementById("update_emoji").innerHTML="&#128546;";
}
if(results[0].label=="Angry")
{
    document.getElementById("update_emoji").innerHTML="&#128548;";
}
}
}




