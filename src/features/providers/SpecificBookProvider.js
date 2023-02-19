import { useReducer} from "react";
import {reducer} from "../reducers/SpecificBookReducer";
import {SpecificBookContext} from "../context/SpecificBookContext";


const SpecificBookProvider = props => {
    const [book, specificBookDispatch] = useReducer(reducer, []);
    const value = {book, specificBookDispatch}


    return (
        <SpecificBookContext.Provider value={value}>
            {props.children}
        </SpecificBookContext.Provider>
    );
};

export default SpecificBookProvider;
