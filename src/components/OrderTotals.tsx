import { useMemo,Dispatch } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    dispatch: Dispatch<OrderActions>
}

export default function OrderTotals({order, tip, dispatch}:OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])

    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])
    return (
        <>
            <div className="space-y-2">
                <h2 className="font-semibold text-2xl"> Totales y Propina:</h2>
                <p>Subtotal a pagar: <span className="font-bold">{formatCurrency(subtotalAmount)}</span></p>
                <p>Propina: <span className="font-bold">{formatCurrency(tipAmount)}</span></p>
                <p>Total a pagar: <span className="font-bold">{formatCurrency(totalAmount)}</span></p>

            </div>
            <button 
                className="w-full bg-black p-3 uppercase text-white font-semibold mt-10 disabled:opacity-30"
                disabled={totalAmount === 0}
                onClick={() => dispatch({type: 'set-order'})}
                >
                Guardar orden
            </button>
        </>
    )
}
