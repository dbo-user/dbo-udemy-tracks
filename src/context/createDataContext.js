// Purpose - makes data available to the entire app
import React, {useReducer} from 'react';

// re-usable function that receives 3 things-  a reducer function, a dispatch action, an initialState
export default (reducer, actions, initialState) => {
    // will return a context object and a provider function on line 27
    const Context = React.createContext();

    // provider manages data
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        
        // actions is an object like {addBlogPost: (dispatch) => {return () => }}
        const boundActions = {};
        for (let key in actions) { // loop thru all the actions
            boundActions[key] = actions[key](dispatch);
        }

        // provider function returns this
        return (
            <Context.Provider value={{ state:state, ...boundActions }}>
                {children}
            </Context.Provider>
        ); // end return
    }; // end const Provider

        // Provider makes all the data available
        // Context is what we use to access the data
    return { Context, Provider };
}; // end export default
