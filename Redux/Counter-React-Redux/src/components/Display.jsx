import { useSelector } from "react-redux";

const Display = () => {

    const counter = useSelector((store) => store.counter)
    return <p className="lead mb-4">
            Counter Valus :{ counter }
    </p>
}

export default Display;