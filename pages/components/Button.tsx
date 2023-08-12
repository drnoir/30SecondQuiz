// Button
interface ButtonProps {
    Title: string;
}
export default function Button ({Title}, correctAnswer) {
    async function handleSubmit(e, correctAnswer) {
        e.preventDefault();
        if (correctAnswer){
            return true;
        }
        else{
            return false;
        }
    }

    return <button className="bg-blue-500 m-1 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
    onSubmit = {handleSubmit}
    >
        {Title}
    </button>
}


