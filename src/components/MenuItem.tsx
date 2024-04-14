import type { MenuItem } from "../types"
type MenuItemProps = {
    item: MenuItem
}
export default function MenuItem({ item }: MenuItemProps) {
    return (
        <button className="border-2 border-blue-400 hover:bg-blue-200 w-full p-3 flex justify-between ">
            <p>{item.name}</p>
            <p className="font-semibold">${item.price}</p>
        </button>
    )
}
