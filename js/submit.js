
var config = {
    apiKey: "AIzaSyCicfS1soup7DpkyEOlPSbrcOC7CXw-N5I",
    authDomain: "quizapp-4f0f2.firebaseapp.com",
    projectId: "quizapp-4f0f2",
    storageBucket: "quizapp-4f0f2.appspot.com",
    // databaseURL: "https://quizapp-4f0f2.firebaseio.com",
    messagingSenderId: "411578106482",
    appId: "1:411578106482:web:e46b2de7cd8d48744e78eb",
    measurementId: "G-S9EDS4V0F6"
};
firebase.initializeApp(config);
const db = firebase.firestore();
window.onload = function () {
    document.getElementById('myform').addEventListener("submit", submitForm);
}



function getInput(id) {
    return document.getElementById(id).value;
}

function submitForm(e) {
    e.preventDefault();
    saveRec(getInput('question_field'),getInput('option1_field'), getInput('option2_field'), getInput('option3_field'), getInput('option4_field'),getInput('topics'));
    document.getElementById("myform").reset();
}
function saveRec(question,option1, option2, option3, option4,topics) {
    var lvl;
    var correctOpt;
    var difficulty;
    var iseasy=document.getElementById('Easy').checked;
    var ismed=document.getElementById('Medium').checked;
    var isdif=document.getElementById('Difficult').checked;
    if(iseasy){
        lvl=document.getElementById('Easy').value;
    }
    else if(ismed){
        lvl=document.getElementById('Medium').value;
    }
    else if(isdif){
        lvl=document.getElementById('Hard').value;
    }

    if (iseasy){
        difficulty = "0"
    }else if(ismed){
        difficulty = "1"
    }else if(isdif){
        difficulty = "2"
    }


    if(document.getElementById('option1').checked){
        correctOpt = document.getElementById('option1').value;
    }else if(document.getElementById('option2').checked){
        correctOpt = document.getElementById('option2').value;
    }else if(document.getElementById('option3').checked){
        correctOpt = document.getElementById('option3').value;
    }else if(document.getElementById('option4').checked){
        correctOpt = document.getElementById('option4').value;
    }

    
    var db_ref = db.collection(lvl)
    var data = {
        "question": question,
        "option1": option1,
        "option2": option2,
        "option3": option3,
        "option4":option4,
        "isQuestionImage":false,
        "isOption1Image":false,
        "isOption2Image":false,
        "isOption3Image":false,
        "isOption4Image":false,
        "difficulty":difficulty,
        "answer":correctOpt,
        "topics":topics
    };
    console.log(data)
    db_ref.add(data).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        alert("Question added to Database");
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    
}