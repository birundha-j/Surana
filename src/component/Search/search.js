import react,{useState} from 'react'
import './search.css'
import Tabless from '../TableFormat/table'
import NewTable from '../AntdTable/antdtable'
import SearchIcon from '@material-ui/icons/Search';
import {  Grid } from '@material-ui/core';
import { Input, Space, Select,Modal, Button,DatePicker  } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import SelectionIcon from '../../images/selectIcon.png'
import { DownCircleTwoTone } from '@ant-design/icons'
import Checkbox from '@material-ui/core/Checkbox';
import { usePagination } from '@material-ui/lab/Pagination'
import Pagination from '@material-ui/lab/Pagination';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import CalenderIcon from '../../images/calendericon.png'


const { Option } = Select;



const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 18,
            color: 'purple',
        }}
    />
)

function onChange(date, dateString) {
    console.log(date, dateString);
  }




function SearchPage() {
    const onSearch = value => console.log(value);
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
  //interview details Model:
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


    return (
        <div>
            <Grid spacing={2} item xs={12} container direction="row" justify="left" alignItems="left" display="flex">
                <Grid item xs={4} container justify="left" alignItems="left" display="flex" >
                    <div className="Search_Title">Search...</div>
                    <SearchIcon style={{ color: "purple", fontSize: "25px" }} />
                </Grid>
                <Grid item xs={8} container justify="left" alignItems="left" display="flex" className="SearchPage_View">
                    <Space direction="vertical" style={{ width: "50%" }} >
                        <Search onSearch={onSearch} />

                    </Space>

                </Grid>
            </Grid>
            <Grid className="SearchInputFields" spacing={2} item xs={12} container direction="column
" >
                <Grid spacing={1} item xs={12} container direction="row" justify="space-around" display="flex" >
                    <Grid item xs={3} container direction="row" justify="center" alignItems="right" display="flex">
                        <Grid item xs={4} container direction="row" justify="center" className="Fields_Title">Skills</Grid>
                        <Grid item xs={8} container direction="row" justify="center" display="flex" className="selectBorder">

                            <Select
                                suffixIcon={<img src={SelectionIcon} className="Select_svg" />} showSearch optionFilterProp="children" filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                className="SelectInput" style={{ width: "62%", height: "22px" }} >

                            </Select>
                        </Grid>


                    </Grid>
                    <Grid item xs={3} container direction="row" justify="left" alignItems="left" display="flex">
                        <Grid item xs={4} container direction="row" justify="center" className="Fields_Title">Traits</Grid>
                        <Grid item xs={8} container justify="center" display="flex" className="selectBorder">
                            <Select
                                suffixIcon={<img src={SelectionIcon} className="Select_svg" />} showSearch optionFilterProp="children" filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                className="SelectInput" style={{ width: "62%", height: "22px" }} >

                            </Select>
                        </Grid>


                    </Grid>
                    <Grid item xs={3} container direction="row" justify="left" alignItems="left" display="flex">
                        <Grid item xs={4} container direction="row" justify="left" className="Fields_Title">Certification</Grid>
                        <Grid item xs={8} container justify="center" display="flex" className="selectBorder">
                            <Select
                                suffixIcon={<img src={SelectionIcon} className="Select_svg" />} showSearch optionFilterProp="children" filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                className="SelectInput" style={{ width: "62%", height: "22px" }} >

                            </Select>
                        </Grid>

                    </Grid>
                    <Grid item xs={3} container direction="row" justify="left" display="flex">
                        <Grid item xs={4} container justify="letf" className="Fields_Title">Achivements</Grid>
                        <Grid item xs={8} container justify="center" display="flex" className="selectBorder">
                            <Select
                                suffixIcon={<img src={SelectionIcon} className="Select_svg" />} showSearch optionFilterProp="children" filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                className="SelectInput" style={{ width: "62%", height: "22px" }} >

                            </Select>
                        </Grid>


                    </Grid>

                </Grid>
                <Grid spacing={2} item xs={12} container direction="row" justify="right" display="flex" >

                    <Grid item xs={3} container direction="row" justify="left" alignItems="left" display="flex">
                        <Grid item xs={5} container direction="row" justify="center" className="Fields_Title">Specialization</Grid>
                        <Grid item xs={7} container justify="center" display="flex" className="selectBorder">
                            <Select
                                suffixIcon={<img src={SelectionIcon} className="Select_svg" />} showSearch optionFilterProp="children" filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                className="SelectInput" style={{ width: "62%", height: "22px" }} >

                            </Select>
                        </Grid>


                    </Grid>
                    <Grid item xs={4} container direction="row" justify="left" alignItems="left" display="flex">
                        <Grid item xs={3} container direction="row" justify="left" className="Fields_Title">Capabilities</Grid>
                        <Grid item xs={9} container justify="center" display="flex" className="selectBorder">
                            <Select
                                suffixIcon={<img src={SelectionIcon} className="Select_svg" />} showSearch optionFilterProp="children" filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                className="SelectInput" style={{ width: "62%", height: "22px" }} >

                            </Select>
                        </Grid>

                    </Grid>
                    <Grid item xs={3} container direction="row" justify="left" display="flex">
                        <Grid item xs={2} container justify="letf" className="Fields_Title">Talents</Grid>
                        <Grid item xs={10} container justify="center" display="flex" className="selectBorder">
                            <Select
                                suffixIcon={<img src={SelectionIcon} className="Select_svg" />} showSearch optionFilterProp="children" filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                className="SelectInput" style={{ width: "62%", height: "22px" }} >

                            </Select>
                        </Grid>

                    </Grid>
                    <Grid item xs={2} container direction="row" justify="left" display="flex">
                        <div className="search_GoButton">Go</div>

                    </Grid>

                </Grid>

            </Grid>
            <div className="tableFormat">
                <table className="tableViews">
                    <tr className="tableRows">
                        
                        <th className="tableHeading">Field1</th>
                        <th className="tableHeading">Field2</th>
                        <th className="tableHeading">Field3</th>
                        <th className="tableHeading">Field4</th>
                        <th className="tableHeading">Field5</th>
                        <th className="tableHeading">Field6</th>
                        <th className="tableHeading">Field7</th>
                        <th className="tableHeading">Field8</th>
                        <th className="tableHeading">Field 9</th> 
                    </tr>
                    <tr className="tableRows">
                                <td>Field 1</td>
                                <td>Field 2</td>
                                <td>Field 3</td>
                                <td>Field 4</td>
                                <td>Field 5</td>
                                <td>Field 6</td>
                                <td>Field 7</td>
                                <td>Field 8</td>
                                <td>Field 9</td>
                                <td> <Checkbox defaultChecked color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }} /></td>
                            </tr>
                    <tr className="tableRows">
                                <td>Field 1</td>
                                <td>Field 2</td>
                                <td>Field 3</td>
                                <td>Field 4</td>
                                <td>Field 5</td>
                                <td>Field 6</td>
                                <td>Field 7</td>
                                <td>Field 8</td>
                                <td>Field 9</td>
                                <td> <Checkbox defaultChecked color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }} /></td>
                            </tr>
                    <tr className="tableRows">
                                <td>Field 1</td>
                                <td>Field 2</td>
                                <td>Field 3</td>
                                <td>Field 4</td>
                                <td>Field 5</td>
                                <td>Field 6</td>
                                <td>Field 7</td>
                                <td>Field 8</td>
                                <td>Field 9</td>
                                <td> <Checkbox defaultChecked color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }} /></td>
                            </tr>
                    <tr className="tableRows">
                                <td>Field 1</td>
                                <td>Field 2</td>
                                <td>Field 3</td>
                                <td>Field 4</td>
                                <td>Field 5</td>
                                <td>Field 6</td>
                                <td>Field 7</td>
                                <td>Field 8</td>
                                <td>Field 9</td>
                                <td> <Checkbox defaultChecked color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }} /></td>
                            </tr>
                    <tr className="tableRows">
                                <td>Field 1</td>
                                <td>Field 2</td>
                                <td>Field 3</td>
                                <td>Field 4</td>
                                <td>Field 5</td>
                                <td>Field 6</td>
                                <td>Field 7</td>
                                <td>Field 8</td>
                                <td>Field 9</td>
                                <td> <Checkbox defaultChecked color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }} /></td>
                            </tr>
                    <tr className="tableRows">
                                <td>Field 1</td>
                                <td>Field 2</td>
                                <td>Field 3</td>
                                <td>Field 4</td>
                                <td>Field 5</td>
                                <td>Field 6</td>
                                <td>Field 7</td>
                                <td>Field 8</td>
                                <td>Field 9</td>
                                <td> <Checkbox defaultChecked color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }} /></td>
                            </tr>
                            <tr className="tableRows">
                                <td>Field 1</td>
                                <td>Field 2</td>
                                <td>Field 3</td>
                                <td>Field 4</td>
                                <td>Field 5</td>
                                <td>Field 6</td>
                                <td>Field 7</td>
                                <td>Field 8</td>
                                <td>Field 9</td>
                                <td> <Checkbox defaultChecked color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }} /></td>
                            </tr>
                    <tr className="tableRows">
                                <td>Field 1</td>
                                <td>Field 2</td>
                                <td>Field 3</td>
                                <td>Field 4</td>
                                <td>Field 5</td>
                                <td>Field 6</td>
                                <td>Field 7</td>
                                <td>Field 8</td>
                                <td>Field 9</td>
                                <td> <Checkbox defaultChecked color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }} /></td>
                            </tr>
                    <tr className="tableRows">
                                <td>Field 1</td>
                                <td>Field 2</td>
                                <td>Field 3</td>
                                <td>Field 4</td>
                                <td>Field 5</td>
                                <td>Field 6</td>
                                <td>Field 7</td>
                                <td>Field 8</td>
                                <td>Field 9</td>
                                <td> <Checkbox defaultChecked color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }} /></td>
                            </tr>
                            <tr className="tableRows">
                                <td>Field 1</td>
                                <td>Field 2</td>
                                <td>Field 3</td>
                                <td>Field 4</td>
                                <td>Field 5</td>
                                <td>Field 6</td>
                                <td>Field 7</td>
                                <td>Field 8</td>
                                <td>Field 9</td>
                                <td> <Checkbox defaultChecked color="primary"inputProps={{ 'aria-label': 'secondary checkbox' }} /></td>
                            </tr>
                    
                   
                    
                </table>
                
            </div>
            <div className="footerTable">
                <Pagination count={10} className="pagignation" /> 
                <div className="viewInteriviewDetails" onClick={showModal}>Interview Details</div>
                <Modal  visible={isModalVisible} footer={null} onOk={handleOk} onCancel={handleCancel} width={"40%"} className="interviewModel" closable={false} zIndex={1000} style={{marginTop:"7%",}} bodyStyle={{borderRadius:"8px"}}>
                    <div className="interviewModel_show">
                        <div className="header_Model">
                            Interview Details
                        </div>
                        <Grid container spacing={3} className="modelContainer">
                        
                        <Grid item xs={12}>
                            <Select suffixIcon={<img src={SelectionIcon} className="SelectInput_svg" />}
                                    showSearch placeholder="Type of Resource" optionFilterProp="children" filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    className="SelectionInput"
                                    style={{ width: "70%" }} >


                                </Select>
            
                        </Grid>    
                       
                        <Grid item xs={12}>
                            <DatePicker suffixIcon={<img src={CalenderIcon} className="DateInput_svg" />} onChange={onChange} placeholder="Date of Birth" style={{ width:"70%" }} className="DatePicker_View" />

                        </Grid>
                        <Grid item xs={12}>
                            <Select suffixIcon={<img src={SelectionIcon} className="SelectInput_svg" />}
                                    showSearch placeholder="Type of Resource" optionFilterProp="children" filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    className="SelectionInput"
                                    style={{ width: "70%" }} >


                                </Select>
                        </Grid>
                        <Grid item xs={12}>
                                  <Button>Submit</Button>
                        </Grid>

                        </Grid>
                    </div>
                </Modal>
            </div>

               
        </div>

    )
}
export default SearchPage;