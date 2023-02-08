import React from 'react'
import './Main.css';
import { App } from './App';
import FiveDays from './FiveDays';
import {BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import rain from "./utils/images/rain.png";
const axios = require('axios');

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ade8f4",
    opacity: "0.97"
  },
  paper: {
    borderRadius: "15px",
    outline: "none",
    boxShadow: theme.shadows[50],
    padding: theme.spacing(2, 4, 3),
    width: "80vw",
    color: "grey",
    fontFamily: "Montserrat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }


}));

function Main() {

  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather((position.coords.latitude), (position.coords.longitude));
    });
  }, []);
  const getWeather = async (latitude, longitude) => {
    try {
      handleOpen();
      let res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=ca6fcaf9b62447dba232bb3932f6c549&units=metric`)
      setCurrentData(res.data);
      handleClose();
    } catch (error) {
      alert("Something went wrong...")
      handleClose();
    }

  }

  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState();
  let apiKey = "ca6fcaf9b62447dba232bb3932f6c549";

  const fetchWeather = async () => {
      handleOpen();
      let res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
      setWeather(res.data);
      handleClose();
   
  }

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          // onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <img className="loaderCloud" src={rain} alt="image"></img>
            </div>
          </Fade>
        </Modal>
      </div>

      <Router>
        <Switch>
          <Route exact path="/">
            <App currentData={currentData} city={city} weather={weather} setCity={setCity} fetchWeather={fetchWeather} />
          </Route>
          <Route exact path="/fivedays">
            <FiveDays currentData={currentData} city={city} weather={weather} setCity={setCity} fetchWeather={fetchWeather} />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default Main
