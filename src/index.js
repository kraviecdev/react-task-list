import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './core/App';
import {Provider} from 'react-redux';
import store from './core/store';

ReactDOM.createRoot(document.getElementById('root')).render(
        <Provider store={store}>
            <App/>
        </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
