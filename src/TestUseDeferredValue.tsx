import { 
    useDeferredValue,
} from 'react'
import { useImmer } from 'use-immer'

function ListOfItem(
    {
        items,
        searchText
    } : {
        items: string[],
        searchText: string
    }
) {
    return (
        <ul>
            {
                searchText === ""?
                items:
                items
                .filter(value => {
                    // cause artificial delay here
                    const startTime = performance.now()
                    while (performance.now() - startTime < 2) {
                        // do nothing
                    }
                    return value.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
                })
                .map(value => <li>{value}</li>)
            }
        </ul> 
    );
}

export default function TestUseDeferredValue() {

    const listOfItem = Array<string>(500).fill("").map((_, index) => `Item: ${index}`);
    const [ searchText, setSearchText ] = useImmer<string>("");
    // create a deferred value here
    const deferredSearchText = useDeferredValue(searchText);

    return (
        <div>
            <input
                className="border-4 rounded-lg"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <ListOfItem
                items={listOfItem}
                searchText={deferredSearchText /*deferred value used here instead of searchText*/}
            />
        </div>
    );
}