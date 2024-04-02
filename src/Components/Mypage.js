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
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Content } = Layout;
const { Option } = Select;

const dataSource = [
  {
    key: '2',
    user: <Icon type='user' />,
    name: 'reuben steve',
    patientnumber: 40,
    contact: '67576736487384',
    status: (
      <Button type='primary' ghost size='small'>
        active
      </Button>
    ),
    date: '12/22/2024',
    place: 'kitui',
  },
  {
    key: '2',
    user: <Icon type='user' />,
    name: 'reuben steve',
    patientnumber: 40,
    contact: '67576736487384',
    status: (
      <Button type='primary' ghost size='small'>
        active
      </Button>
    ),
    date: '12/22/2024',
    place: 'kitui',
  },
  {
    key: '2',
    user: <Icon type='user' />,
    name: 'reuben steve',
    patientnumber: 40,
    contact: '67576736487384',
    status: (
      <Button type='primary' ghost size='small'>
        active
      </Button>
    ),
    date: '12/22/2024',
    place: 'kitui',
  },
  {
    key: '2',
    user: <Icon type='user' />,
    name: 'reuben steve',
    patientnumber: 40,
    contact: '67576736487384',
    status: (
      <Button type='primary' ghost size='small'>
        active
      </Button>
    ),
    date: '12/22/2024',
    place: 'kitui',
  },
  {
    key: '2',
    user: <Icon type='user' />,
    name: 'reuben steve',
    patientnumber: 40,
    contact: '67576736487384',
    status: (
      <Button type='primary' ghost size='small'>
        active
      </Button>
    ),
    date: '12/22/2024',
    place: 'kitui',
  },
  {
    key: '2',
    user: <Icon type='user' />,
    name: 'reuben steve',
    patientnumber: 40,
    contact: '67576736487384',
    status: (
      <Button type='primary' ghost size='small'>
        active
      </Button>
    ),
    date: '12/22/2024',
    place: 'kitui',
  },
  {
    key: '2',
    user: <Icon type='user' />,
    name: 'reuben steve',
    patientnumber: 40,
    contact: '67576736487384',
    status: (
      <Button type='primary' ghost size='small'>
        active
      </Button>
    ),
    date: '12/22/2024',
    place: 'kitui',
  },
];
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
    render: () => <Button />,
  },
];

const MyPage = () => {
  return (
    <>
      <PageHeader title='Patient Master Register' />
      <Content style={{ padding: '0 20px' }}>
        <Row gutter={[20]}>
          <Col span={6}>
            {/* <div style={{ marginBottom: 16 }}> */}
            <Select style={{ width: '100%' }}>
              <Option value='option1'>Active</Option>
              <Option value='option2'>inactive</Option>
            </Select>
          </Col>
          <Col span={6}>
            <Select style={{ width: '100%' }}>
              <Option value='option1'>Present</Option>
              <Option value='option2'>Absent</Option>
            </Select>
          </Col>
          <Col span={6}>
            <Input
              placeholder='input search text'
              onSearch={(value) => console.log(value)}
              style={{ width: '100%' }}
              // icon={<FingerprintOutlined />}
              // type='primary'
            />
          </Col>

          <Col span={6}>
            <Link to='/patient-form'>
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

          {/* </div> */}
          {/* </Col> */}
        </Row>

        {/* Table */}
        <Table dataSource={dataSource} columns={columns} size='small' />
      </Content>
    </>
  );
};

export default MyPage;
