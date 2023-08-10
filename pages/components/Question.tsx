import {ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode} from "react";
import {useState, useEffect} from 'react';
import Button from "./Button";
import styles from "../clock.module.css";
import Clock from "./Clock";
//QUESTION

export default function Questions(questionsProps : Array<any>) {
    // timer and reset
    const [count, setCount] = useState(30);
    // questions content
    const [questions, setQuestions] = useState([]);
    const [questionNum, setQuestionNum] = useState(1);
    const [questionAmount, setQuestionAmount] = useState(0);
    const [questionTitle, setQuestionTitle] = useState('');
    const [questionText, setQuestionText] = useState('');

    // use effect hook for timer
    useEffect(() => {
        setQuestions(questionsProps);
        setQuestionText(questions[0].question);
        setQuestionAmount(questions.length);
        if (count > 0) {
            setTimeout(() => {
                setCount((count) => count - 1);
            }, 1000);
        }
        if (count === 0) {
            setCount(30);
            setQuestionNum(questionNum+1)
        }
    });

    // function SetQuestions() {
    //     setQuestionText(count + 1);
    // }

    return <div className="container p-2 lex flex-1 items-center justify-center sm:items-stretch sm:justify-start mt-2">
        <div className="sm:block">
            <h2 className="text-2xl font-bold tracking-tight text-black sm:text-4xl">Question {questionNum}</h2>
            <div className="flex flex-row">
                <p className='basis-3/4 text-lg font-sans'>{questionText}</p>
                {/*animated clock timer*/}
                <Clock/>
            </div>
        </div>
        <div className="flex flex-row">
            <Button Title = '1: Albos'/><Button/><Button/><Button/>
        </div>
        <p className='basis-3/4 text-lg font-sans'>Time Left: {count}</p>
    </div>
}
