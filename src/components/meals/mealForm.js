/*************************
 * author   : Menjith P
 * Purpose  : Meal Order Form View
 * 
 *******************/


//default imports
import { useNavigate ,useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useCallback,useMemo } from 'react';
//antd imports
import {
  Button,
  Cascader,
  Form,
  Input,
  InputNumber,
  Select,
} from 'antd';
//redux imports
import {ordersummary} from '../../store/reducer'
//objects imports
import  {tailFormItemLayout,formItemLayout,residences} from './configData/formConfig'

const { Option } = Select;

const App = () => {
  const [form] = Form.useForm();
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const prev=useLocation()

  const onFinish = useCallback((values) => {
    navigate("/order-summary",{state:prev.pathname})
    dispatch(ordersummary(values))

    console.log("values",values)
  },[prev])


  const prefixSelector = useMemo(()=>
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>,[]
  );
  const suffixSelector = useMemo(()=>
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
        disabled
      >
        <Option value="INR">₹</Option>
      </Select>
    </Form.Item>
  ,[]);



  const validateLength=useCallback(async(rule,value)=>{
    let len;
    if(rule.field==="phone")len=10
    else len=6
    if(value && value.toString().length<len){
       throw new Error(rule.field==="phone"?"Indian Mobile Number should be atleast 10":
      "Indian Pincode should be atleast 6")
    }
  },[])

  const validateNumber=useCallback(async(rule,value)=>{
    if(value && isNaN(value))throw new Error(rule.field +" should be number")
  },[])

  

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '+91',
        residence: ["India","Tamil Nadu","Chennai"],
        suffix: 'INR',
        "price":10,
        "orders":1,
        "totalprice":10
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        validateTrigger="onBlur"
        hasFeedback
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="name"
        label="Name"
        validateTrigger="onBlur"
        hasFeedback
        tooltip="Input your name?"
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        validateTrigger="onBlur"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },{
            validator:validateLength
          }, {
            validator:validateNumber
          }
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="price"
        label="Individual Price"
        rules={[
          {
            required: true,
            message: 'Please input Individual Price!',
          }
        ]}
      >
        <InputNumber
          addonAfter={suffixSelector}
          disabled
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="orders"
        validateTrigger="onBlur"
        hasFeedback
        label="Total orders"
        rules={[
          {
            required: true,
            message: 'Please input no of orders!',
          },
        ]}
      >
          <InputNumber onChange={(e)=>{
            form.setFieldsValue({
              totalprice:form.getFieldsValue().price*e
            })
          }} />
      </Form.Item>

      <Form.Item
        name="totalprice"
        label="Total Price"
        rules={[
          {
            required: true,
            message: 'Please input your Total Price!',
          },
        ]}
      >
        <InputNumber disabled
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="residence"
        label="Habitual Residence"
        validateTrigger="onBlur"
        hasFeedback
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Please select your habitual residence!',
          },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item
        name="address"
        validateTrigger="onBlur"
        hasFeedback
        label="Shipping Address"
        rules={[
          {
            required: true,
            message: 'Please input shipping address',
          },
        ]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="pincode"
        validateTrigger="onBlur"
        hasFeedback
        label="pincode"
        rules={[
          {
            required: true,
            message: 'Please input your shipping pincode!',
          },
          {
            validator:validateLength
          },
          {
            validator:validateNumber
          }
        ]}
      >
          <Input/>
      </Form.Item>
      <Form.Item {...tailFormItemLayout} className='position-sticky bottom-0 bg-white p-3'>
        <Button type="primary" htmlType="submit" >
          Purchase
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
