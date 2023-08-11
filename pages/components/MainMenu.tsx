import Link from "next/link";

export default function MainMenu () {
    return <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start m-2">
    <div className="grid grid-cols-3 gap-4 content-center">
          <Link  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page" href="/#" as="/#">Start a New Quiz</Link>
          <Link  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page" href="/pages/PerformanceChart" as="/chart">View Perfomance Charts</Link>
          <Link  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page" href="/pages/Results" as="/results">View Your Results</Link>
    </div>
  </div>
  }
  