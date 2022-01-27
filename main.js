
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img src="' + data_uri + '" id="mm"></img>';
    });
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lnVxnmD-M/model.json",modelLoaded);
console.log("ml5version"+ml5.version)
function modelLoaded(){
    console.log("model loaded");
}

function check(){
    img=document.getElementById("mm");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    

    }
}