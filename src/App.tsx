import { menuItems } from './data/db';

import MenuItem from './components/MenuItem';
import OrderContents from './components/OrderContents';
import OrderTotals from './components/OrderTotals';
import TipsPercentageForm from './components/TipsPercentageForm';

import useOrder from './hooks/useOrder';

function App() {

  const {order, tip, setTip, addItem, removeItem, placeOrder} = useOrder()
  return (
    <>
      <header className="bg-blue-400 py-5">
        <h1 className="text-center text-4xl font-semibold">Calculadora de propinas</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2"> 
        <div className='p-5'>
          <h2 className='text-4xl font-semibold'>Menu</h2>
          <div className='space-y-3 mt-10'>
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-10'>
            {order.length ? (
              <>
                <OrderContents
                  order={order}
                  removeItem={removeItem}
                />
                <TipsPercentageForm 
                  setTip={setTip}
                  tip={tip}
                />
                <OrderTotals
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                />
              </>
            ) : (
              <p className='text-center'>Orden vacia</p>
            )}
        </div>
      </main>


    </>
  )
}

export default App
