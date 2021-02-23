import { Calendar } from 'antd'

function onPanelChange(value, mode) {
    console.log(value, mode)
}

export function Calendar4() {
    return (
        <>
            <div className="site-calendar-demo-card">
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>
        </>
    )
}