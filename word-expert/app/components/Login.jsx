import React from 'react'

const Login = ({handleSetPageView}) => {
    const handleOutsideClick= () => {
        handleSetPageView('search');
    }

    const [windowView, setWindowView] = useState("entrance"); //entrance, login, signup
    

    return (
        
        <div className="min-h-screen flex items-center justify-center" onClick={handleOutsideClick}>
        <div className="bg-white w-72 h-96 rounded-lg shadow-md flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl w-full font-bold mt-12 mb-12 text-center">Welcome</h2>
            <div className="space-y-12 mt-12 w-2/3">
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
                    Login
                </button>
                <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
                    Sign Up
                </button>
            </div>
        </div>
        </div>
    )
}

export default Login