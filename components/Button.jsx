const Button = ({children, className, ...props}) => {
    return (
        <button {...props} className={`bg-bluetiful rounded-md text-white p-2 px-6 focus:outline-none focus:ring-2 focus:ring-bluetiful focus:ring-opacity-50 ${className}`}>
            {children}
        </button>
    );
}

export default Button;
