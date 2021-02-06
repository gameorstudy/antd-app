import { Button } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons'
import { useState } from 'react'

export function AppButton5() {
    const [loading, setLoading] = useState([])

    const enterLoading = index => {
        const newLoadings = [...loading]
        newLoadings[index] = true

        setLoading(newLoadings)

        setTimeout(() => {
            const newLoadings = [...loading]
            newLoadings[index] = false

            setLoading(newLoadings)
        }, 2000)
    }

    return (
        <>
            <div className="mb-2">
                <Button className="mr-2" type="primary" loading>Loading</Button>
                <Button className="mr-2" type="primary" loading size="small">Loading</Button>
                <Button type="primary" loading></Button>
            </div>
            <div className="mb-2">
                <Button
                    className="mr-2"
                    type="primary"
                    loading={loading[0]}
                    onClick={() => enterLoading(0)}>
                    Click me!
                </Button>
                <Button
                    className="mr-2"
                    type="primary"
                    icon={ <PoweroffOutlined /> }
                    loading={loading[1]}
                    onClick={() => enterLoading(1)}>
                    Click me!
                </Button>
                <Button
                    type="primary"
                    icon={ <PoweroffOutlined /> }
                    loading={loading[2]}
                    onClick={() => enterLoading(2)}>
                </Button>
            </div>
        </>
    )
}