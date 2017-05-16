$(document).ready(function() {
    $("#start").on("click", function() {
    	$("#start").remove();
    });

    var questions = [{
    	question: "Who is Boba Fett's Mother?",
    	answers: ["Elara Fett", "Kil-El Fett", "None, he is a clone", "Kara Fett"],
    	correctAnswer: "None, he is a clone",
    	image: "../images/Boba_Fett.jpg"
    }, {
    	question: "How old is Luke Skywalker in Episode IV?",
    	answers: ["19", "23", "18", "21"],
    	correctAnswer: "19",
    	image: "../images/Luke-Skywalker.jpg"
    }, {
    	question: "Which reference is continually used in the saga?",
    	answers: ["\"The old republic\"", "1138", "\"Greedo\"", "\"The Balmora Run\""],
    	correctAnswer: "1138",
    	image: "../images/Star_Wars_Logo.png"
    }, {
    	question: "What noise does Obi-Wan make to scare off the Tusken Raiders in Episode IV?",
    	answers: ["Womp rat", "Krayt Dragon", "Dying Tusken Raider", "Bantha"],
    	correctAnswer: "Krayt Dragon",
    	image: "../images/Krayt_Dragon.jpg"
    }, {
        question: "How many times is the word Ewok mentioned in Star Wars Episode VI?",
        answers: ["5", "2", "9", "0"],
        correctAnswer: "0",
        image: "../images/Ewok.jpg"
    }, {
        question: "Who teaches Yoda to return through the force?",
        answers: ["Qui-Gon Jinn", "Mace Windu", "Anakin Skywalker", "Obi-Wan Kenobi"],
        correctAnswer: "Qui-Gon Jinn",
        image: "../images/Qui-Gon_Jinn.jpg"
    }, {
        question: "What is the closest language to that of the Ewoks?",
        answers: ["French", "Tibetan", "Tagalog", "Taiwanese"],
        correctAnswer: "Tibetan",
        image: "../images/Ewok.jpg"
    }, {
        question: "What day is Star Wars day?",
        answers: ["September 15th", "May 30th", "December 10th", "May 4th"],
        correctAnswer: "May 4th",
        image: "../images/Star_Wars_Logo.png"
    }, {
        question: "What is Chewbacca's home planet?",
        answers: ["Kashyyyk", "Korriban", "Corellia", "Kamino"],
        correctAnswer: "Kashyyyk",
        image: "../images/chewbacca.jpg"
    }
    }];
});


















