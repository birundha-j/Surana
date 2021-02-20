import react from 'react'
import './notification.css'


function NotificationPage() {
    return (
        <div>
            <div className="notification_Header">Tasks</div>
            <div className="Tasks_Table">
                <table className="TableView">
                    {/* <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th> */}
                    <tr className="Table_Header">
                        <td>Task Id</td>
                        <td>Activity</td>
                        <td>Sub Activity</td>
                        <td>Case</td>
                        <td>Start Date</td>
                        <td>End Date</td>

                    </tr>
                    <tr className="TableDate">
                        <td>Task Id</td>
                        <td>Activity1</td>
                        <td>Sub Activity 1</td>
                        <td>Case 1</td>
                        <td>11-Jan-2020</td>
                        <td>12-Jan-2020</td>

                    </tr>
                    <tr className="TableDate">
                        <td>Task Id</td>
                        <td>Activity1</td>
                        <td>Sub Activity 1</td>
                        <td>Case 1</td>
                        <td>11-Jan-2020</td>
                        <td>12-Jan-2020</td>

                    </tr>
                    <tr className="TableDate">
                        <td>Task Id</td>
                        <td>Activity1</td>
                        <td>Sub Activity 1</td>
                        <td>Case 1</td>
                        <td>11-Jan-2020</td>
                        <td>12-Jan-2020</td>

                    </tr>
                </table>

            </div>
            <div className="notification_Header">Work Flow</div>
            <div className="Tasks_TableView">
                <table className="TableView">
                    {/* <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th> */}
                    <tr className="Table_Header">
                        <td>Task Id</td>
                        <td>Activity</td>
                        <td>Sub Activity</td>
                        <td>Case</td>
                        <td>Start Date</td>
                        <td>End Date</td>

                    </tr>
                    <tr className="TableDate">
                        <td>Task Id</td>
                        <td>Activity1</td>
                        <td>Sub Activity 1</td>
                        <td>Case 1</td>
                        <td>11-Jan-2020</td>
                        <td>12-Jan-2020</td>

                    </tr>
                    <tr className="TableDate">
                        <td>Task Id</td>
                        <td>Activity1</td>
                        <td>Sub Activity 1</td>
                        <td>Case 1</td>
                        <td>11-Jan-2020</td>
                        <td>12-Jan-2020</td>

                    </tr>
                    <tr className="TableDate">
                        <td>Task Id</td>
                        <td>Activity1</td>
                        <td>Sub Activity 1</td>
                        <td>Case 1</td>
                        <td>11-Jan-2020</td>
                        <td>12-Jan-2020</td>

                    </tr>
                </table>

            </div>

        </div>
    )
}
export default NotificationPage;