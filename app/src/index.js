import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import HelloWorld from './HelloWorld';

ReactDOM.render(
    <HelloWorld txt = 'Hello World from Component React.js by Breno Franca' />,
    document.getElementById('root')
);
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();