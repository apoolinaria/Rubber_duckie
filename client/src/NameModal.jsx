import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #ffc700',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function NameModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  let name = '';
  const handleClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    name = e.target.value;
  };
  const onClick = () => {
    props.submit(name);
    handleClose();
  };
  return (
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
            <h2 id="transition-modal-title">QUAK!</h2>
            <p id="transition-modal-description">
              What should I call the function / object / thing that is
              misbehaving?
            </p>
            <input className="input-filed" onChange={onChange} />
            <button className="button-more" onClick={onClick}>
              Submit
            </button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
