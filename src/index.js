import App from './App'

const react = require('react');
const reactdom = require('react-dom/client');

const root = reactdom.createRoot(document.getElementById('root'));
root.render(<App/>);