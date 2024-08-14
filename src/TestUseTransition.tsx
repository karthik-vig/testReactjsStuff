import {
    useTransition,
    useMemo
} from 'react'
import { useImmer } from 'use-immer'


function FilteredSearchList(
    { 
        searchList,
        searchFilterText
    } : { 
        searchList: string[],
        searchFilterText: string
    }
) {
    return (
        <ul
            className="border-4 rounded-lg"
        >
            {searchList
                .filter(value => {
                    const startTime = performance.now();
                    // this line slows down the entire tab, not just this
                    // component!!!
                    while(performance.now() - startTime < 1) {
                        // do nothing for 1ms per item in list
                    }
                    return value.includes(searchFilterText);
                }).map(value => <li>{value}</li>)
            }
        </ul>
    );
}

export default function TestUseTransition() {

    const searchList: string[] = Array<string>(700).fill("").map((_ ,index: number) => {
        return `Item: ${index}`;
    });
    const [ searchFilterText, setSearchFilterText ] = useImmer<string>("");
    const [ searchInputText, setSearchInputText ] = useImmer<string>("");
    const [ isPending, startTransition ] = useTransition();

    // optimization to reduce re-computation of unchanging values
    const itemListComp = useMemo( () => 
        (
            <ul
                className="border-4 rounded-lg"
            >
                {
                    searchList
                        .map( (value, index) => <li key={index}>{value}</li>)
                }
            </ul>
        ), [searchList, ]
    );


    return (
        <div>
            <input 
                className="border-4 rounded-lg"
                value={searchInputText}
                onChange={(e) => {
                    // set the input value change independantly
	                // of the search filter value
                    setSearchInputText(e.target.value);
                    // using startTransition() here
                    startTransition(()=>{
                        // usually used for changing states with a delay
                        setSearchFilterText(e.target.value);
                    })
                }}
            />
            {isPending? // display appropriate component based whether it is pending
                <p>Loading...</p>:
                (   searchFilterText === ""?
                        itemListComp:
                        <FilteredSearchList 
                            searchList={searchList}
                            searchFilterText={searchFilterText}
                        />
                )
            }
            <p>------------List End----------</p>
        </div>
    );
}