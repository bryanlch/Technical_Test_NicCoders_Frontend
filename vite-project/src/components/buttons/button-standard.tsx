import React, { ReactNode, MouseEvent } from 'react';

interface ButtonStandardProps {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    color?: string;
    outline?: boolean;
    children: ReactNode;
}

const ButtonStandard: React.FC<ButtonStandardProps> = ({ onClick, color = 'white', outline = false, children }) => {
    let buttonClass = "font-bold py-2 px-4 rounded-md";

    if (!outline) {
        buttonClass += ` bg-${color} hover:opacity-75 text-black`;
    } else {
        buttonClass += ` border border-${color} text-${color} hover:bg-${color}-100 hover:opacity-75`;
    }

    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
}

export default ButtonStandard;
