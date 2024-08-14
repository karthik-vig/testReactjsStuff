import { StrictMode } from 'react'
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
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
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
  </StrictMode>,
)
