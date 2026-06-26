import { useRef } from "react";
import { useDispatch } from "react-redux";

const Button = () =>{
    const Dispach = useDispatch();

    const InputElement = useRef();

    const handleIncrement = () =>{
        Dispach({ type : "INCREMENT"});
    }

    const handleDecrement =() =>{
        Dispach({ type : "DECREMENT"});
    }

    const handleAdd = () => {
        Dispach({type : "ADD", payload :{
            num: InputElement.current.value,
        }})
        InputElement.current.value ="";
    }

    const handleSub = () => {
        Dispach({type : "Substract", payload : {
            num : InputElement.current.value,
        } })
    }

    return(
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"> 
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={handleIncrement}>
                        +1
                </button> 
                <button 
                    type="button" 
                    className="btn btn-success"
                    onClick={handleDecrement}>
                        -1
                </button>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
                <input
                type="text"
                placeholder="Enter Number" 
                className="Number input"
                ref={InputElement}
                />

                <button 
                type="button" 
                className="btn btn-danger rounded-pill px-3"
                onClick={handleAdd}>
                    ADD
                </button> 
                <button 
                    type="button" 
                    className="btn btn-danger rounded-pill px-3"
                    onClick={handleSub}>
                        SUBS
                </button>
            </div>
        </>
    )
}

export default Button;