import Link from "next/link";

export default function MainMenu () {
    return <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start mt-2">
    <div className="sm:block">
      <div className="flex space-x-4">
          <Link  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page"href="/pages/Quiz" as="/quiz">Take Quiz</Link>
          <Link  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page"href="/pages/PerformanceChart" as="/chart">Charts</Link>
          <Link  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page"href="/pages/Results" as="/results">Results</Link>
      </div>
    </div>
  </div>
  }
  