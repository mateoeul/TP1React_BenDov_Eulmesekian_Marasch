import './boton.css'

const Boton = ({ children, onClick }) => {
    return (
        <button className="button eliminar u-full-width" onClick={onClick}>
            {children}
        </button>
    );
};

export default Boton;