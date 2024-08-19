import React from 'react'
import ReactDOM from 'react-dom/client';

import './styles/reset.css';
import styles from './index.module.css';

import App from './components/App/App';

ReactDOM.createRoot(document.getElementById("root")).render(
    <div className={styles.wrapper}>
        <App />
    </div>
)
