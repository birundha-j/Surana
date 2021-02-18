import React from 'react';
// import Inputs from './component/Inputs/emptyinputs'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import Grid from '@material-ui/core/Grid';
import { Layout, Input, DatePicker, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import InfoIcon from '@material-ui/icons/Info';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import { Select, Row, Col } from 'antd'
import { DownCircleTwoTone } from '@ant-design/icons'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// input icons:
import SelectionIcon from './images/selectIcon.png'
// Router:
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ResumePage from './component/ResumePage/Resume'
import Dashboard from './component/DashBoard/dashboard'



const { Option } = Select
const { Search } = Input;


const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: 64,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,

  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#420F8D',

  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#E4E4E4',
    height: '700',
  },
}));
// date funtion:

function onChange(date, dateString) {
  console.log(date, dateString);
}


export default function ClippedDrawer() {
  const classes = useStyles();
  const onSearch = value => console.log(value);


  return (
    <div className={`navbarContainer ${classes.root}`}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Grid spacing={2} item xs={12} container direction="row" justify="center" alignItems="center" display="flex" >
          <Grid item xs={4} container justify="left" alignItems="center" className="Header_Title" >
            surana
        </Grid>

          <Grid item xs={5} container alignItems="center" className="customSearch_Header">
            <Space direction="vertical" style={{ width: "70%" }}>
              <Search placeholder="Search..." onSearch={onSearch} />
            </Space>
          </Grid>

          <Grid item xs={3} alignItems="center" className="userInfo" >
            <InfoIcon className="customIcon_header" />
            <NotificationsIcon className="customIcon_header" />
            <SettingsIcon className="customIcon_header" />
            <SupervisedUserCircleIcon className="customIcon_header" />
            <div >
              <div className="userName">Jhone Wick</div>
              <div className="userPosition">HOD</div>
            </div>
            <ArrowDropDownCircleIcon className="customIconArrow_header" />
          </Grid>

        </Grid>
      </AppBar>
      <Drawer className={classes.drawer} variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }} >
        <Toolbar />
        <div className={classes.drawerContainer}>

          <Grid className="Logostructure">
            <div className="LogoDesign">Logo</div>
          </Grid>
          <a href={'/'}>
            <div className="ResumeSider">
              <AccountBoxIcon style={{ color: "white" }} className="customIcon_header" />
              <div className="SiderResume_Button">RESUME</div>

            </div>
          </a>
          <a href={'/dashboard'}>
            <div className="ResumeSider">
              <NotificationsIcon style={{ color: "pink" }} className="customIcon_header" />
              <div className="SiderResume_Button">  DASHBOARD</div>

            </div>
          </a>

          
          {/* <List>

            <ListItem button key={"Resume"}  >
              <ListItemIcon><NotificationsIcon style={{ color: "white" }} /></ListItemIcon>
              <ListItemText primary={"Resume"} />
            </ListItem>

          </List> */}
        </div>
      </Drawer>
      <main className={` MasterContainer ${classes.content}`}>
        <Toolbar />
        <div>
          <Router >
            <Switch>
              <Route exact path='/' component={ResumePage} />
              <Route path='/dashboard' component={Dashboard} />

              {/* <Route path='/logout' component={Logout} /> */}
            </Switch>
          </Router>
        </div>


      </main>
    </div>
  );
}
