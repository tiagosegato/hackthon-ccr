import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SpeedIcon from '@material-ui/icons/Speed';
import { Col } from 'reactstrap';
import './Style.css';

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Col className="nav-bar">
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction className="btn-blue" label="Cabine mais próxima" icon={<LocationOnIcon />} />
      <BottomNavigationAction className="btn-blue" label="Cabine mais rapida" icon={<SpeedIcon />} />
      <BottomNavigationAction className="btn-blue" label="Agendar Consulta" icon={<CalendarTodayIcon />} />
    </BottomNavigation>
    </Col>
  );
}















// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import './Style.css';

// const useStyles = makeStyles({
//   root: {
//     width: 500,
//   },
// });

// const classes = useStyles();
// const [value, setValue] = React.useState(0);

// const Nav: React.FC = () => (
//   <div className="nav-bar">
//        <BottomNavigation
//       value={value}
//       onChange={(event, newValue) => {
//         setValue(newValue);
//       }}
//       showLabels
//       className={classes.root}
//     >
//       <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
//       <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
//       <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
//     </BottomNavigation>
//   </div>
// );

// export default Nav;