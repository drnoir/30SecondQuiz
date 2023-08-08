  <MainMenu />// MainMenu

export default function MainMenu () {
    return <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    <div className="flex flex-shrink-0 items-center">
      <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
    </div>
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Take our Quiz</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Results</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Charts</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Share</a>
      </div>
    </div>
  </div>
  }
  