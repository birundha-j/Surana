import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import './App.css';
import Grid from '@material-ui/core/Grid';
import { Layout, Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import InfoIcon from '@material-ui/icons/Info';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import { Select } from 'antd'
import { DownCircleTwoTone } from '@ant-design/icons'

const { Option } = Select
const { Search } = Input;


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: 64,
    display: 'flex',
    alignItems: 'center',
    backgroundColor :'white',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#420F8D',

  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor:'#E4E4E4',
    // height:'700'
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const onSearch = value => console.log(value);


  return (
    <div className={`navbarContainer ${classes.root}`}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Grid spacing={2} item xs={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
          display="flex"
        >
          <Grid item xs={4} container justify="left" alignItems="center" className="Header_Title" >
            surana
        </Grid>
          <Grid item xs={5} container  alignItems="center" className="customSearch_Header">
            <Space direction="vertical" style={{width:"70%"}}>
              <Search placeholder="Search..." onSearch={onSearch} />
            </Space>
          </Grid>
          <Grid item xs={3} alignItems="center"  className="userInfo" >
            <InfoIcon className="customIcon_header" />
            <NotificationsIcon className="customIcon_header" />
            <SettingsIcon className="customIcon_header" />
            {/* </Grid>
            <Grid item xs={2} container justify="space-around"> */}
            <SupervisedUserCircleIcon className="customIcon_header" />
            <div >
              <div className="userName">Jhone Wick</div>
              <div className="userPosition">HOD</div>
            </div>
            <ArrowDropDownCircleIcon className="customIconArrow_header"/>
          </Grid>
        </Grid>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          well
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <div className="Container"></div>


      </main>
    </div>
  );
}
