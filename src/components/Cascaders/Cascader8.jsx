import { Cascader } from 'antd';

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

function onChange(value) {
  console.log(value);
}

function filter(inputValue, path) {
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)
}

export function Cascader8() {
    return (
        <>
            <Cascader
                options={options}
                onChange={onChange}
                placeholder="Please select"
                showSearch={{ filter }} />
        </>
    )
}