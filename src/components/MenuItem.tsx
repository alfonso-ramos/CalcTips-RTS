import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}
export default function MenuItem({ item, addItem }: MenuItemProps) {
    return (
        <button 
            className="border-2 border-blue-400 hover:bg-blue-200 rounded-lg w-full p-3 flex justify-between"
            onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p className="font-semibold">${item.price}</p>
        </button>
    )
}
