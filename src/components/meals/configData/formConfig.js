const residences = [
  {
    value: 'India',
    label: 'India',
    children: [
      {
        value: 'Tamil Nadu',
        label: 'Tamil Nadu',
        children: [
          {
            value: 'Chennai',
            label: 'Chennai',
          },
          {
            value: 'Namakkal',
            label: 'Namakkal',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export {tailFormItemLayout,formItemLayout,residences}