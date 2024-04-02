import React from 'react';
import {
  Divider,
  Form,
  Input,
  Select,
  Layout,
  PageHeader,
  Row,
  Col,
  Cascader,
  DatePicker,
} from 'antd';

const { Content } = Layout;
const { Option } = Select;

const Patientform = () => {
  return (
    <Layout>
      <PageHeader title='New Patient' />
      <Content style={{ padding: '0 20px' }}>
        <Form layout='vertical'>
          <Form.Item label='Status:'>
            <Row>
              <Col span={4}>
                <Select style={{ width: 200 }}>
                  <Option value='option1'>Active</Option>
                  <Option value='option2'>Inactive</Option>
                </Select>
              </Col>
            </Row>
          </Form.Item>
        </Form>
        <Divider />
        <Form layout='vertical'>
          <Row>
            <Row gutter={[16]}>
              <Col span={6}>
                <Form.Item label='Patient Name'>
                  <Select style={{ width: '100%' }}>
                    <Option value='Home'>Mr</Option>
                    <Option value='Company'>Mrs</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label=''>
                  <Cascader
                    style={{ width: '100%' }}
                    placeholder='Given Name'
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label=''>
                  <Input placeholder='Middle Name' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16]}>
              <Col span={6}>
                <Form.Item label='Alias Name'>
                  <Input placeholder='Enter Name' />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='Gender'>
                  <Select style={{ width: '100%' }}>
                    <Option value='male'>Male</Option>
                    <Option value='female'>Female</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='Blood Type'>
                  <Select style={{ width: '100%' }}>
                    <Option value='group A'>Group A</Option>
                    <Option value='group B'>Group B</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Col span={6}>
              <div
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'lightgray',
                }}
              ></div>
            </Col>
          </Row>
        </Form>
        <Form layout='vertical'>
          <Row gutter={[16]}>
            <Col span={6}>
              <Form.Item label='Age'>
                <Input placeholder='Enter Age' />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label='Date of Birth'>
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label='Marital Status'>
                <Select>
                  <Option value='status'>Married</Option>
                  <Option value='status'>unmarried</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label='ID no/military/birth cert'>
                <Input placeholder='' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Form layout='vertical'>
          <Row gutter={[16]}>
            <Col span={6}>
              <Form.Item label='Primary contact'>
                <Input placeholder='Enter contact' />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label='residence'>
                <Input placeholder='Enter residence' />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label='religion'>
                <Select>
                  <Option value=''>pagan</Option>
                  <Option value=''>christian</Option>
                  <Option value=''>muslim</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label='Nationality'>
                <Input placeholder='Enter Name' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Form layout='vertical'>
          <Row gutter={[16]}>
            <Col span={6}>
              <Form.Item label='Occupation'>
                <Select>
                  <Option value=''>chef</Option>
                  <Option value=''>Doctor</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label='knew us through'>
                <Input placeholder='Enter Name' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Form layout='vertical'>
          <Row gutter={[16]}>
            <Col span={6}>
              <Form.Item label='County'>
                <Input placeholder='select county' />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label='Constituency'>
                <Input placeholder='select constituency' />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label='Gender'>
                <Select>
                  <Option value='male'>Male</Option>
                  <Option value='female'>Female</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Content>
    </Layout>
  );
};

export default Patientform;
