import React, { useState, useEffect, createContext } from 'react';
import getState from './Flux.js';

export const Context = createContext(null)

const injectContext = MainComponent => {

    const StoreWrapper = props => {

        const [state, setState] = useState(getState({
            getStore: () => state.store,
            setStore: (updStore) => {
                setState({
                    store: Object.assign(state.store, updStore),
                    actions: state.actions
                })
            },
            getActions: () => state.actions
        }))

        useEffect(() => {
            state.actions.fetchAndSetData()
        },[])

        return (
            <Context.Provider value={state}> 
                <MainComponent {...props} />
            </Context.Provider>
        )
    }

    return StoreWrapper

}

export default injectContext