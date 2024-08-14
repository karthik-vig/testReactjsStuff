import { 
  useState,
  useContext,
} from 'react';
import { MainContext } from './contextStore';
import type { MainContextValueType } from './contextStore';
import {
  useImmer,
} from 'use-immer';


function ListComp() {

  const mainContextValue = useContext(MainContext);
  if (mainContextValue === null) return (<></>);
  const [personalInfo, setPersonalInfo] = [mainContextValue.value, mainContextValue.func];
  const funcToggle = (value: MainContextValueType) => {
    const newObj = {...value};
    if (newObj.name === "kvs") {
      newObj.name = "kvs2";
      newObj.age = 42;
    } else {
      newObj.name = "kvs";
      newObj.age = 25;
    }
    return newObj;
  };

  return (
    <>
      <p>{personalInfo.name}</p>
      <p>{personalInfo.age}</p>
      <ul>
        {Array<number>(10).fill(0).map( (value: number, index: number) => {
            return (<li key={index}>{index + value}</li>);
          }
        )}
      </ul>
      <button
        onClick={() => setPersonalInfo(funcToggle(personalInfo)) }
        className="border rounded-lg bg-slate-500"
      >
        Toggle Button
      </button>
    </>
  );
}

export default function App() {

  const [ someState, setSomeState] = useState(0);
  const [ personalInfo, setPersonalInfo ] = useImmer({
    name: "kvs2",
    age: 42
  });
  const mainContextValue = {
    value: personalInfo,
    func: setPersonalInfo
  }
  return (
    <MainContext.Provider value={mainContextValue}>
      <p>{personalInfo.name}</p>
      <p>{personalInfo.age}</p>
      <button
        onClick={()  => setSomeState(someState + 1)}
        className="border rounded-lg bg-slate-600 shadow-md"
      >
        Click to Increase counter
      </button>
      <p>{someState}</p>
      <ListComp />
    </MainContext.Provider>
  );
}
