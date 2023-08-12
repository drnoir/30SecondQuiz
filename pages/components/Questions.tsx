import {ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode} from "react";
import {useState, useEffect} from 'react';
import Button from "./Button";
import styles from "../clock.module.css";
import Clock from "./Clock";

export default function Questions() {

    // translation prototype func COMMENTED OUT FOR LATER
    // async function translateText(text){
    //    return await translate(text, "ru");
    // }

    const questionsList = [
        { number: 1, question: "Who is the leader of the resistance against Skynet in the film Terminator 2?", answers: [
                "John Connor",
                "Boss Hog",
                "Barry White",
                "Sarah Connor"],
            correctAnswer: "John Connor"},
        { number: 2, question: "question2", answers: [
                "John Connor",
                "Boss Hog",
                "Barry White",
                "Sarah Connor"],
            correctAnswer: "John Connor"},
        { number: 3, question: "question3", answers: [
                "John Connor",
                "Boss Hog",
                "Barry White",
                "Sarah Connor"],
            correctAnswer: "John Connor"},
    ];
    // timer and reset state
    const [count, setCount] = useState(30);
    const [endOfQuiz, setEndOfQuiz] = useState(false);
    // questions content state for displaying questions and answers
    const [questions, setQuestions] = useState( questionsList );
    const [questionNum, setQuestionNum] = useState(1);
    const [questionAmount, setQuestionAmount] = useState(0);
    const [questionText, setQuestionText] = useState('');
    // use effect hook for timer and setup of question
    useEffect(() => {
        setQuestionAmount(questions.length);
        setQuestionText(questions[0].question)
        // init timer
        if (count > 0) {
            setTimeout(() => {
                setCount((count) => count - 1);
            }, 1000);
        }
        if (count === 0) {
            setCount(30);
            setQuestionNum(questionNum+1);
            if (questionNum === questions.length){
                setEndOfQuiz(true);
            }
        }
    });

    const renderListOfAnswers = (questions) => {
        return questions.map(answers => <Button Title ={answers}>{answers}</Button>)
    }

    const questionJSX = <div className="container p-2 lex flex-1 items-center justify-center sm:items-stretch sm:justify-start mt-2">
        <div className="sm:block">
            <h2 className="text-2xl font-bold tracking-tight text-black sm:text-4xl">Question {questionNum}</h2>
            <div className="flex flex-row">
                <p className='basis-3/4 text-lg font-sans'>{questionText}</p>
                {/*animated clock timer - clock.module.css*/}
                <Clock/>
            </div>
        </div>
        <div className="flex flex-row">
            {!endOfQuiz ? renderListOfAnswers : null};
            <Button Title = 'SKIP QUESTION'>SKIP QUESTION</Button>
        </div>
        <p className='basis-3/4 text-lg font-sans'>Time Left: {count}</p>
    </div>

    const endQuiz = <div className="container p-2 lex flex-1 items-center justify-center sm:items-stretch sm:justify-start mt-2">
        <div className="sm:block">
            <h2 className="text-2xl font-bold tracking-tight text-black sm:text-4xl">End of the quiz</h2>
            <div className="flex flex-row">
                <p className='basis-3/4 text-lg font-sans'>You got 0 questions correct out of {questions.length}  </p>
            </div>
        </div>
        <div className="flex flex-row">
            <Button Title = 'View Chart'>View Chart</Button>
        </div>
    </div>
    console.log(questions);
    console.log(questionAmount);
    return !endOfQuiz ?  questionJSX : endQuiz;
}
