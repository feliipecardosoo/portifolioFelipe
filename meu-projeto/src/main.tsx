import React from 'react'
import ReactDOM from 'react-dom/client'
import Principal from './assets/componentes/principal/principal'
import './index.css'
import Projetos from './assets/componentes/projetos/projetos'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Principal />
    <Projetos />
  </React.StrictMode>,
)
