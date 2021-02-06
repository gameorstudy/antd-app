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
        value: 'jiagnsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men'
                    }
                ]
            }
        ]
    },
]

function onChange(value) {
    console.log(value)
}

// Just show the latest item
function displayRender(label) {
    return label[label.length - 1]
}

export function Cascader5() {
    return (
        <>
            <Cascader
                options={options}
                expandTrigger="hover"
                displayRender={displayRender}
                onChange={onChange}
            />
        </>
    )
}