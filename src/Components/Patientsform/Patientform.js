import './Patientform.css';
import {
  Divider,
  Form,
  Input,
  Select,
  Layout,
  PageHeader,
  Row,
  Col,
  DatePicker,
  Button,
  Typography,
  Upload,
  Icon,
} from 'antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;
const { Option } = Select;
const { Title } = Typography;

const selectBefore = (
  <Select defaultValue='Mr' style={{ width: 90 }}>
    <Option value='Mr'>mr</Option>
    <Option value='Mrs'>mrs</Option>
  </Select>
);

const Patientform = (props) => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const handleReset = () => {
    props.form.resetFields();
  };

  return (
    <Layout className='parent-container'>
      <div className='patient-container'>
        <PageHeader className='patient-header'>
          <Title level={3}>New Patient</Title>
          <Link to={'/'}>
            <Button type='danger'>back</Button>
          </Link>
        </PageHeader>

        <Content className='content-body' style={{ padding: '0 20px' }}>
          <Form layout='vertical' onSubmit={handleSubmit}>
            <Row
              className='row-1'
              type='flex'
              justify='space-between'
              gutter={16}
            >
              <Col span={12}>
                <Form.Item label='Status:'>
                  {getFieldDecorator('status', {
                    rules: [
                      { required: true, message: 'please select status' },
                    ],
                  })(
                    <Select style={{ width: 200 }}>
                      <Option value='option1'>Active</Option>
                      <Option value='option2'>Inactive</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>

              <Col className='clear-button' span={12}>
                <Form.Item>
                  <Button type='danger' htmlType='button' onClick={handleReset}>
                    Clear
                  </Button>
                </Form.Item>
              </Col>
            </Row>

            <Divider />

            <Row gutter={16}>
              <Col>
                <Col span={6}>
                  <Form.Item label='Patient Name'>
                    {getFieldDecorator('name', {
                      rules: [
                        { required: true, message: 'please enter your name' },
                      ],
                    })(
                      <div style={{ marginBottom: 16 }}>
                        <Input addonBefore={selectBefore} />
                      </div>
                    )}
                  </Form.Item>
                  <Form.Item label='Alias Name'>
                    {getFieldDecorator('alias name', {
                      rules: [
                        { required: true, message: 'please enter your name' },
                      ],
                    })(<Input type='name' placeholder=' enter alias Name' />)}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label='Gender'>
                    {getFieldDecorator('name', {
                      rules: [
                        { required: true, message: 'please enter your name' },
                      ],
                    })(<Input type='name' placeholder='Enter Name' />)}
                  </Form.Item>
                  <Form.Item label=' username'>
                    {getFieldDecorator('username', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ],
                    })(
                      <Input
                        prefix={
                          <Icon
                            type='user'
                            style={{ color: 'rgba(0,0,0,.25)' }}
                          />
                        }
                        placeholder='Username'
                      />
                    )}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label='middle'>
                    {getFieldDecorator('middle name', {
                      rules: [
                        { required: true, message: 'please enter your name' },
                      ],
                    })(<Input type='name' placeholder='middle name' />)}
                  </Form.Item>

                  <Form.Item label='blood type'>
                    {getFieldDecorator('group', {
                      rules: [
                        {
                          required: true,
                          message: 'please select your blood group',
                        },
                      ],
                    })(
                      <Select>
                        <Option value='option1'>group B</Option>
                        <Option value='option2'>group A</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              </Col>

              <Col span={6}>
                <Form.Item
                  label={<span className='hidden-label-text'>picture</span>}
                >
                  {getFieldDecorator('dragger', {
                    valuePropName: 'fileList',
                  })(
                    <Upload.Dragger name='files' action='/upload.do'>
                      <p className='ant-upload-drag-icon'>
                        <Icon type='inbox' />
                      </p>
                      <p className='ant-upload-text'>
                        Click or drag file to this area to upload
                      </p>
                    </Upload.Dragger>
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16]}>
              <Col span={6}>
                <Form.Item label='Age'>
                  {getFieldDecorator('Age', {
                    rules: [
                      { required: true, message: 'please enter your age' },
                    ],
                  })(<Input type='age' placeholder='yur age' />)}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='Date of birth'>
                  {getFieldDecorator('date-picker')(
                    <DatePicker style={{ width: '100%' }} />
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='marital status'>
                  {getFieldDecorator('status', {
                    rules: [
                      {
                        required: true,
                        message: 'please select your status',
                      },
                    ],
                  })(
                    <Select>
                      <Option value='option1'>married</Option>
                      <Option value='option2'>divorced</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='ID/millitary card/Birthcert'>
                  {getFieldDecorator('number', {
                    rules: [
                      { required: true, message: 'please enter your choice' },
                    ],
                  })(<Input type='' placeholder='' />)}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16]}>
              <Col span={6}>
                <Form.Item label='Primary Contact'>
                  {getFieldDecorator('contact', {
                    rules: [
                      { required: true, message: 'please enter your contact' },
                    ],
                  })(<Input type='number' placeholder='your contact' />)}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='residence'>
                  {getFieldDecorator('location', {
                    rules: [
                      {
                        required: true,
                        message: 'please enter your residence',
                      },
                    ],
                  })(<Input type='residence' placeholder='your residence' />)}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='Religion'>
                  {getFieldDecorator('religion', {
                    rules: [
                      {
                        required: true,
                        message: 'please select your religion',
                      },
                    ],
                  })(
                    <Select>
                      <Option value='option1'>Christian</Option>
                      <Option value='option2'>muslim</Option>
                      <Option value='option2'>hindu</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='nationality'>
                  {getFieldDecorator('nationality', {
                    rules: [
                      {
                        required: true,
                        message: 'please enter your country',
                      },
                    ],
                  })(<Input type='country' placeholder='country of origin' />)}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16]}>
              <Col span={6}>
                <Form.Item label='Occupation'>
                  {getFieldDecorator('occupation', {
                    rules: [
                      {
                        required: true,
                        message: 'please select your occupation',
                      },
                    ],
                  })(
                    <Select>
                      <Option value='option1'>chef</Option>
                      <Option value='option2'>civil servant</Option>
                      <Option value='option2'>business perrson</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='knew us through'>
                  {getFieldDecorator('knew us through', {
                    rules: [
                      {
                        required: true,
                        message: 'please tell us',
                      },
                    ],
                  })(<Input type='text' placeholder='knew us through' />)}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16]}>
              <Col span={6}>
                <Form.Item label='county'>
                  {getFieldDecorator('county', {
                    rules: [
                      {
                        required: true,
                        message: 'please enter your county',
                      },
                    ],
                  })(<Input type='county' placeholder='county of origin' />)}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='constituency'>
                  {getFieldDecorator('constituency', {
                    rules: [
                      {
                        required: true,
                        message: 'please enter your constituency',
                      },
                    ],
                  })(
                    <Input type='place' placeholder='enter your constituency' />
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='ward'>
                  {getFieldDecorator('ward', {
                    rules: [
                      {
                        required: true,
                        message: 'please select your ward',
                      },
                    ],
                  })(
                    <Select>
                      <Option value='option1'>kiyuuu</Option>
                      <Option value='option2'>kwa nugu</Option>
                      <Option value='option2'>kwa zoo</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </div>
    </Layout>
  );
};

export default Form.create()(Patientform);
