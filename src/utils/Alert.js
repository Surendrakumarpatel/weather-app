import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { useEffect } from 'react';

function Alert(props) {

    const { weather, currentData } = props;
    let searchableCloudsId = weather?.list[0]?.weather[0]?.id;
    let currentCloudsId = currentData?.list[0]?.weather[0]?.id;

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        if (searchableCloudsId === undefined) {
            if (currentCloudsId === 500 || currentCloudsId === 501) {
                setTimeout(() => {
                    handleClickOpen();

                }, 4000);
            }
        } else {
            if (searchableCloudsId === 500 || searchableCloudsId === 501) {
                setTimeout(() => {
                    handleClickOpen();

                }, 4000);
            }
        }

    }, []);
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle style={{color:"black"}} id="alert-dialog-title">{"Don't be oversmart take your Umbrella ☂"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <ul>
                            <li>Keep umbrella and raincoat handy.</li>
                            <li>Make sure your windows are shut properly.</li>
                            <li>Drive slowly and carefully.</li>
                            <li>Don't touch electric wires.</li>
                        </ul>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Alert
