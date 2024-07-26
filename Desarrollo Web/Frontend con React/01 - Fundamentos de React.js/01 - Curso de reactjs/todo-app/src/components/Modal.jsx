import ReactDOM from "react-dom"
const Modal = ({children}) => {
    return ReactDOM.createPortal(
        <div className="transition-all duration-1000 ease-in-out absolute top-1/4 right-1/2 flex justify-center items-center rounded-lg shadow-lg shadow-gray-800 bg-zinc-600/90 w-[400px] h-[300px] translate-x-1/2 translate-y-1/2">
            {children}
        </div>,
        document.getElementById('modal-root')
    )
}

export default Modal