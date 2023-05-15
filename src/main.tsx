import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import styles from './index.css'
import { HashRouter as Router } from 'react-router-dom'
import * as serviceWorkerRegistration from '../public/serviceWorkerRegistration';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Router>
        <App />
    </Router>
)

serviceWorkerRegistration.register();
