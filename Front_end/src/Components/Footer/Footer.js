import React from 'react';
import { Link } from 'react-router-dom';

const aStyle = {
    color: '#eac67a',
    textDecoration: 'none'
}


const Footer = () => {
    let year = new Date();
    let currentYear = year.getFullYear();
    return (
       
    <footer className="fixed-bottom" style = {{background: '#984b43'}}>
            <div className="row text-center d-flex justify-content-center pt-3 mb-1">                  
                <div className="col-md-2 mb-2">
                    <h6 className="text-uppercase font-weight-bold">
                        <Link style = {aStyle} to = 'about-us'>About us</Link>
                    </h6>
                </div>
            </div>
        <hr style={{margin: '0 15%', borderTop: '1px solid  rgb(234, 198, 122)'}}/>   
        <div className="footer-copyright text-center py-3">© {currentYear} Copyright 
            <a style = {aStyle} href="/"> OnTheRecord.us</a>
        </div>
    </footer>

    )
}

export default Footer;