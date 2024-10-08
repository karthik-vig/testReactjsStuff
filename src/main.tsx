import { StrictMode, Profiler } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import TestCreatePortal from './TestCreatePortal.tsx'
import TestSuspense from './TestSuspense.tsx'
import TestErrorBoundary from './TestErrorBoundary.tsx'
import TestReducer from './TestReducer.tsx'
import TestUseLayoutEffect from './TestUseLayoutEffect.tsx'
import TestUseMemo from './TestUseMemo.tsx'
import TestUseCallback from './TestUseCallback.tsx'
import TestUseTransition from './TestUseTransition.tsx'
import TestUseDeferredValue from './TestUseDeferredValue.tsx'
import TestUseId from './TestUseId.tsx'
import TestAnimations from './testAnimations.tsx'
import './index.css'

function onRender(
  id: string, 
  phase: string, 
  actualDuration: number, 
  baseDuration: number, 
  startTime: number, 
  commitTime: number) {

  console.log(`The id of the component is: ${id}
The phase is: ${phase}
The actual Duration is: ${actualDuration}
The Base duration is: ${baseDuration}
The start time is: ${startTime}
The Commit time: ${commitTime}`)

}

createRoot(document.getElementById('root')!).render(
  <Profiler id="mainRoot" onRender={onRender} >
  <StrictMode>
    <TestAnimations />
    <App />
    <TestCreatePortal />
    <TestSuspense />
    <TestErrorBoundary />
    <TestReducer />
    <TestUseLayoutEffect />
    <TestUseMemo
      nums={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
    />
    <TestUseCallback />
    <TestUseTransition />
    <TestUseDeferredValue />
    <TestUseId />
  </StrictMode>
  </Profiler>,
)
