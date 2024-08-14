import {
    useId,
} from 'react'

function InputText(
    {
        label,
    } : {
        label: string
    }
) {
    // generate unique IDs
    const id = useId();

    return (
        <section>
            <label
                htmlFor={id} 
            >
                {label} 
            </label>
            <input
                id={id}
            />
        </section>
    )
}

export default function TestUseId() {

    return (
        <div>
            {/*Same Component used twice*/}
            <InputText
                label="Name:"
            />
            <InputText
                label="E-mail:"
            />
        </div>
    );
}