import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AvatarImg from '../img/avatar.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div style={{position: 'absolute', top: "-63px", backgroundColor: 'white', borderRadius: '70px'}} className={classes.root}>
      <Avatar alt="Remy Sharp" src={AvatarImg} className={classes.large} />
    </div>
  );
}
