import {ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode} from "react";
import {useState, useEffect} from 'react';
import Button from "./Button";
import styles from "../clock.module.css";
import Clock from "./Clock";

import QuestionsJSON from "./Questions.json"
//QUESTION


export default function Questions() {

    const questionsList = [
        { number: 1, question: "Who is the leader of the resistance against Skynet in the film Terminator 2", answers: [
                "John Connor",
                "Boss Hog",
                "Barry White",
                "Sarah Connor"],
            correctAnswer: "John Connor"},
        { number: 2, question: "Blablab", answers: [
                "John Connor",
                "Boss Hog",
                "Barry White",
                "Sarah Connor"],
            correctAnswer: "John Connor"},
        { number: 3, question: "Blablab", answers: [
                "John Connor",
                "Boss Hog",
                "Barry White",
                "Sarah Connor"],
            correctAnswer: "John Connor"},
    ];
    // timer and reset state
    const [count, setCount] = useState(30);

    // questions content state for displaying questions and answers
    const [questions, setQuestions] = useState( questionsList );
    const [questionNum, setQuestionNum] = useState(1);
    const [questionAmount, setQuestionAmount] = useState(0);
    const [questionText, setQuestionText] = useState('');
    let questionID = 0;
    // use effect hook for timer and setup of question
    useEffect(() => {
        setQuestionAmount(questions.length);
        // init timer
        if (count > 0) {
            setTimeout(() => {
                setCount((count) => count - 1);
            }, 1000);
        }
        if (count === 0) {
            setCount(30);
            setQuestionNum(questionNum+1);
        }
    });

    const renderListOfAnswers = (questions) => {
        return questions.map(answer => <Button Title ={answer}></Button>)
    }

    console.log(questions);
    console.log(questionAmount);
    return <div className="container p-2 lex flex-1 items-center justify-center sm:items-stretch sm:justify-start mt-2">
        <div className="sm:block">
            <h2 className="text-2xl font-bold tracking-tight text-black sm:text-4xl">Question {questionNum}</h2>
            <div className="flex flex-row">
                <p className='basis-3/4 text-lg font-sans'>{questions[questionNum-1].question}</p>
                {/*animated clock timer - clock.module.css*/}
                <Clock/>
            </div>
        </div>
        <div className="flex flex-row">
            {renderListOfAnswers}
            <Button Title = 'SKIP QUESTION'>SKIP QUESTION</Button>
        </div>
        <p className='basis-3/4 text-lg font-sans'>Time Left: {count}</p>
    </div>
}
