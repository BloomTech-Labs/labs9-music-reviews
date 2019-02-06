import React from 'react';
import { Link } from 'react-router-dom';

const aStyle = {
    color: '#eac67a',
    textDecoration: 'none'
}


const Footer = (props) => {
    let year = new Date();
    let currentYear = year.getFullYear();
    return (
       
    <footer className="container-fluid w-100 py-2" style = {{background: '#984b43', zIndex: '9999'}}>
            <div className="row text-center d-flex justify-content-center pt-1 mb-1">                  
                <div className="col-md-2 mb-1">
                    <h6 className="text-uppercase font-weight-bold">
                        <Link style = {aStyle} to = 'about-us'>About us</Link>
                    </h6>
                </div>
            </div>
        <hr style={{margin: '0 12%', borderTop: '1px solid  rgb(234, 198, 122)'}}/>   
        <div className="footer-copyright text-center pt-2"><span style = {aStyle}>© {currentYear} Copyright</span>
            <a style = {aStyle} href={!props.loggedIn ? "/" : "/home"}> OnTheRecord.us</a>
        </div>
    </footer>

    )
}

export default Footer;