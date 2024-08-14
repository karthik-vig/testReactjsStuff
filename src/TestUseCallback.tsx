import { useCallback } from 'react';
import { useImmer } from 'use-immer'

function Button({ inc }: { inc: () => void }) {
    return (
        <button
            onClick={inc}
        >
            Increment
        </button>
    );
}

export default function TestUseCallback() {

    const [someValue, setSomeValue] = useImmer(0);

    const callbackFunc = useCallback(()=>{
        setSomeValue(someValue + 1);
    },[
        someValue,
        setSomeValue,
    ]);

    return (
        <div>
            <p>The value to be inc. by useCallback funcion: {someValue}</p>
            <Button
                inc={callbackFunc}
            />
        </div>
    );
}