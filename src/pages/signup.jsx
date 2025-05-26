import { useState } from "react"; 
export default function Signup(){
    const [username, setUsername] = useState("");
    const [isInputFilled, setIsInputFilled] = useState(false);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setUsername(value);
        setIsInputFilled(value.length > 0);
    };
    return(
        
        <main className="bg-cinza min-h-screen flex items-center justify-center">
            <form className="bg-white w-135 h-62 flex flex-col rounded-2xl shadow-lg justify-between p-5 border-1 border-border-color">
                <h1 className="text-title">Welcome to CodeLeap netword!</h1>
                <div className="flex flex-col gap-2">
                    <small className="text-subtitle">Please enter your username</small>
                    <input className="shadow-lg rounded-lg p-3 border-1 border-border-color text-title" value={username} onChange={handleInputChange} type="text" placeholder="John doe" />
                </div>
                
                <a  href={isInputFilled ? "/main" : undefined}
                    className={`text-subtitle text-center content-center mb-4 bg-button self-end w-28 h-8 rounded-lg transition duration-300 ease-in-out
                    ${isInputFilled ? "bg-button cursor-pointer" : "bg-cinza"}
                `}>
                    Enter
                </a>
                
            </form>
        </main>
    );
}

