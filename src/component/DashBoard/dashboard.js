import react from 'react'
import './dashboard.css'
import Grid from '@material-ui/core/Grid';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Progress } from 'antd';
import StarIcon from '@material-ui/icons/Star';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


function DashBoardPage() {
    return (
        <div>
            <div>Task</div>
            <div className="TaskBox">
                <div className="Task_Count_time">
                    <div className="Task_counter">1</div>
                    <AccessTimeIcon className="TaskTimer_Icon" style={{ width: "80%", color: "white", paddingTop: "15%", paddingLeft: "13%", height: "40px" }} />
                </div>
                <div className="MiddleContent">
                    <Grid className="Task_Details">
                        <Grid className="MainTask_Details">Task Details and other Details</Grid>
                        <Grid item xs={12} container direction="column" justify="left" alignItems="left">
                            <Grid className="SubTask_Details">Task Details and other Details</Grid>
                            <Grid><Progress percent={90} strokeColor="purple" style={{ display: "flex", paddingTop: "20px", paddingBottom: "5px" }} showInfo={{ color: "blue" }} /></Grid>
                        </Grid>
                    </Grid>
                    <div className="Task_Progress"></div>
                    <Grid className="Task_Date_Details">
                        <Grid item xs={12} container direction="row" justify="center" alignItems="center" >
                            <Grid item xs={6} className="Task_startDate">
                                <div>Start Date :</div>
                                <div>11 - Jan - 2020</div>
                            </Grid>
                            <Grid item xs={6} className="Task_startDate">
                                <div>End Date :</div>
                                <div>11 - Jan - 2020</div>
                            </Grid>

                        </Grid>
                        <Grid item xs={12} container direction="row" justify="left" alignItems="center" >
                           <div className="Task_Date_Link"> Assignd By   <a href={'/'}>Charon Winston</a> On <a href={'/'}>11 Jan 2020</a></div>

                        </Grid>
                        

                    </Grid>
                    <div className="Task_Progress"></div>
                    <Grid  className="TotalTask_Hours">
                        <div className="ViewTotalHours">
                            <div className="Task_hoursView">Total Hours</div>
                            <div className="Hours_View">12</div>
                        </div>

                    </Grid>

                </div>
                <div className="Task_StarRate">
                    <div className="Task_counter"><StarIcon style={{color:"white"}}/></div>
                    <CheckBoxIcon className="TaskTimer_Icon" style={{ width: "80%", color: "white", paddingTop: "15%", paddingLeft: "13%", height: "40px" }} />
                </div>



            </div>

        </div>
        
    )
}
export default DashBoardPage;