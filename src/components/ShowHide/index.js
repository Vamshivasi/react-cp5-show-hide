// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  onShowLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  onShowFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Show/hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              className="show-hide-button"
              onClick={this.onShowFirstName}
              type="button"
            >
              Show/Hide
            </button>
            {showFirstName && <p className="name">Joe</p>}
          </div>
          <div>
            <button
              className="show-hide-button"
              onClick={this.onShowLastName}
              type="button"
            >
              Show/Hide Lastname
            </button>
            {showLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
