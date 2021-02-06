import { Cascader } from 'antd'

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
                        label: 'West Lake'
                    }
                ]
            }
        ]
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
                    }
                ]
            }
        ]
    }
]

function onChange(value) {
    console.log(value)
}

export function Cascader2() {
    return (
        <>
            <Cascader options={options} onChange={onChange} placeholder="Please select" />
        </>
    )
}