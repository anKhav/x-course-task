import {createContext, useContext} from "react";

const SpecificBookContext = createContext(undefined)



function useSpecificBookContext() {
    const context = useContext(SpecificBookContext)
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return context
}

export { SpecificBookContext, useSpecificBookContext }