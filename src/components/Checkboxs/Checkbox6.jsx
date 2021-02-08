import { useState } from 'react'
import { Checkbox, Divider } from 'antd'

const CheckboxGroup = Checkbox.Group

const plainOptions = ['Apple', 'Pear', 'Orange']
const defaultCheckedList = ['Apple', 'Orange']

export function Checkbox6() {
    const [checkedList, setCheckedList] = useState(defaultCheckedList)
    const [indeterminate, setIndeteminate] = useState(true)
    const [checkAll, setCheckAll] = useState(false)

    const onChange = list => {
        setCheckedList(list)
        setIndeteminate(!!list.length && list.length < plainOptions.length)
        setCheckAll(list.length === plainOptions.length)
    }

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : [])
        setIndeteminate(false)
        setCheckAll(e.target.checked)
    }

    return (
        <>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                Check all
            </Checkbox>
            <Divider />
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
        </>
    )
}