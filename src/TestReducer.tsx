import { useReducer } from "react";

type StateType = {
    name: string;
    age: number;
}

type StateActionType = {
    type: string;
    payload: number;
}

export default function TestReducer() {

    const reducerFunc = (
        state: StateType, 
        action: StateActionType
    ) => {
        const checkAge = (age: number) => {
            return (age >= 18 && age <=65);
        };
        if (action.type === "inc") {
            const newAge = state.age + action.payload;
            return {...state, age: checkAge(newAge)? newAge: state.age};
        }
        if (action.type === "dec") {
            const newAge = state.age - action.payload;
            return {...state, age: checkAge(newAge)? newAge: state.age};
        }
        return {...state};
    };

    const initialState = {
        name: "kvs",
        age: 25
    };

    const [state, stateDispatch] = useReducer(
        reducerFunc,
        initialState
    );

    return (
        <div>
            <p>Testing useReducer</p>
            <p>The name is: {state.name}</p>
            <p>The age is: {state.age}</p>
            <button
                className="border rounded-lg"
                onClick={() => stateDispatch({type: "inc", payload: 1})}
            >
                Increment Age
            </button>
            <button
                className="border rounded-lg"
                onClick={() => stateDispatch({type: "dec", payload: 1})}
            >
                Decrement Age
            </button>
        </div>
    );
}