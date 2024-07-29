import './App.css'
import Navbar from './components/navbar/navbar'
import { Routes, Route } from 'react-router-dom'
import Profile from './components/profile/profile'
import Subscribes from './components/subscribes/subscribes'
import Subscriptions from './components/subscriptions/subscriptions'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomerAction, removeCustomerAction } from './redux/store/customerReducer'
import { fetchCustomers } from './redux/asyncAction/customers'

function App() {
  const dispatch = useDispatch()
  const customers = useSelector(state => state.rootReducer.customers.customers)

  const addCustomer = () => {
    const customer = {
      name: 'Oleg',
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className='app-wrapper'>
      <div>
        TEST 2
        <button onClick={() => addCustomer()}> Добавить клиента </button>
        <button onClick={() => dispatch(fetchCustomers())}> Добавить клиентов из базы </button>
        <button onClick={() => removeCustomer()}> Удалить клиента </button>
        <div>
          {customers.length > 0 ?
            <div>
              {customers.map(customer =>
                <div onClick={() => removeCustomer(customer)} key={customer.id}>{customer.name}</div>
              )}
            </div>
            :
            <div>
              <h1> Нет клиентов </h1>
            </div>
          }
        </div>
      </div>
      <div className='app-header'> Header </div>
      <Navbar />
      <div className='app-content'>
        <Routes>
          <Route path='/profile' element={<Profile />}> </Route>
          <Route path='/posts' element={<Profile />}> </Route>
          <Route path='/subscriptions' element={<Subscriptions />}> </Route>
          <Route path='/Subscribes' element={<Subscribes />}> </Route>
        </Routes>
      </div>

    </div>
  )
}

export default App
