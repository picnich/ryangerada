import { forwardRef } from "react"

const RevealText = forwardRef((props, ref) => {
    return <p ref={ref}>{props.children}</p>
})

export default RevealText