import ReactDom from "react-dom/client"

import App from './App.jsx'
import { Provider as ReducProvider } from "react-redux"
import store from "@/store/store.js"


ReactDom.createRoot(document.getElementById('root')).render(
      <ReducProvider store={store}>
            <App />
      </ReducProvider>
)
