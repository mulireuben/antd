import React from 'react';
import {
  Button,
  Layout,
  PageHeader,
  Select,
  Input,
  Table,
  Row,
  Col,
  Icon,
  Typography,
  Menu,
  Dropdown,
  
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Mypage.css';
import { utils } from '../Utils/Utils';

const { Title } = Typography;

const { Content } = Layout;
const { Option } = Select;
const menu = (
  <Menu>
    <Menu.Item key='1'>
      <Icon type='user' />
      edit
    </Menu.Item>
    <Menu.Item key='2'>
      <Icon type='user' />
      delete
    </Menu.Item>
  </Menu>
);

const columns = [
  {
    title: '',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: 'Patient No',
    dataIndex: 'patientnumber',
    key: 'number',
  },
  {
    title: 'Patient name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Registation Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Primary Contact',
    dataIndex: 'contact',
    key: 'Contact',
  },
  {
    title: 'Residence',
    dataIndex: 'place',
    key: 'place',
  },
  {
    title: 'status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'action',
    dataIndex: 'action',
    key: 'action',
    render: () => (
      <Dropdown overlay={menu}>
        <Button type='' icon='down'>
          select
        </Button>
      </Dropdown>
    ),
  },
];
const MyPage = () => {
  return (
    <div className='mypage-container'>
      <PageHeader className='mypage-heading'>
        <Title level={3}>Patient Master Register</Title>
      </PageHeader>
      <Content style={{ padding: '0px 20px 20px 20px' }}>
        <Row className='header-row' type='flex' justify='space-between'>
          <Col span={12} className='header-col'>
            <Select style={{ width: '100%' }}>
              <Option value='option1'>Active</Option>
              <Option value='option2'>inactive</Option>
            </Select>

            <Select style={{ width: '100%' }}>
              <Option value='option1'>Present</Option>
              <Option value='option2'>Absent</Option>
            </Select>

            <Input
              placeholder='input search text'
              onSearch={(value) => console.log(value)}
              style={{ width: '100%' }}
            />
          </Col>

          <Col className='button-icons'>
            <Link to='/patientform'>
              <Button
                type='primary'
                icon={<SearchOutlined style={{ background: 'white' }} />}
              >
                new patient
              </Button>
            </Link>
            <Icon type='file-text' />
            <Icon type='file-text' />
          </Col>
        </Row>

        <Table dataSource={utils} columns={columns} size='small' />
      </Content>
    </div>
  );
};

export default MyPage;
