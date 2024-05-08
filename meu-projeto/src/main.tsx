import React from 'react'
import ReactDOM from 'react-dom/client'
import Principal from './assets/componentes/principal/principal'
import './index.css'
import Skills from './assets/componentes/skils/skils'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Principal />
    <Skills />
  </React.StrictMode>,
)
