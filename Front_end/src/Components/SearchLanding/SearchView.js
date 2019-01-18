import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
// import dummyData from '../DummyData/dummyData.js'
import {
  Card,
  Col,
  CardTitle,
  CardBody,
  CardText,
  Row,
  Form,
  FormGroup,
  Input,
  CardImg,
  Label,
  CardSubtitle,
} from 'reactstrap'
import Stars from '../StarsRating/Stars'
import axios from 'axios'
import ratings from 'react-ratings-declarative/build/ratings'
const URL = 'https://labs9-car-reviews.herokuapp.com/user/get/adam@gmail.com'

class SearchView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carReviews: [],
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    axios
      .get(URL)
      .then(res => {
        // this.setState({ carReviews: [this.state.carReviews, res.data] })
        this.setState({ carReviews: [...this.state.carReviews, res.data] })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    console.log(this.state.carReviews)
    return (
      <div className="mainContainer">
        <div
          style={{
            display: 'flex',
            margin: '0 auto',
            maxWidth: '1500px',
            justifyContent: 'space-around',
          }}
        >
          <Row>
            <Col sm={'auto'}>
              {this.state.carReviews.map(review =>
                <Card key={'review.userId'}>
                  <CardBody>
                    <CardTitle>Reading from the user table</CardTitle>
                    <CardSubtitle>
                      Email:{review.emailAddress}
                    </CardSubtitle>
                    <CardSubtitle>
                      {' '}MembershipStatus:{review.paidMembership}
                    </CardSubtitle>
                    <CardSubtitle>
                      SubscriptionExpiration:{review.subscriptionExpiration}
                    </CardSubtitle>
                  </CardBody>
                  <div>
                    <Stars />
                  </div>
                </Card>,
              )}
            </Col>
          </Row>
        </div>

        <div
          className="mainContainerText"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          {' '}<h1>Music reviews for everyone.</h1>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <Col md={6}>
            <Form>
              <Input
                type="text"
                name="search"
                placeholder="Search prepopulated"
              />
            </Form>
          </Col>
        </div>

        <div style={{ marginLeft: '350px', marginTop: '50px' }}>
          <h1> Tracks</h1>
        </div>

        <div
          style={{
            display: 'flex',
            margin: '0 auto',
            maxWidth: '1500px',
            justifyContent: 'space-around',
          }}
        >
          <Row>
            <Col sm={'auto'}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Card image cap"
                />
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={'auto'}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Card image cap"
                />
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={'auto'}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Card image cap"
                />
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={'auto'}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Card image cap"
                />
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>
        </div>

        <div style={{ marginLeft: '350px' }}>
          <h1>Albums</h1>
        </div>

        <div
          style={{
            display: 'flex',
            margin: '0 auto',
            maxWidth: '1500px',
            padding: '2px',
            justifyContent: 'space-around',
          }}
        >
          <Row>
            <Col sm={'auto'}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Card image cap"
                />
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={'auto'}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Card image cap"
                />
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={'auto'}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Card image cap"
                />
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={'auto'}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Card image cap"
                />
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>
        </div>

        <div style={{ marginLeft: '350px' }}>
          <h1>Artists</h1>
        </div>

        <div
          style={{
            display: 'flex',
            margin: '0 auto',
            maxWidth: '1500px',
            padding: '2px',
            justifyContent: 'space-around',
          }}
        >
          <Row>
            <Col sm={'auto'}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Card image cap"
                />
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={'auto'}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Card image cap"
                />
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={'auto'}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Card image cap"
                />
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={'auto'}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Card image cap"
                />
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default SearchView
