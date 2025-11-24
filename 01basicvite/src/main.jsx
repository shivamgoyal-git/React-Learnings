import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
function MyApp()
{
    return(
        <div>
            <h1>Custom react app</h1>
        </div>
    )
} 

const areactElement = React.createElement(
    'a',
    {href: 'http.//google.com',
     target : '_blank'
    },
    'click here to visit Google'

)

createRoot(document.getElementById('root')).render(
    areactElement
)
