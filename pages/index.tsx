import Link from 'next/link'
import 'tailwindcss/tailwind.css'
import MainMenu from './components/MainMenu'
import Header from "./components/Header";
export default function Home() {
  return (
  <div className ='container mx-auto'>
       <Header/>
       <MainMenu />
      <Link href="/pages/Quiz" as="/quiz"></Link>
  </div>
  )
}
