import react from 'react'
import './search.css'
import SearchIcon from '@material-ui/icons/Search';
import { Grid } from '@material-ui/core';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import SelectionIcon from '../../images/selectIcon.png'


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
            <Grid spacing={1} item xs={12} container direction="column" justify="left" className="SearchInputFields">
                <Grid spacing={2} item xs={12} container direction="row" justify="space-around" display="flex" >
                    <Grid item xs={3} container direction="row" justify="center" alignItems="right" display="flex">
                        <Grid item xs={3} container direction="row" justify="center" className="Fields_Title">Skills</Grid>
                        <Grid item xs={9} container justify="center" display="flex">
                            {/* <Select
                                suffixIcon={<img src={SelectionIcon} className="SelectInput_svg" />} showSearch placeholder="State of Domecile" optionFilterProp="children" filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                className="SelectionInput" style={{ width: "70%" }} >

                            </Select> */}
                        </Grid>


                    </Grid>
                    <Grid item xs={3} container direction="row" justify="left" alignItems="left" display="flex">
                        <Grid item xs={2} container direction="row" justify="center" className="Fields_Title">Traits</Grid>
                        <Grid item xs={10} container justify="center" display="flex">
                            <Input />
                        </Grid>


                    </Grid>
                    <Grid item xs={3} container direction="row" justify="left" alignItems="left" display="flex">
                        <Grid item xs={2} container direction="row" justify="left" className="Fields_Title">Certification</Grid>
                        <Grid item xs={10} container justify="center" display="flex">
                            <Input />
                        </Grid>

                    </Grid>
                    <Grid item xs={3} container direction="row" justify="left" display="flex">
                        <Grid item xs={2} container justify="letf" className="Fields_Title">Achivements</Grid>
                        <Grid item xs={10} container justify="center" display="flex">
                            <Input />
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>

        </div>
    )
}
export default SearchPage;