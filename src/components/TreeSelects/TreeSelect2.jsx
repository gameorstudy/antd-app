import { useState } from 'react'
import { TreeSelect } from 'antd'

const { TreeNode } = TreeSelect

export function TreeSelect2() {
    const [value, setValue] = useState(undefined)

    const onChange = value => {
        console.log(value)
        setValue(value)
    }

    return (
        <>
            <TreeSelect
                showSearch
                style={{ width: '100%' }}
                value={value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
                onChange={onChange}
            >
                <TreeNode value="parent 1" title="parent 1">
                    <TreeNode value="parent 1-0" title="parent 1-0">
                        <TreeNode value="leaf1" title="my leaf" />
                        <TreeNode value="leaf2" title="your leaf" />
                    </TreeNode>
                    <TreeNode value="parent 1-1" title="parent 1-1">
                        <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} />
                    </TreeNode>
                </TreeNode>
            </TreeSelect>
        </>
    )
}