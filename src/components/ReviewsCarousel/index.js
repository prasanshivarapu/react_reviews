// Write your code here

import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {result: 0}

  btnright = () => {
    const {result} = this.state
    if (result <= 2) {
      this.setState({result: result + 1})
    } else {
      this.setState({result: 0})
    }
  }

  btnleft = () => {
    const {result} = this.state
    if (result >= 1) {
      this.setState({result: result - 1})
    } else {
      this.setState({result: 3})
    }
  }

  render() {
    const {result} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[result]

    return (
      <div className="greet1">
        <h1 className="review">Reviews</h1>
        <div className="greet2">
          <button type="button" className="button">
            <img
              className="image"
              onClick={this.btnleft}
              alt="left"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>

          <div className="greet3">
            <img src={imgUrl} alt="avatar" />
            <h1 className="username">{username}</h1>
            <p className="comapanyname">{companyName}</p>
            <p className="des">{description}</p>
          </div>

          <button className="button" type="button" onClick={this.btnright}>
            <img
              className="image"
              alt="right"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
