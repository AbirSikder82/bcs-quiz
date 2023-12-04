// script.js

let userScore = 0;
let currentQuestionIndex = 0;
let currentCategory;
let allCorrectAnswer = "";

// Define your questions for each category
const categories = {
    general: [
        {
            text: 'অস্ত্র রপ্তানিতে শীর্ষ দেশ কোনটি?',
            options: ['চীন', 'পাকিস্তান', 'রাশিয়া', 'যুক্তরাষ্ট্র'],
            correctAnswer: 'যুক্তরাষ্ট্র'
        },
        {
            text: 'পিৎজা খাবারটির উৎপত্তিস্থল কোথায়?',
            options: ['জাপান', 'ইতালি', 'ইংল্যান্ড', 'কোরিয়া'],
            correctAnswer: 'ইতালি'
        },
        {
            text: 'মিশরের গোয়েন্দা সংস্থার নাম কি?',
            options: ['মোসাদ', 'সি আই এ', 'মুখবরাত', 'আইএসআই'],
            correctAnswer: 'মুখবরাত'
        },
        {
            text: 'বাংলাদেশ স্কয়ার কোন দেশে অবস্থিত?',
            options: ['সাইবেরিয়া', 'বাংলাদেশ', 'কুয়েত', 'লাইবেরিয়া'],
            correctAnswer: 'লাইবেরিয়া'
        },
        {
            text: 'তেল রিজার্ভে শীর্ষ দেশ কোনটি? ',
            options: ['কুয়েত', 'ভেনিজুয়েলা', 'সৌদি আরব', 'যুক্তরাষ্ট্র'],
            correctAnswer: 'ভেনিজুয়েলা'
        },
        {
            text: 'সুইডেনের মুদ্রার নাম কি?',
            options: ['পেসো', 'ডলার', 'রিয়াল', 'ক্রোনা'],
            correctAnswer: 'ক্রোনা'
        },
        {
            text: 'এডেন সমুদ্রবন্দর কোন দেশে অবস্থিত?',
            options: ['ইসরায়েল', 'ইয়েমেন', 'সাইবেরিয়া', 'মালেশিয়া'],
            correctAnswer: 'ইয়েমেন'
        },
        {
            text: 'চিকনগুনিয়া কোন মশার কামড়ে ছড়ায়?',
            options: ['অ্যানোফিলিস', 'কিউলেক্স', 'এডিস', 'হেমাগোগাস'],
            correctAnswer: 'এডিস'
        },
        {
            text: 'ইবোলা ভাইরাস সর্বপ্রথম শনাক্ত হয় কোন দেশে?',
            options: ['রাশিয়া', 'জাপান', 'ইরাক', 'কঙ্গো'],
            correctAnswer: 'কঙ্গো'
        },
        {
            text: 'রেইনবো নেশন বলা হয় কোন দেশকে?',
            options: ['মালেশিয়া', 'দক্ষিণ আফ্রিকা', 'সৌদি আরব', 'দক্ষিণ কোরিয়া'],
            correctAnswer: 'দক্ষিণ আফ্রিকা'
        },
        // Add more questions for the "general" category as needed
    ],
    science: [
        {
            text: 'মানুষের দাঁতের কঠিন অংশের নাম কি?',
            options: ['ডেন্টিন', 'এনামেল', 'ক্যমেন্টাম', 'ডেন্টাল পাল্প'],
            correctAnswer: 'এনামেল'
        },
        {
            text: 'কোন স্তন্যপায়ী প্রাণীর দেহে লোম থাকে না?',
            options: ['বিড়াল', 'ইদুর', 'তিমি', 'কুকুর'],
            correctAnswer: 'তিমি'
        },
        {
            text: 'কোন ভিটামিন যকৃতে সঞ্চিত হয়?',
            options: ['ভিটামিন-বি৩', 'ভিটামিন-এ', 'ভিটামিন-বি৪', 'ভিটামিন-সি'],
            correctAnswer: 'ভিটামিন-এ'
        },
        {
            text: 'সবুজ উদ্ভিদ ও প্রাণীর সুষম অনুপাত কত?',
            options: ['৯৯ঃ১', '১০০ঃ০', '৯৮ঃ৬', '৮০ঃ৩'],
            correctAnswer: '৯৯ঃ১'
        },
        {
            text: 'বায়ুর চেয়ে কার্বন ডাই অক্সাইড কত গুণ ভারী?',
            options: ['দুই গুণ', 'চার গুণ', 'দেড় গুণ', 'তিন গুণ'],
            correctAnswer: 'দেড় গুণ'
        },
        {
            text: 'তেজস্ক্রিয়তা মাপার একক কি?',
            options: ['ক্যান্ডেলা', 'বেকরেল', 'কুলম্ব', 'কেলভিন'],
            correctAnswer: 'বেকরেল'
        },
        {
            text: 'মানবদেহের ক্ষুদ্রতম গ্রন্থির ওজন কত?',
            options: [' ১ গ্রাম', '০.৮ গ্রাম', '০.৪ গ্রাম', '০.৫ গ্রাম'],
            correctAnswer: '০.৫ গ্রাম'
        },
        {
            text: 'মানুষের প্রতিটি হাতে কতগুলি হাড় থাকে?',
            options: ['২৩ টি', '২৭ টি', '৩২ টি', '৬০ টি'],
            correctAnswer: '২৭ টি'
        },
        {
            text: 'মানুষের সবচেয়ে মজবুত হাড় কোনটি?',
            options: ['ফিমার', 'ইনকাস', 'হিউমেরাস', 'স্টেপিস'],
            correctAnswer: 'ফিমার'
        },
        {
            text: 'পতঙ্গের দেহে কোন প্রোটিন পাওয়া যায়?',
            options: ['গ্লুটোলিন', 'প্রোলামিন', 'কাইটিন', 'নিউক্লিয়প্রোটিন'],
            correctAnswer: 'কাইটিন'
        },
        // Add more questions for the "science" category as needed
    ],
    sports: [
        {
            text: 'টেস্ট ক্রিকেটের যাত্রা শুরু হয় কত সালে?',
            options: ['১৮৪৪ সালে', '১৮৫৫ সালে', '১৮৭৭ সালে', '১৮৯৯ সালে'],
            correctAnswer: '১৮৭৭ সালে'
        },
        {
            text: 'টেস্ট ক্রিকেটের প্রথম ম্যাচটি হয় কোন কোন দেশের?',
            options: ['ENG-IND', 'AUS-ENG', 'AUS-NED', 'IND-PAK'],
            correctAnswer: 'AUS-ENG'
        },
        {
            text: 'বাংলাদেশ কবে টেস্ট স্ট্যাটাস লাভ করে?',
            options: ['১৯৯৮ সালে', '১৯৯৯ সালে', '২০০১ সালে', '২০০০ সালে'],
            correctAnswer: '২০০০ সালে'
        },
        {
            text: 'ওয়ানডে ক্রিকেট শুরু হয় কত সালে?',
            options: ['১৯৭১ সালে', '১৯৭৫ সালে', '১৯৯৯ সালে', '১৯৮৮ সালে'],
            correctAnswer: '১৯৭১ সালে'
        },
        {
            text: 'বিশ্বকাপ ক্রিকেট শুরু হয় কত সালে?',
            options: ['১৯৭১ সালে', '১৯৭৫ সালে', '১৯৯৮ সালে', '২০০০ সালে'],
            correctAnswer: '১৯৭৫ সালে'
        },
        {
            text: 'ফুটবল খেলার জন্ম হয় কোন দেশে?',
            options: ['ইংল্যান্ড', 'ইতালি', 'চীন', 'রাশিয়া'],
            correctAnswer: 'চীন'
        },
        {
            text: 'ফুটবল খেলা অলিম্পিকে অন্তর্ভুক্ত হয় কত সালে?',
            options: ['১৯০০ সালে', '১৯১০ সালে', '১৯৯৯ সালে', '১৯৮৮ সালে'],
            correctAnswer: '১৯০০ সালে'
        },
        {
            text: 'ফিফা বিশ্বকাপ শুরু হয় কত সালে?',
            options: ['১৯২০ সালে', '১৯৩০ সালে', '১৯৮০ সালে', '১৯৯৯ সালে'],
            correctAnswer: '১৯৩০ সালে'
        },
        {
            text: 'প্রথম ফুটবল বিশ্বকাপ চ্যাম্পিয়ন দেশ কোনটি?',
            options: ['ব্রাজিল', 'আর্জেন্টিনা', 'উরুগুয়ে', 'ইতালি'],
            correctAnswer: 'উরুগুয়ে'
        },
        {
            text: 'টেনিস খেলার জন্ম হয় কোন দেশে?',
            options: ['ইংল্যান্ড', 'চীন', 'ভারত', 'জাপান'],
            correctAnswer: 'ইংল্যান্ড'
        },
        // Add more questions for the "sports" category as needed
    ],
    bangladesh: [
        {
            text: 'সুলতানি আমলে বাংলার রাজধানীর নাম কি ছিল?',
            options: ['ঢাকা', 'গৌড়', 'জাহাঙ্গীরনগর', 'কলকাতা'],
            correctAnswer: 'গৌড়'
        },
        {
            text: 'বাংলাদেশের সবচেয়ে বড় মধ্যযুগীয় মসজিদ কোনটি?',
            options: ['বড় সোনা', 'সাত গম্বুজ', 'ষাট গম্বুজ', 'কুসুম্বা'],
            correctAnswer: 'ষাট গম্বুজ'
        },
        {
            text: 'গৌড়ের সোনা মসজিদ কার আমলে নির্মিত হয়?',
            options: ['হুসেন শাহ', 'শায়েস্তা খাঁ', 'ঈসা খাঁ', 'ফখরুদ্দিন মোবারক শাহ'],
            correctAnswer: 'হুসেন শাহ'
        },
        {
            text: 'কোন মুঘল সম্রাট বাংলার নাম দেন জান্নাতবাদ?',
            options: ['আকবর', 'বাবর', 'হুমায়ূন', 'জাহাঙ্গীর'],
            correctAnswer: 'হুমায়ূন'
        },
        {
            text: 'কে বাংলা সন গননা শুরু করেন? ',
            options: ['লক্ষ্মণ সেন', 'আকবর', 'ইলিয়াস শাহ', 'হুমায়ুন'],
            correctAnswer: 'আকবর'
        },
        {
            text: 'কোন নগরী মুঘল আমলে সুবা নামে পরিচিত ছিল?',
            options: ['গৌড়', 'সোনারগাঁও', 'ঢাকা', 'কলকাতা'],
            correctAnswer: 'ঢাকা'
        },
        {
            text: 'ঢাকা সর্বপ্রথম বাংলার রাজধানী হয়েছিল কত সালে?',
            options: ['১৬১০', '১৬১৬', '১৫১০', '১৬৫২'],
            correctAnswer: '১৬১০'
        },
        {
            text: 'ঢাকার ধোলাইখাল কে খনন করেন?',
            options: ['শায়েস্তা খান', 'পরীবিবি', 'ঈসা খান', 'ইসলাম খান'],
            correctAnswer: 'ইসলাম খান'
        },
        {
            text: 'বাংলার প্রথম স্বাধীন নবাব কে?',
            options: ['আলিবর্দি খান', 'সিরাজ উদ দৌলা', 'মুর্শিদকুলি খাঁ', 'বাহাদুর শাহ'],
            correctAnswer: 'মুর্শিদকুলি খাঁ'
        },
        {
            text: 'প্রাচীন বাংলা মৌর্য শাসনের প্রতিষ্ঠাতা কে?',
            options: ['সমুদ্র গুপ্ত', 'চন্দ্রগুপ্ত মৌর্য', 'অশোক মৌর্য', 'রামপাল'],
            correctAnswer: 'চন্দ্রগুপ্ত মৌর্য'
        },
        // Add more questions for the "general" category as needed
    ],
    // Add more categories and questions as needed
};

function nextQuestion() {
    const selectedAnswer = document.querySelector(`input[name="q${currentQuestionIndex + 1}"]:checked`);
    const correctAnswerText = document.querySelector(`#question${currentQuestionIndex + 1} .correct-answer`);

    if (selectedAnswer) {
        const userAnswer = selectedAnswer.value;
        if (userAnswer === categories[currentCategory][currentQuestionIndex].correctAnswer) {
            userScore++;
        }
        //correctAnswerText.textContent = `Correct Answer: ${categories[currentCategory][currentQuestionIndex].correctAnswer}`;
        allCorrectAnswer += `Question ${currentQuestionIndex + 1}: ${categories[currentCategory][currentQuestionIndex].correctAnswer}`;
        //correctAnswerText.style.display = 'block';
    } else {
        correctAnswerText.textContent = 'You did not answer this question.';
        correctAnswerText.style.display = 'block';
    }

    currentQuestionIndex++;

    // If there are more questions, load the next question
    if (currentQuestionIndex < categories[currentCategory].length) {
       loadQuestion();
    } else {
        // All questions answered, display score
        document.getElementById('scoreText').textContent = `Your Score: ${userScore}`;
        document.getElementById('scoreSection').style.display = 'block';
        document.getElementById('finish-button').style.display = 'block';
        
        document.getElementById('next-button').style.display = 'none';
    }
}

function loadQuestion() {
    const questionSection = document.getElementById('questionSection');
    questionSection.innerHTML = ' ';

    // Load the current question dynamically
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');
    questionContainer.id = `question${currentQuestionIndex + 1}`;

    // Add question text
    const questionText = document.createElement('p');
    questionText.classList.add('question');
    questionText.textContent = `${currentQuestionIndex + 1}. ${categories[currentCategory][currentQuestionIndex].text}`;
    
    console.log(categories[currentCategory][currentQuestionIndex].text);
    questionContainer.appendChild(questionText);

    // Add options
    const optionsList = document.createElement('ul');
    optionsList.classList.add('options');

    categories[currentCategory][currentQuestionIndex].options.forEach((option, optionIndex) => {
        const optionItem = document.createElement('li');
        optionItem.innerHTML = `<label><input type="radio" name="q${currentQuestionIndex + 1}" value="${option}"> ${option}</label>`;
        optionsList.appendChild(optionItem);
    });

    questionContainer.appendChild(optionsList);

    // Add correct answer (for review purposes)
    const correctAnswerText = document.createElement('p');
    correctAnswerText.classList.add('correct-answer');
    correctAnswerText.style.display = 'none';
    questionContainer.appendChild(correctAnswerText);

    // Append the question container to the question section
    questionSection.appendChild(questionContainer);
}

function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    userScore = 0;

    // Load the first question
    
    loadQuestion();

    // Hide score section
    document.getElementById('scoreSection').style.display = 'none';
}

// Load questions when the page loads
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');

    if (categoryParam && categories.hasOwnProperty(categoryParam)) {
        
        startQuiz(categoryParam);
    }
});