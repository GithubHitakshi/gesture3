gesture_model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2oyLMap7Z/model.json",model_loaded);

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality:100
});

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(img){
        document.getElementById("result").innerHTML = '<img id="pic" src="'+img+'">;';
    });
}

function model_loaded(){}

prediction = "";

function speak(){
    speech = prediction;
    audio = new SpeechSynthesisUtterance(speech);
    audio.rate = 1.2;
    audio.speechSynthesis(audio);
}


function identify(){
    pic = document.getElementById("pic")
    gesture_model.classify(pic, get_results);
}


function get_results(e,r){
    if(e){
        console.error(e);
    }
    else{
        console.log(r);
        if(prediction=="Best"){
            document.getElementById("gesture1").innerHTML = "Ah Ah It's THE BEST";
            document.getElementById("gesture").innerHTML = "&#128077;";
        }
        if(prediction=="Victory"){
            document.getElementById("gesture1").innerHTML = "Hey! VICTORY is yours";
            document.getElementById("gesture").innerHTML = "&#9996;";
        }
        if(prediction=="Amazing"){
            document.getElementById("gesture1").innerHTML = "Hey! You are doing AMAZING today";
            document.getElementById("gesture").innerHTML = "&#128076;";
        }
        if(prediction=="Dislike"){
            document.getElementById("gesture1").innerHTML = "Nah.. Not my cup of Tea I DISLIKE";
            document.getElementById("gesture").innerHTML = "&#128078;";
        }
        if(prediction=="Good Luck"){
            document.getElementById("gesture1").innerHTML = "Fingers Crossed! GOOD LUCK";
            document.getElementById("gesture").innerHTML = "&#129310";
            }
            if(prediction=="Rock"){
                document.getElementById("gesture1").innerHTML = "you are gonna ROCK today";
                document.getElementById("gesture").innerHTML = "&#129304;";
                }

}
prediction = r[0].label;
}