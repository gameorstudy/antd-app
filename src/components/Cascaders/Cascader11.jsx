import { Cascader, Divider } from 'antd';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

function dropdownRender(menu) {
    return (
        <div>
            {menu}
            <Divider style={{ margin: 0 }} />
            <div style={{ padding: 8 }}>The footer is not very short.</div>
        </div>
    )
}

export function Cascader11() {
    return (
        <>
            <Cascader options={options} dropdownRender={dropdownRender} placeholder="Please select" />
        </>
    )
}