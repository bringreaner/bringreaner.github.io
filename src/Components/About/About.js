import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import TextLoop from 'react-text-loop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';

const cardStyles = {
    backgroundColor: "#e6f7ff",
    color: "005780",
    margin: "200px",
    marginTop: "100px",
    padding: "10px",
    border: "solid #006999"
}

const headingStyle = {
    textAlign: "center"
}

export const About = () => (
    <div> 
        <Paper style={cardStyles}>
            <h1 style={headingStyle}>About me</h1>
            <Grid container spacing={24}>
                <Grid item md={3}>
                    <img src={require("../../imgs/me.JPG")} style={{height:"300px", border:"solid #006999"}} alt="Picture of me playing the sanshin" />
                </Grid>
                <Grid item md={9}>
                    <p>Hello world! こんにちは、世界！ I'm a recent graduate of the University of Minnesota's Full Stack Web Development program. In the program I learned JavaScript, MySQL, RESTful APIs, MVC frameworks, GIT, Node.js, React.js, Express, jQuery, Github, MongoDB, Firebase, HTML, CSS, Bootstrap, Materialize, Media Queries, JSON, AJAX, the command line, and computer science fundamentals.</p>
                    <p>My learning did not stop there, however. I have continued to code every day since! I've found I really enjoy the unique mixture of working with both UI/UX and logic of React, but I love the experimentation and try/fail cycle of working with any language or aspect of coding. That 'Aha!' moment of triumph cannot be beat.</p>
                    <hr />
                    <p>I also hold a Bachelor's Degree in English from the University of Wisconsin: Eau Claire, have received a Gold Volunteer Service Award from the President of the United States for a year as an Americorps VISTA, and passed the N2 level of the Japanese Language Proficiency Test.</p>
                    <p>My hobbies include <TextLoop speed={3000}>
                        <span> playing the ukulele</span>
                        <span> playing the Okinawan sanshin (pictured)</span>
                        <span> writing</span>
                        <span> drawing</span>
                        <span> traveling</span>
                        <span> reading</span>
                        <span> taking pictures</span>
                        <span> studying Japanese (日本語)</span>
                    </TextLoop> and having too much fun with React animations.</p>
                    <br />
                    <p>Contact me:&nbsp;&nbsp;<a href="https://github.com/bringreaner" style={{color: "#00344d",}} target="blank" ><FontAwesomeIcon icon={faGithub} size="4x" style={{textAlign:"center"}} /></a>&emsp;
                    <a href="https://www.linkedin.com/in/brittany-greaner/" style={{color: "#00344d",}} target="blank"><FontAwesomeIcon icon={faLinkedin} size="4x" style={{textAlign:"center"}} /></a> </p> 
                </Grid>
            </Grid>
        </Paper>
    </div>
)