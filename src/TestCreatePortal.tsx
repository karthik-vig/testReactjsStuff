import { createPortal } from 'react-dom';
//import { useImmer } from 'use-immer';


function SomeComp() {
    return (
        <div>
            <ul>
            {Array<number>(10).fill(0).map( (value: number, index: number) => {
                    return (<li key={index}>{`The value for this portal list is ${index + value}`}</li>);
                }
            )}
            </ul>
        </div>
    );
}

export default function TestCreatePortal() {
    const newHtmlElementParent = document.body.querySelector("#root");
    if (newHtmlElementParent === null) return (<></>);
    return (
        <div>
            <p>Test the portal functionality</p>
            {createPortal(<SomeComp />, newHtmlElementParent)}
        </div>
    );
}