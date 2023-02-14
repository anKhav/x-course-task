import { useReducer} from "react";
import {reducer} from "../reducers/SpecificBookReducer";
import {SpecificBookContext} from "../context/SpecificBookContext";


const SpecificBookProvider = props => {
    const [book, dispatch] = useReducer(reducer, []);


    return (
        <SpecificBookContext.Provider value={{ book, dispatch }}>
            {props.children}
        </SpecificBookContext.Provider>
    );
};

export default SpecificBookProvider;
