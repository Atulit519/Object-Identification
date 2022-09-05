//https://teachablemachine.withgoogle.com/models/upw-JLK49/
Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 90 
})

Webcam.attach("camera");

function take_photo(){
    Webcam.snap(function(photo){
        document.getElementById("result").innerHTML = "<img id='snap' src='"+photo+"'>"
    })
}

console.log("ml5 version: ", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FhFfx3q4T/model.json", model_loaded)

function model_loaded(){
    console.log("model_loaded")
}

function check(){
    photo = document.getElementById("snap")
    classifier.classify(photo, got_results)
}
    
function got_results(error, result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result)
        document.getElementById("object").innerHTML = result[0].label
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(2)
    }
}