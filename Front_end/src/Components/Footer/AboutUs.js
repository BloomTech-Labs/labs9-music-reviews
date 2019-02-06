import React from 'react';
import './about.css';

const theTeam = [
    {
        name: "Adam",
        picture: "https://ca.slack-edge.com/T4JUEB3ME-UB4MBM7FZ-8c44fa13e6b7-48",
        about: "The speaker",
        git: "https://github.com/Adamcglee",
        linkedin: "https://www.linkedin.com/in/adamcglee/"
    },
    {
        name: "AD",
        picture: "https://ca.slack-edge.com/T4JUEB3ME-U90KKDADV-cdc4cecf0d75-48",
        about: "Jojo's daddy",
        git: "https://github.com/adfaris",
        linkedin: "https://www.linkedin.com/in/ad-faris/"
    },
    {
        name: "Das",
        picture: "https://ca.slack-edge.com/T4JUEB3ME-UB0E286A2-83f59c1735d0-48",
        about: "Keeping the company",
        git: "https://github.com/DasGMA",
        linkedin: "https://www.linkedin.com/in/dasgrigoma/"
    },
    {
        name: "Francis",
        picture: "https://ca.slack-edge.com/T4JUEB3ME-UAY9JQZGQ-92c0dc2a73c1-48",
        about: "Connecting the dots",
        git: "https://github.com/francistse23",
        linkedin: "http://www.linkedin.com/in/francis-tse"
    }
]


const TeamCard = (props) => {
    return (
        <div className = 'col-sm cards'>
            <div className = 'row px-3 py-3 justify-content-center'>
                <img className = 'rounded-circle' src = {props.image} alt="Team Member Portrait"/>
            </div>
            <div className = 'row px-3 justify-content-center'>
                <h1 style={{paddingTop: '0'}}>{props.name}</h1>
            </div>
            <div className = 'row px-3 justify-content-center'>
                <p>{props.about}</p>
            </div>
            <div className = 'row px-3 pb-3 justify-content-center'>
                <div className = 'col-6' style = {{textAlign: 'right'}}>
                    <a href={props.git}><i className="fab fa-github-square fa-2x" style = {{color: 'rgb(234, 198, 122)'}}></i></a>
                </div>
                <div className = 'col-6' style = {{textAlign: 'left'}}>
                    <a href={props.linkedin} ><i className="fab fa-linkedin fa-2x" style={{color: 'rgb(234, 198, 122)'}}></i></a>
                </div>
            </div>
        </div>
    )
}

const renderTeam = theTeam.map((member, index) => {
                return (
                    <TeamCard 
                        key = {index}
                        image = {member.picture}
                        name = {member.name}
                        about = {member.about}
                        git = {member.git}
                        linkedin = {member.linkedin}
                    />
                )
            })


const AboutUs = () => {     
    return (
        <div className = 'container-fluid' style={{position: 'relative', top: '8rem', width: '100%', maxWidth: '1200px', marginBottom: '8rem'}}>
        <h1 style={{ color: "#984b43", margin: "1rem auto 1rem auto", fontFamily:'Merriweather Sans' }}> The Team </h1>
            <div className = 'row'>
                <div className = 'col-sm' style = {{ background: 'rgb(35, 50, 55)', border: '1px solid rgb(234, 198, 122)', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}>
                    <div className = 'row px-3 py-3 justify-content-center'>
                        <img className = 'rounded-circle' src = "https://ca.slack-edge.com/T4JUEB3ME-U9HG9M5HU-g05eb672c204-48" alt="Chief Keith"/>
                    </div>
                    <div className = 'row px-3 justify-content-center' style={{color: "rgb(234, 198, 122)"}}>
                        <h1 style={{paddingTop: '0'}}>Keith</h1>
                    </div>
                    <div className = 'row px-3 justify-content-center' style={{color: "rgb(234, 198, 122)"}}>
                        <p>The Chief</p>
                    </div>
                    <div className = 'row px-3 pb-3 justify-content-center'>
                        <div className = 'col-6' style = {{textAlign: 'right'}}>
                            <a href="https://github.com/kkhaag"><i className="fab fa-github-square fa-2x" style = {{color: 'rgb(234, 198, 122)'}}></i></a>
                        </div>
                        <div className = 'col-6' style = {{textAlign: 'left'}}>
                            <a href="https://www.linkedin.com/in/k-haag/" ><i className="fab fa-linkedin fa-2x" style={{color: 'rgb(234, 198, 122)'}}></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className = 'row'>
            {renderTeam}
            </div>
        </div>
    )
}

export default AboutUs;