import { 
    createContext,
} from 'react';

type SetMainContextValueFunction = React.Dispatch<React.SetStateAction<{
    name: string;
    age: number;
}>>;

export type MainContextValueType = {
    name: string;
    age: number;
};

type MainContextType = {
    value: MainContextValueType;
    func: SetMainContextValueFunction;
}


export const MainContext = createContext<MainContextType | null>( null );
