import React, { Component } from 'react';
import { SideNav, SideNavItem, Breadcrumb, MenuItem, Card, CardTitle, Button, Row, Input } from 'react-materialize';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Payment = styled.div`
    padding-left: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80vh;
`

class Billing extends Component {
    render(){
        return (
            <div>
                <Breadcrumb style={{padding:"0"}}>
                    <MenuItem>
                    <a href="/">Home</a>
                    </MenuItem>
                    <MenuItem>Billing</MenuItem>
                </Breadcrumb>

                
                <div style={{ display:"flex"}}>

                    <SideNav style={{ position: "relative", height: "95vh" }}>
                        <SideNavItem icon="search">Search</SideNavItem>
                        <SideNavItem icon="rate_review">My Reviews</SideNavItem>
                        <SideNavItem icon="attach_money">
                            <Link to="/billing">Billing</Link>
                        </SideNavItem>
                        <SideNavItem icon="settings">Settings</SideNavItem>
                        <SideNavItem divider />
                        <SideNavItem icon="cancel">Sign Out</SideNavItem>
                    </SideNav>

                    <Payment>
                        <h3> Billing </h3>
                        <Card title="Payment Info">
                            <Row style={{width: "40%"}}>
                                <Input placeholder="Credit Card #" />
                                <Input placeholder="Expiration Date" />
                                <Input placeholder="CVV" />
                            </Row>
                        </Card>
                        <Input name='year' type='checkbox' value='1 Year Subscription - $ 9.99' label='1 Year Subscription - $ 9.99' />
                        <Input name='month' type='checkbox' value='1 Month Subscription - $ 0.99' label='1 Month Subscription - $ 0.99' />
                        <Button waves='light' large={true}>Buy Now</Button>
                    </Payment>

                </div>
            </div>
        )
    };
};

export default Billing; 