import Link from 'next/link'
import 'tailwindcss/tailwind.css'
import MainMenu from './components/MainMenu'
import Logo from './components/Logo'

export default function Home() {
  return (
  <div className ='container mx-auto'>
    <h1>30 Second Quizzer</h1>
        <Logo/>
       <Link href="/quiz" as="/quiz"></Link>
       <MainMenu />
  </div>
  )
}
