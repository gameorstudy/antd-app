import { useState } from 'react'
import { Cascader } from 'antd'

const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou'
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing'
            }
        ]
    }
]

export function Cascader4() {
    const [text, setText] = useState('Unselect')
    
    const onChange = (value, selectedOptions) => {
        setText(selectedOptions.map(o => o.label).join(', '))
    }

    return (
        <>
            <span>
                {text}
                &nbsp;
                <Cascader options={options} onChange={onChange}>
                    <a href="#">Change city</a>
                </Cascader>
            </span>
        </>
    )
}