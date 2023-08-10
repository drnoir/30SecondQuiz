// Button
interface ButtonProps {
    Title: string;
}
export default function Button ({Title}:  ButtonProps) {
    return <button className="bg-blue-500 m-1 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        {Title}
    </button>
}


