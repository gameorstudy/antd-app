import React from 'react'
import { Tree } from 'antd'

const x = 3
const y = 2
const z = 1
const gData = []

const generateData = (_level, _preKey, _tns) => {
    const preKey = _preKey || '0'
    const tns = _tns || gData
    
    const children = []
    for (let i = 0; i < x; ++i) {
        const key = `${preKey}-${i}`
        tns.push({title: key, key})
        if (x < y) {
            children.push(key)
        }
    }

    if (_level < 0 ) {
        return tns
    }

    const level = _level - 1
    children.forEach((key, index) => {
        tns[index].children = []
        return generateData(level, key, tns[index].children)
    })
}
generateData(z)

export default class Tree3 extends React.Component {
    state = {
        gData,
        expandedKeys: ['0-0', '0-0-0', '0-0-0-0'],
    }

    onDragEnter = info => {
        console.log(info)
        // expandedKeys 需要受控时设置
        // this.setState({
        //     expandedKeys: info.expandedKeys
        // })
    }
}