<<<<<<< HEAD
import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import dummyData from '../DummyData/dummyData.js'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carReviews: [],
    }
  }
  componentDidMount() {
    this.setState({
      carReviews: dummyData,
    })
  }
}

export default Search
=======
import React, {Component} from 'react';
import { Row, Col, Button, Input, Section} from 'react-materialize';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
         }
    }

    componentDidMount() {

    }

    render() { 
        return (   
                <Section className = 'center'>                 
                   <Row>
                   <Input s = {3} label = 'Reviewer' type = 'select'>
                        <option value='' disabled selected>Choose reviewer (optional)</option>
                        <option value='1'>Adam Lee</option>
                        <option value='2'>Das MA</option>
                        <option value='3'>Francis Tse</option>
                        <option value='4'>AD Farris</option>
                        <option value='5'>Will Kwon</option>
                   </Input>

                   <Input s = {2} label = 'Year' type = 'select'>
                        <option value='' disabled selected>Choose year</option>
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                   </Input>

                   <Input s = {3} label = 'Make' type = 'select'>
                        <option value='' disabled selected>Choose make</option>
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                   </Input>

                   <Input s = {2} label = 'Model' type = 'select'>
                        <option value='' disabled selected>Choose model</option>
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                   </Input>

                   <Input s = {2} label = 'Trim' type = 'select'>
                        <option value='' disabled selected>Choose trim</option>
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                   </Input>
                   </Row>
                   <Row>

                       <Col s={12} >
                            <Button>Review</Button>
                            <Button>Search</Button>
                       </Col>
                   </Row> 
                   </Section>
         );
    }
}
 
export default Search;
>>>>>>> 2cfb10f14959df55f5c0a2f2d34fc2749f90c356