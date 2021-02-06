import { Steps } from 'antd'

const { Step } = Steps

export function Step3() {
    return (
        <>
            <Steps size="small" current={1}>
                <Step title="Finished" />
                <Step title="In Progress" />
                <Step title="Waiting" />
            </Steps>
        </>
    )
}