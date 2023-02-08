import './App.css';
import CityName from './utils/CityName';
import TempDetails from './utils/TempDetails';
import TopHeader from './utils/TopHeader';
import Wind from './utils/Wind';
import Forecast from './utils/Forecast';
import Alert from './utils/Alert';
import { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import rain from "./utils/images/rain.png";
 


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


function App(props) {
  const { fetchWeather, city, setCity, weather, currentData } = props;

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (currentData !== null) {
    return (
      <div className="App">
         <div className="components">
            <TopHeader fetchWeather={fetchWeather} city={city} setCity={setCity} />
            <CityName weather={weather} currentData={currentData} />
            <TempDetails weather={weather} currentData={currentData} />
            <Wind weather={weather} currentData={currentData} />
            <Forecast weather={weather} currentData={currentData} />
            <Alert weather={weather} currentData={currentData} />
        </div>
           
      </div>
    );
  } else {
    return (
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
              <img className="loaderCloud" src={rain}></img>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }

}
export { App };
