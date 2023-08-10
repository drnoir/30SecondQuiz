import Link from 'next/link'
// tailwind (Core styling)
import 'tailwindcss/tailwind.css'
// components
import MainMenu from './components/MainMenu'
import Header from "./components/Header";
import Quiz from "./Quiz";
import {useEffect, useState} from "react";

export default function Home() {
  return (
  <div className ='container mx-auto bg-amber-300 shadow-xl '>
       <Header/>
       <MainMenu />
       <Quiz  />
  </div>
  )
}
