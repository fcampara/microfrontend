import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

export default function initialize(element: ReactDOM.Container) {
  ReactDOM.createRoot(element).render(<App />);
}
