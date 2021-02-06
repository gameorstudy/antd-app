import { Steps } from 'antd'

const { Step } = Steps

export function Step12() {
    return (
        <>
            <Steps current={1} percent={60}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                <Step title="Waiting" subTitle="This is a description." />
            </Steps>
        </>
    )
}