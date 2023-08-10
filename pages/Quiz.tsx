import Question from "./components/Question";
import Questions from "./Questions.json"
// main view template
console.log(Questions);
export default function Quiz() {
    return <div>
        <Question questionsProps = {Questions}></Question>
    </div>
  }