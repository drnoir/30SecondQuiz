import {ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode} from "react";
import {useState, useEffect} from 'react';
import Button from "./Button";
import styles from "../clock.module.css";
import Clock from "./Clock";
//QUESTION

export default function Questions() {
    // timer and reset
    const [count, setCount] = useState(30);
    useEffect(() => {
        if (count > 0) {
            setTimeout(() => {
                setCount((count) => count - 1);
            }, 1000);
        }
        if (count === 0) {
            setCount(30)
        }
    });

    const [question, setQuestion] = useState(1);

    return <div className="container p-2 lex flex-1 items-center justify-center sm:items-stretch sm:justify-start mt-2">
        <div className="sm:block">
            <h2 className="text-2xl font-bold tracking-tight text-black sm:text-4xl">Question 1</h2>
            <div className="flex flex-row">
                <p className='basis-3/4 text-lg font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras ullamcorper leo a est lacinia, sed scelerisque eros rutrum.
                    Proin vitae massa pretium, pellentesque sapien at, semper lacus.
                    Donec blandit neque sapien, ac lacinia erat efficitur non.
                    os id aliquet. Nunc pulvinar eros nulla, nec faucibus tellus
                    aliquam ut. Donec mauris diam, porta tincidunt blandit nec,
                    vulputate et est.
                    Cras ullamcorper leo a est lacinia, sed scelerisque eros rutrum.
                    Proin vitae massa pretium, pellentesque sapien at, semper lacus.
                    Donec blandit neque sapien, ac lacinia erat efficitur non.
                    os id aliquet. Nunc pulvinar eros nulla, nec faucibus tellus
                    aliquam ut. Donec mauris diam, porta tincidunt blandit nec,
                    vulputate et est</p>
                {/*animated clock timer*/}
                <Clock/>
            </div>
        </div>
        <div className="flex flex-row">
            <Button/><Button/><Button/><Button/>
        </div>
        <p className='basis-3/4 text-lg font-sans'>Time Left: {count}</p>
    </div>
}
