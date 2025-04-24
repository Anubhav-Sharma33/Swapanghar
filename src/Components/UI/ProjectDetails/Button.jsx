import React from 'react'

const Button = ({className,onClick,children,type}) => {
    if(type == "button"){
        return(
            <button className={`text-center px-[20px] py-[9px] text-[13px] min-w-[120px] hover:cursor-pointer font-semibold ${className}`} onClick={onClick}>{children}</button>
        )
    }else{
        return(
            <a className={`text-center px-[20px] py-[9px] text-[13px]  min-w-[120px] hover:cursor-pointer font-semibold ${className}`} onClick={onClick}>{children}</a>
        )
    }
}

export default Button