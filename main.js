camera=document.getElementById("camera");
Webcam.attach('#camera')
Webcam.set({
width : 350,
height : 300,
image_format : 'png',
png_quality : 90
})
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="CapturedImage" src="'+data_uri+'">'
    })
    
}
console.log("ml5.version:",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zEhQnGPLt/",modelLoaded)
function modelLoaded(){
    console.log("modelLoaded");
}
function check(){
    img= document.getElementById("CapturedImage");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    document.getElementById("findingImage").innerHTML=results[0].label;
    document.getElementById("percentImage").innerHTML=results[0].confidence.toFixed(3);
}
}