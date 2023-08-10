import mainmenu from "./components/MainMenu"
import Question from "./components/Question";
import {useEffect, useState} from "react";
// main view template

async function loadQuestionsJSON() {
    const response = await fetch('Questions.json');
    await response.json();
    return  await response.json();
}

loadQuestionsJSON();

export default function Quiz() {
    return <div>
        <Question questions = {loadQuestionsJSON()}  />
    </div>
  }