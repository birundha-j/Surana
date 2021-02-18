import react from 'react'
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

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);




const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div>
      <Layout>

        <Header style={{background:"white"}}>
          <Grid spacing={2} item xs={12}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={2} justify="center" >
              Surana
        </Grid>
            <Grid item xs={4} justify="center">
              <Space direction="vertical">

                <Search placeholder="Search..." onSearch={onSearch} style={{ width: "200%", marginTop: "8%", borderRadius: "100px", border: "1px solid gray" }} />

              </Space>
            </Grid>
            <Grid item xs={3} justify="center" >
              <div >
                <InfoIcon style={{ fontSize: "35px" }} />
                <NotificationsIcon style={{ fontSize: "35px" }} />
                <SettingsIcon style={{ fontSize: "35px" }} />
              </div>
            </Grid>
            <Grid item xs={3} justify="center" >
              <div >
                <SupervisedUserCircleIcon style={{ fontSize: "35px", marginTop: "7%" }} />
                <div><div >Jhone Wick</div>HOD</div>
                <ArrowDropDownCircleIcon style={{ fontSize: "30px", marginTop: "7%" }} />
              </div>
            </Grid>
          </Grid>
        </Header>

        <Layout >
          <Sider className="SiderView">
            <div className="Logostructure">Logo</div>
          </Sider>
          <Content ><Grid item xs={12}>



            <Select
              suffixIcon={<DownCircleTwoTone />}
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>


          </Grid></Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
