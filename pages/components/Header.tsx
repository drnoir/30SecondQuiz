// main view template
export default function Header() {
    return <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-8">
        <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"/>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <svg className="animate-bounce w-20 h-20 fill-white-500 ..." viewBox="0 0 30 30">
                <path d="M12 7V12L13.5 14.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">The 30 Second Quizzer</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">Answer Quiz Questions, You have 30 seconds for each.
                    Good Luck.</p>
            </div>
        </div>
    </div>
}
  