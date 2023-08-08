import Link from 'next/link'
import 'tailwindcss/tailwind.css'
import MainMenu from './components/MainMenu'
import Header from "./components/Header";
import Quiz from "./Quiz";
export default function Home() {
  return (
  <div className ='container mx-auto'>
       <Header/>
       <MainMenu />
       <Quiz />
  </div>
  )
}
