import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"
import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    dispatch: Dispatch<OrderActions>
}
export default function MenuItem({ item, dispatch }: MenuItemProps) {
    return (
        <button 
            className="border-2 border-blue-400 hover:bg-blue-200 rounded-lg w-full p-3 flex justify-between"
            onClick={() => dispatch({type: 'add-item', payload: {item}})}
        >
            <p>{item.name}</p>
            <p className="font-semibold">${item.price}</p>
        </button>
    )
}
