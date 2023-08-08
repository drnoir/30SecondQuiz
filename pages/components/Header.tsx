// main view template
export default function Header() {
    return <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"/>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">The 30 Second Quizzer</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">Answer Quiz Question, You have 30 seconds for each.
                    Good Luck.</p>
            </div>
        </div>
    </div>
}
  