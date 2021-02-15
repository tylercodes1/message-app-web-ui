import { BrowserRouter } from 'react-router-dom'
import './App.css'
import ChatroomPage from './Pages/ChatroomPage/ChatroomPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Yohama from './Pages/Yohama/Yohama'

function App() {
   return (
      <Router>
         <Switch>
            <Route path="/" exact component={ChatroomPage} />
            <Route path="/yohammma" component={Yohama} />
         </Switch>
      </Router>
   )
}

export default App
