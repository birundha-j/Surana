import react from 'react'
import './search.css'
import SearchIcon from '@material-ui/icons/Search';
import { Button, Grid } from '@material-ui/core';
import { Input, Space, Select } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import SelectionIcon from '../../images/selectIcon.png'
import { DownCircleTwoTone } from '@ant-design/icons'
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




function SearchPage() {
    const onSearch = value => console.log(value);
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

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
                <Grid spacing={2} item xs={12} container direction="row" justify="space-around" display="flex" >

                    <Grid item xs={4} container direction="row" justify="left" alignItems="left" display="flex">
                        <Grid item xs={4} container direction="row" justify="center" className="Fields_Title">Specialization</Grid>
                        <Grid item xs={8} container justify="center" display="flex" className="selectBorder">
                            <Select
                                suffixIcon={<img src={SelectionIcon} className="Select_svg" />} showSearch optionFilterProp="children" filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                className="SelectInput" style={{ width: "62%", height: "22px" }} >

                            </Select>
                        </Grid>


                    </Grid>
                    <Grid item xs={4} container direction="row" justify="left" alignItems="left" display="flex">
                        <Grid item xs={4} container direction="row" justify="left" className="Fields_Title">Capabilities</Grid>
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
                        <Grid item xs={4} container justify="letf" className="Fields_Title">Talents</Grid>
                        <Grid item xs={8} container justify="center" display="flex" className="selectBorder">
                            <Select
                                suffixIcon={<img src={SelectionIcon} className="Select_svg" />} showSearch optionFilterProp="children" filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                className="SelectInput" style={{ width: "62%", height: "22px" }} >

                            </Select>
                        </Grid>

                    </Grid>
                    <Grid item xs={1} container direction="row" justify="left" display="flex">
                        <Button>Save</Button>

                    </Grid>

                </Grid>

            </Grid>

        </div>
    )
}
export default SearchPage;