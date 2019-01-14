import React, { Component } from 'react'
import { Row, Col, Button, Input, Section } from 'react-materialize'

class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentDidMount() {}

  render() {
    return (
      <Section className="center">
        <Row>
          <Input s={4} label="Filter By" type="select">
            <option value="" disabled selected>
              Reviewer
            </option>
            <option value="1">Adam Lee</option>
            <option value="2">Das MA</option>
            <option value="3">Francis Tse</option>
            <option value="4">A.D.Faris</option>
            <option value="5">Will Kwon</option>
          </Input>

          <Input s={4} label="" type="select">
            <option value="" disabled selected>
              {' '}Rented{' '}
            </option>
            <option value="1">Rented</option>
            <option value="2">Owned</option>
          </Input>

          <Input s={4} label="Sorted By" type="select">
            <option value="" disabled selected>
              Reviewer
            </option>
            <option value="1">Rating up</option>
            <option value="2">Rating Down</option>
            <option value="3">Year Up</option>
            <option value="4">Year Down</option>
            <option value="5">Date of Review</option>
            <option value="6">Reviewer</option>
          </Input>
        </Row>
      </Section>
    )
  }
}

export default Filter
