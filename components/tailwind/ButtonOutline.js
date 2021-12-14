import React from 'react';

function ButtonOutline(props) {

    const selected = (color) => {
        switch(color){
            case 'primary':
                return(
                    <button
                        className="p-2 pl-5 pr-5 bg-transparent border-2 border-blue-500 text-blue-500 text-lg rounded-lg hover:bg-blue-500 hover:text-gray-100 focus:border-4 focus:border-blue-300">
                        Primary
                    </button>
                )
            case 'secondary':
                return(
                    <button
                        className="p-2 pl-5 pr-5 bg-transparent border-2 border-gray-500 text-gray-500 text-lg rounded-lg hover:bg-gray-500 hover:text-gray-100 focus:border-4 focus:border-gray-300">
                        Secondary
                    </button>
                )
            case 'warning':
                return(
                    <button
                        className="p-2 pl-5 pr-5 bg-transparent border-2 border-yellow-500 text-yellow-500 text-lg rounded-lg hover:bg-yellow-500 hover:text-gray-100 focus:border-4 focus:border-yellow-300">
                        Warning
                    </button>
                )
            case 'danger':
                return(
                    <button
                        className="p-2 pl-5 pr-5 bg-transparent border-2 border-red-500 text-red-500 text-lg rounded-lg hover:bg-red-500 hover:text-gray-100 focus:border-4 focus:border-red-300">
                        Hazard</button>

                )
            case 'success':
                return(
                    <button
                        className="p-2 pl-5 pr-5 bg-transparent border-2 border-red-500 text-red-500 text-lg rounded-lg hover:bg-red-500 hover:text-gray-100 focus:border-4 focus:border-red-300">
                        Hazard
                    </button>

                )
        }
    }

    return (
        <>{selected(props.var)}</>
    );
}

export default ButtonOutline;