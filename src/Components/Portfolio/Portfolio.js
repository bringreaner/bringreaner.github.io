import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Card, CardActions, CardContent, CardMedia, Button, Grid} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';

const styles = {
  card: {
    maxWidth: 345,
    margin: "30px",
    height: "400px",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const cardStyle = {
    height:"100px",
    padding: "30px",
}

function Portfolio(props) {
  const { classes } = props;
  return (
    <div>
    <Grid container spacing={24} alignContent='space-around' justify='center'>
        <Grid item md={4}>

        {/* Plant Tracker */}
            <Card className={classes.card}>
                <a href="https://plant-tracker-app.herokuapp.com/"><CardMedia
                className={classes.media}
                style={cardStyle}
                image={require("../../imgs/plantTracker.PNG")}
                title="App to take care of plants" /></a>
                <CardContent>
                <Typography gutterBottom variant="headline" component="h2" style={{textAlign:"center"}}>
                    Plant Tracker
                </Typography>
                <Typography component="p">
                    A full stack application utilizing React, MySQL, and JavaScript to effectively track a user's indoor and outdoor plants. I focused on React and Materialize for this team project.
                </Typography>
                </CardContent>
                <CardActions style={{justifyContent:"center"}}>
                    <a href="https://github.com/casmith205/Plant-Tracker" style={{color: "#00344d",}}><FontAwesomeIcon icon={faGithub} size="4x" style={{textAlign:"center"}} /></a>          
                    <Button size="large" color="secondary" variant="contained" href="https://plant-tracker-app.herokuapp.com/">
                        Track your plants
                    </Button>
                </CardActions>
            </Card>
            </Grid>

        {/* Troll's Toll */}
            <Grid item md={4}>
            <Card className={classes.card}>
                <a href="https://evening-plains-48878.herokuapp.com/"><CardMedia
                className={classes.media}
                style={cardStyle}
                image={require("../../imgs/trollToll.PNG")}
                title="The Troll's Toll Game" /></a>
                <CardContent>
                <Typography gutterBottom variant="headline" component="h2" style={{textAlign:"center"}}>
                    The Troll's Toll
                </Typography>
                <Typography component="p">
                    A full stack, choose-your-own-adventure, browser-based text game. I worked as head writer and full stack developer on this team project.
                </Typography>
                </CardContent>
                <CardActions style={{justifyContent:"center"}}>
                    <a href="https://github.com/TeamMongai/MongaiProject" style={{color: "#00344d",}}><FontAwesomeIcon icon={faGithub} size="4x" style={{textAlign:"center"}} /></a>          
                    <Button size="large" color="secondary" variant="contained" href="https://evening-plains-48878.herokuapp.com/">
                        Try the game
                    </Button>
                </CardActions>
            </Card>
            </Grid>

        {/* Bamazon */}
            <Grid item md={4}>
            <Card className={classes.card}>
                <a href="https://drive.google.com/file/d/15pNx9uuvjpwiSg6TIQxXoHb_I5RFWMSg/view"><CardMedia
                className={classes.media}
                style={cardStyle}
                image={require("../../imgs/bamazon.PNG")}
                title="Bamazon" /></a>
                <CardContent>
                <Typography gutterBottom variant="headline" component="h2" style={{textAlign:"center"}}>
                    Bamazon
                </Typography>
                <Typography component="p">
                    An interactive application using MySQL and NodeJS, this solo project lets a user see what is located in the database and how much it costs, then allows them to “purchase” an item.

                </Typography>
                </CardContent>
                <CardActions style={{justifyContent:"center"}}>
                    <a href="https://github.com/bringreaner/bamazon" style={{color: "#00344d",}}><FontAwesomeIcon icon={faGithub} size="4x" style={{textAlign:"center"}} /></a>          
                    <Button size="large" color="secondary" variant="contained" href="https://drive.google.com/file/d/15pNx9uuvjpwiSg6TIQxXoHb_I5RFWMSg/view">
                        View video demo
                    </Button>
                </CardActions>
            </Card>
            </Grid>

        </Grid>

{/* 2nd line
---------------------------------------------- */}
        
        {/* Works in progress */}
            <Grid item style={{justifyContent: "center"}}>
                <Card className={classes.card}>
                    {/* <a href="https://drive.google.com/file/d/15pNx9uuvjpwiSg6TIQxXoHb_I5RFWMSg/view"> */}
                    <CardMedia
                    className={classes.media}
                    style={cardStyle}
                    image={require("../../imgs/esalt.PNG")}
                    title="list of works in progress" />
                    {/* </a> */}
                    <CardContent style={{borderTop: "solid"}}>
                    <Typography gutterBottom variant="headline" component="h2" style={{textAlign:"center"}}>
                        Works in Progress
                    </Typography>
                    <Typography component="p">
                        <ul>
                            <li>Website for author Elivia Salt (preview pictured)</li>
                            <li>Radical Kanji - a full stack application for reviewing and learning Japanese characters</li>
                            <li>News Scraper - a full stack application for scraping a news website and storing headlines in a database</li>
                        </ul>
                    </Typography>
                    </CardContent>
                    {/* <CardActions style={{justifyContent:"center"}}>
                        <a href="https://github.com/bringreaner/bamazon" style={{color: "#00344d",}}><FontAwesomeIcon icon={faGithub} size="4x" style={{textAlign:"center"}} /></a>          
                        <Button size="large" color="secondary" variant="contained" href="https://drive.google.com/file/d/15pNx9uuvjpwiSg6TIQxXoHb_I5RFWMSg/view">
                            View video demo
                        </Button>
                    </CardActions> */}
                </Card>
            </Grid>

    </div>
  );
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portfolio);