import Link from 'next/link'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
  <div>
       <Link href="/quiz" as="/quiz"></Link>
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  </div>
  )
}
