import { Alert } from 'antd'
import TextLoop from 'react-text-loop'

export function Alert8() {
    return (
        <>
            <Alert
                banner
                message={
                    <TextLoop mask>
                        <div>Notice message one</div>
                        <div>Notice message two</div>
                        <div>Notice message three</div>
                        <div>Notice message four</div>
                    </TextLoop>
                }
            />
        </>
    )
}