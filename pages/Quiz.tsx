import mainmenu from "./components/MainMenu"
import Question from "./components/Question";
// main view template

async function loadQuestionsJSON() {
    const response = await fetch('./Quizzes/Questions.json');
    const questions = await response.json();
    console.log(questions);
}

let questionArr = [];
loadQuestionsJSON().then(questionArr =>questionArr );


export default function Quiz() {
    return <div>
        <Question questions = {questionArr}  />
    </div>
  }