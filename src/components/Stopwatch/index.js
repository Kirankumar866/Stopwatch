// Write your code here
import {Component} from 'react'
import './index.css'

const initailvalues = {
  initialMinutes: 0,
  initialSeconds: 0,
}

class Stopwatch extends Component {
  state = initailvalues

  increment = () => {
    this.setState(prev => {
      const {initialSeconds} = prev
      return {initialSeconds: initialSeconds + 1}
    })
  }

  onStartbtn = () => {
    const timerId = setInterval(() => this.increment, 1000)
  }

  render() {
    const {initialMinutes, initialSeconds} = this.state
    return (
      <div className="bigCon">
        <h1>StopWatch</h1>
        <div className="timmerCon">
          <h1>Timer</h1>
          <div>
            <p>{initialSeconds}</p>
            <p>:</p>
            <p>{initialMinutes}</p>
          </div>
          <div>
            <button type="button" onClick={this.onStartbtn}>
              Start
            </button>
            <button type="button">Stop</button>
            <button type="button">Reset1</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
