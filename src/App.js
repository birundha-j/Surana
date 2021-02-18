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

// input icons:
import SelectionIcon from './images/selectIcon.png'
import CalenderIcon from './images/calendericon.png'


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

          <div className="ResumeSider">
            <AccountBoxIcon style={{ color: "white" }} className="customIcon_header" />
            <div className="SiderResume_Button">RESUME</div>

          </div>
        </div>
      </Drawer>
      <main className={` MasterContainer ${classes.content}`}>
        <Toolbar />
        <div className="Container">
          <Grid item xs={12} className="ContentTitle">
            Add Resume

          </Grid>
          <div className="master_container">
            <div className="Left_Container">
              <Grid container direction="column" spacing={1}>
                <Grid item xs={8} container alignItems="center" className="ContainerInput">
                  <Input placeholder="User Id(Auto Generated)" />
                </Grid>

                <Grid item xs={8} container alignItems="center" className="ContainerInput" >
                  <Input placeholder="Name   " />
                </Grid>

                <Grid item xs={6} className="SelectOption">
                  <Select suffixIcon={<img src={SelectionIcon} className="SelectInput_svg" />}
                    showSearch placeholder="Type of Candidate" optionFilterProp="children" filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className="SelectionInput"
                    style={{ width: "70%" }} >
                    
                  </Select>
                </Grid>

                <Grid item xs={6} className="SelectOption">
                  <Select suffixIcon={<img src={SelectionIcon} className="SelectInput_svg" />} showSearch placeholder="Gender" optionFilterProp="children" filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                    className="SelectionInput" style={{ width: "50%" }} >
                    
                  </Select>
                </Grid>


                <Grid item xs={6} className="DatepickerInput">
                  <DatePicker suffixIcon={<img src={CalenderIcon} className="DateInput_svg" />} onChange={onChange} placeholder="Date of Birth" style={{ width: 185 }} className="DatePicker_View" />

                </Grid>


                <Grid item xs={6} className="SelectOption">
                  <Select suffixIcon={<img src={SelectionIcon} className="SelectInput_svg" />} showSearch placeholder="Basic Qualification"
                    optionFilterProp="children" filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    } className="SelectionInput" style={{ width: "70%" }} >
                    
                  </Select>
                </Grid>

                <Grid item xs={6} className="SelectOption">
                  <Select suffixIcon={<img src={SelectionIcon} className="SelectInput_svg" />} showSearch
                    placeholder="Additional Qualification 1" optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className="SelectionInput" style={{ width: "70%" }} >
                    
                  </Select>
                </Grid>

                <Grid item xs={6} className="SelectOption">
                  <Select suffixIcon={<img src={SelectionIcon} className="SelectInput_svg" />} showSearch placeholder="Additional Qualification 2" optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className="SelectionInput" style={{ width: "70%" }}  >
                    
                  </Select>
                </Grid>

                <Grid item xs={6} className="SelectOption">
                  <Select suffixIcon={<img src={SelectionIcon} className="SelectInput_svg" />} showSearch
                    placeholder="Institution" optionFilterProp="children" filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className="SelectionInput" style={{ width: "70%" }} >
                    
                  </Select>
                </Grid>

                <Grid item xs={8}
                  container alignItems="center" className="ContainerInput">
                  <Input placeholder="Last Employer" />

                </Grid>

                <Grid item xs={6} className="DatepickerInput">
                  <DatePicker suffixIcon={<img src={CalenderIcon} className="DateInput_svg" />} onChange={onChange} placeholder="start Date" style={{ width: 185 }} className="DatePicker_View" />

                </Grid>

                <Grid item xs={6} className="DatepickerInput">
                  <DatePicker suffixIcon={<img src={CalenderIcon} className="DateInput_svg" />} onChange={onChange} placeholder="End Date" style={{ width: 185 }} className="DatePicker_View" />

                </Grid>

                <Grid item xs={8}
                  container alignItems="center" className="ContainerInput">
                  <Input placeholder="Reference Email 1" />

                </Grid>

                <Grid item xs={8}
                  container alignItems="center" className="ContainerInput">
                  <Input placeholder="Reference Email 2" />

                </Grid>

                <Grid item xs={6}
                  container alignItems="center" className="ContainerInput">
                  <Input placeholder="Reference Phone 1" />

                </Grid>

                <Grid item xs={6}
                  container alignItems="center" className="ContainerInput">
                  <Input placeholder="Reference Phone 2" />

                </Grid>

              </Grid>
            </div>
            <div className="Right_Container">
              <Grid container direction="column" justify="center" spacing={1}>
                <Grid item xs={12} className="SelectOption">
                  <Select suffixIcon={<img src={SelectionIcon} className="SelectInput_svg" />} showSearch
                    placeholder="Skils" optionFilterProp="children" filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className="SelectionInput" style={{ width: "70%" }}  >
                    
                  </Select>
                </Grid>

                <Grid item xs={12} className="SelectOption">
                  <Select suffixIcon={<img src={SelectionIcon} className="SelectInput_svg" />}
                    showSearch placeholder="Traits" optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className="SelectionInput" style={{ width: "70%" }}  >
                    
                  </Select>
                </Grid>

                <Grid item xs={12} className="SelectOption">
                  <Select suffixIcon={<img src={SelectionIcon} className="SelectInput_svg" />} showSearch
                    placeholder="Certification" optionFilterProp="children" filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className="SelectionInput" style={{ width: "70%" }} >
                   
                  </Select>
                </Grid>

                <Grid item xs={12} className="SelectOption">
                  <Select suffixIcon={<img src={SelectionIcon} className="SelectInput_svg" />} showSearch placeholder="Specializations"
                    optionFilterProp="children" filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className="SelectionInput" style={{ width: "70%" }} >
                    
                  </Select>
                </Grid>

                <Grid item xs={12} className="SelectOption">
                  <Select
                    suffixIcon={<img src={SelectionIcon} className="SelectInput_svg" />} showSearch placeholder="Talents" optionFilterProp="children" filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className="SelectionInput" style={{ width: "70%" }} >
                    
                  </Select>
                </Grid>

                <Grid item xs={12} className="SelectOption">
                  <Select
                    suffixIcon={<img src={SelectionIcon} className="SelectInput_svg" />} showSearch placeholder="Special Intrests" optionFilterProp="children" filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className="SelectionInput" style={{ width: "70%" }} >
                    
                  </Select>
                </Grid>

                <Grid item xs={5} container alignItems="center" className="ContainerInput">
                  <Input placeholder="Contact Phone " style={{ width: "200%" }} />
                </Grid>

                <Grid item xs={8} container alignItems="center" className="ContainerInput">
                  <Input placeholder="Email Id " />
                </Grid>


                <Grid item xs={8} container alignItems="center" className="ContainerInput">
                  <Input placeholder="Mail Address " />
                </Grid>

                <Grid item xs={12} className="SelectOption">
                  <Select
                    suffixIcon={<img src={SelectionIcon} className="SelectInput_svg" />} showSearch placeholder="State of Domecile" optionFilterProp="children" filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className="SelectionInput" style={{ width: "70%" }} >
                    
                  </Select>
                </Grid>

                <Grid item xs={12} className="SelectOption">
                  <Select
                    suffixIcon={<img src={SelectionIcon} className="SelectInput_svg" />} showSearch placeholder="City" optionFilterProp="children" filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className="SelectionInput" style={{ width: "70%" }} >
                    
                  </Select>
                </Grid>

                <Grid item xs={12} className="SelectOption">
                  <Select
                    suffixIcon={<img src={SelectionIcon} className="SelectInput_svg" />} showSearch placeholder="Languages Known" optionFilterProp="children" filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className="SelectionInput" style={{ width: "70%" }} >
                   
                  </Select>
                </Grid>

                <Grid item xs={12} className="SelectOption">
                  <Select
                    suffixIcon={<img src={SelectionIcon} className="SelectInput_svg" />} showSearch placeholder="Industry" optionFilterProp="children" filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className="SelectionInput" style={{ width: "70%" }} >
                    
                  </Select>
                </Grid>
                <Grid item xs={8} container direction="row" justify="space-around" alignItems="flex-start" className="Final_buttons" >
                  <div className="SaveButton"> Save</div>
                  <div className="CancelButton"> Cancel</div>

                </Grid>

              </Grid>
            </div>

          </div>
        </div>


      </main>
    </div>
  );
}
