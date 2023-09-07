const questions = [
    {
        'que' : 'Whats your name?',
        'a':'sadia',
        'b':'asad',
        'c':'minahil',
        'd':'saad',
        'correct' : 'a'
    },
    {
        'que' : 'Whats your age?',
        'a' : '25',
        'b' : '17',
        'c' : '18',
        'd' : '15',
        'correct' : 'c'
    },
    {
        'que' : 'Whats your dream?',
        'a' : 'Enterpreneur',
        'b' : 'Business Girl',
        'c' : 'Doctor',
        'd' : 'Army Officer',
        'correct' : 'b'
    }
]

let index = 0;
let total=questions.length;
let right = 0, wrong = 0;
const quesbox = document.getElementById('quesbox');
const inputoption = document.querySelectorAll('.inputoption');
const loadquestions = () =>{
    if (index===total) {
        return endQuiz();
    }
    reset();
    const data = questions[index]
    quesbox.innerText = `(${index+1}) ${data.que}`;
    inputoption[0].nextElementSibling.innerText = data.a;
    inputoption[1].nextElementSibling.innerText = data.b;
    inputoption[2].nextElementSibling.innerText = data.c;
    inputoption[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () =>{
    const data = questions[index];
    const ans = getAnswer()
    if (ans== data.correct) {
        right++;
    }else{
        wrong++;
    }
    index++;
    loadquestions();
    return;
}

const getAnswer = () =>{
    let answer;
    inputoption.forEach(
        (input) =>{
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () =>{
    inputoption.forEach(
        (input) =>{
            input.checked = false;
        }
    )
} 

const endQuiz = () =>{
    document.querySelector(".box").innerHTML = `<h3 class = "h3"> Thank You For Solving The Questions </h3> 
    <h2 class = "h2"> ${right} / ${total} <span>are correct </span> </h2>
    `
}
loadquestions();