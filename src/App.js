import {Component} from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import MeetContext from './context/MeetContext'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    data: {},
    buttonState: false,
  }

  addData = data => {
    this.setState({data})
  }

  changeButtonState = () => {
    this.setState({buttonState: true})
  }

  render() {
    const {data, buttonState} = this.state
    console.log(data)
    console.log(buttonState)
    return (
      <MeetContext.Provider
        value={{
          data,
          buttonState,
          addData: this.addData,
          changeButtonState: this.changeButtonState,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetContext.Provider>
    )
  }
}

export default App
