import { useState } from "react"

export const MyButton = () => {
    const [count, SetCount] = useState(0)
    const handlerclick = () => {
        SetCount(count+1)
    }
    return(<>
        <button onClick={handlerclick}className='btn'>Нажато {count} раз</button>
    </>
    )
}