import React from 'react'
import './TopHeader.css';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        // border: '1px solid #000',
        borderRadius:"15px",
        outline:"none",
        boxShadow: theme.shadows[500],
        padding: theme.spacing(2, 4, 3),
        width:"80vw",
        color:"grey",
        fontFamily:"Montserrat",
    }
     
}));

function TopHeader(props) {
    const { fetchWeather, city, setCity } = props;
    const animationHandler = () => {
        let searchBtn = document.querySelector(".searchBtn");
        let search = document.querySelector(".searchBox");
        let searchInput = document.querySelector("input");
        let infoBtn = document.querySelector("#cancelBtn");
        search.classList.toggle('active');
        searchInput.classList.toggle('inactive');
        searchBtn.classList.toggle('active');
        infoBtn.classList.add('hide');
    }

    const gettingCity = (e) => {
        setCity(e.target.value);
    }
    const gettingEnter = (e) => {
        if (e.key === "Enter") {
            fetchWeather();
        }
    }

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="topHeader">
            <div className="searchBox">
                <input type="text" placeholder="Search by city, pincode" onChange={gettingCity} onKeyPress={gettingEnter} />
                <div className="searchBtn" onClick={animationHandler}>
                    <SearchIcon />
                </div>
            </div>
            <div className="myLogo" >
                <button disabled={!city || !city.trim()} onClick={fetchWeather} ><SendIcon className="sendIcon" /></button>
            </div>
            <div id="cancelBtn" onClick={handleOpen}>
                <InfoIcon className="infoIcon" />
            </div>
            <div>
                 
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <h2 style={{color:"black"}}>More Information:</h2>
                            <ul style={{padding:"10px 0"}}>
                                <li style={{padding:"5px",lineHeight:"1.3rem"}}>The wind speed, pressure and percentage of humidity shown are according to the current time, while the chance of rain is determined for the day.</li>
                                <li style={{padding:"5px",lineHeight:"1.3rem"}}>The weather details for Allahabad, India or any other place is determined using the 5day/3hour forecast API provided by OpenWeatherMap.org.</li>
                                <li style={{padding:"5px",lineHeight:"1.3rem"}}>Your current location is dedected by geolocation.</li>
                            </ul>
                            <h4 style={{color:"black",textAlign:"center"}}>Designed and Developed by <Link style={{color:"#5c93f3"}} to='/https://github.com/Surendrakumarpatel'>Surendra Kumar Patel</Link></h4>
                        </div>
                    </Fade>
                </Modal>
            </div>
        </div>
    )
}

export default TopHeader
