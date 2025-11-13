
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App name= {"vara1"} age={21} />
    <App name={"vara2"} age={24}/>
    {App({name:"pra",age:28})}
    {console.log("hello from vite 2")}
  </>,
)
