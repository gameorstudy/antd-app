import { useState } from 'react'
import { Form, Input, Button, Radio } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'

export function Form5() {
    const [form] = Form.useForm()
    const [requiredMark, setRequiredMarkType] = useState('optional')

    const onRequiredTypeChange = ({ requiredMark }) => {
        setRequiredMarkType(requiredMark)
    }

    return (
        <>
            <Form
                form={form}
                layout="vertical"
                initialValues={{
                    requiredMark
                }}
                onValuesChange={onRequiredTypeChange}
                requiredMark={requiredMark}
            >
                <Form.Item label="Required Mark" name="requiredMark">
                    <Radio.Group>
                        <Radio.Button value="optional">Optional</Radio.Button>
                        <Radio.Button value={true}>Required</Radio.Button>
                        <Radio.Button value={false}>Hidden</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Field A" required tooltip="This is a required field">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                    label="Field B"
                    tooltip={{
                        title: 'Tooltip with customize icon',
                        icon: <InfoCircleOutlined />
                    }}
                >
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </>
    )
}