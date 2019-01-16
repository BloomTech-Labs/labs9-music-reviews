import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
// import dummyData from '../DummyData/dummyData.js'
import { Card, Col, CardTitle, Row, Form, FormGroup, Input } from 'reactstrap'
import Stars from '../StarsRating/Stars'

class SearchView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carReviews: [],
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div className="mainContainer">
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
              <Card
                className="medium"
                header={<CardTitle image="img/sample-1.jpg" />}
              >
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={'auto'}>
              <Card
                className="medium"
                header={<CardTitle image="img/sample-1.jpg" />}
              >
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={'auto'}>
              <Card
                className="medium"
                header={<CardTitle image="img/sample-1.jpg" />}
              >
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={'auto'}>
              <Card
                className="medium"
                header={<CardTitle image="img/sample-1.jpg" />}
              >
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
              <Card
                className="medium"
                header={<CardTitle image="img/sample-1.jpg" />}
              >
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={'auto'}>
              <Card
                className="medium"
                header={<CardTitle image="img/sample-1.jpg" />}
              >
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={'auto'}>
              <Card
                className="medium"
                header={<CardTitle image="img/sample-1.jpg" />}
              >
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={'auto'}>
              <Card
                className="medium"
                header={<CardTitle image="img/sample-1.jpg" />}
              >
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
              <Card
                className="medium"
                header={<CardTitle image="img/sample-1.jpg" />}
              >
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={'auto'}>
              <Card
                className="medium"
                header={<CardTitle image="img/sample-1.jpg" />}
              >
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={'auto'}>
              <Card
                className="medium"
                header={<CardTitle image="img/sample-1.jpg" />}
              >
                <div>
                  <Stars />
                </div>
                My Defender Jeremy Camp
              </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={'auto'}>
              <Card
                className="medium"
                header={<CardTitle image="img/sample-1.jpg" />}
              >
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
