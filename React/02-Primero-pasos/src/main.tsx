import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';
import { FirstStepsApp } from './FirstStepsApp';
import { MyAwesomeApp } from './MyAwesomeApp';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepsApp />
    <MyAwesomeApp />
  </StrictMode>,
)
