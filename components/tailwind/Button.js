import React from 'react';

function Button(props) {

    const selected = (color)=>{
        switch (color) {
            case 'primary':
                return (
                    <button className={"p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300"}>
                        {props.title}
                    </button>
                )
            case 'secondary':
                return (
                    <button
                        className="p-2 pl-5 pr-5 bg-gray-500 text-gray-100 text-lg rounded-lg focus:border-4 border-gray-300">
                        {props.title}
                    </button>
                )
            case 'warning':
                return (
                    <button
                        className="p-2 pl-5 pr-5 bg-yellow-500 text-gray-100 text-lg rounded-lg focus:border-4 border-yellow-300">
                        {props.title}
                    </button>
                )
            case 'danger':
                return(
                    <button
                        className="p-2 pl-5 pr-5 bg-red-500 text-gray-100 text-lg rounded-lg focus:border-4 border-red-300">
                        {props.title}
                    </button>
                )
            case 'success':
                return(
                    <button
                        className="p-2 pl-5 pr-5 bg-green-500 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300">
                        {props.title}
                    </button>
                )
        }
    }

    return (
        <>
            {selected(props.var)}
        </>
    );
}

export default Button;