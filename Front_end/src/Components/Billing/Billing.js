import React, { Component } from 'react';
import { SideNav, SideNavItem, Breadcrumb, MenuItem, Button, Row, Col, Input } from 'react-materialize';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Checkout from './Checkout';

const Payment = styled.div`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
`;

class Billing extends Component {
    render(){
        return (
            <div>
                <Breadcrumb>
                    <MenuItem>
                    <a href="/">Home</a>
                    </MenuItem>
                    <MenuItem>Billing</MenuItem>
                </Breadcrumb>

                <Row>
                    <Col className="col s2">
                        <SideNav
                            trigger={<Button>SIDE NAV</Button>}
                            options={{ closeOnClick: true }}
                        >
                            <SideNavItem userView
                                user={{
                                    background: 'img/office.jpg',
                                    image: 'img/yuna.jpg',
                                    name: 'John Doe',
                                    email: 'jdandturk@gmail.com'
                                }}
                            />
                            <SideNavItem icon="search">Search</SideNavItem>
                            <SideNavItem icon="rate_review">My Reviews</SideNavItem>
                            <SideNavItem icon="attach_money">
                                <Link to="/billing">Billing</Link>
                            </SideNavItem>
                            <SideNavItem icon="settings">Settings</SideNavItem>
                            <SideNavItem divider />
                            <SideNavItem icon="cancel">Sign Out</SideNavItem>
                        </SideNav>
                    </Col>

                    <Col className="valign-wrapper s10">
                        <Payment>
                            <h2 style={{ textAlign: "left" }}> Billing </h2>
                            {/* <Card title="Payment Info" className="large" style={{ padding: "3rem 10rem 3rem 0", textAlign: "left" }}>
                                <Input placeholder="Credit Card #" /><br />
                                <Input placeholder="Expiration Date" /><br />
                                <Input placeholder="CVV" />
                            </Card> */}
                            {/* <Button waves='light' large={true}>Buy Now</Button> */}
                            <div style={{ margin: "2rem 0" }}>
                                <Input name='year' type='checkbox' value='1 Year Subscription - $ 9.99' label='1 Year Subscription - $ 9.99' /><br /><br />
                                <Input name='month' type='checkbox' value='1 Month Subscription - $ 0.99' label='1 Month Subscription - $ 0.99' />
                            </div>
                            <Checkout 
                                name={"Testing"}
                                description={"Running a test"}
                                amount={1}
                            />
                            <p style={{ color: "lightgray" }}>*Subscriptions are automatically renewed unless specified. To edit subscription preferences, please navigate to ""</p>
                        </Payment>            
                    </Col>
                </Row>
            </div>
        )
    };
};

export default Billing; 