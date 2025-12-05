
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <>
  <>
    <App name= {"vara1"} age={21} />
  
    {/* {App({name:"pra",age:28})}
    {console.log("hello from vite 2")} */}
    <h1> Hello from vite</h1>
    </>
  </>,
)
