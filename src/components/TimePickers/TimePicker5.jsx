import { useState } from 'react'
import { TimePicker, Button } from 'antd'
import { render } from '@testing-library/react'

export function TimePicker5() {
    const [open, setOpen] = useState(false)

    const handleOpenChange = open => {
        setOpen(open)
    }

    const handleClose = () => setOpen(false)

    return (
        <>
            <TimePicker
                open={open}
                onOpenChange={handleOpenChange}
                renderExtraFooter={() => (
                    <Button size="small" type="primary" onClick={handleClose}>Ok</Button>
                )}
            />
        </>
    )
}