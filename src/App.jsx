import './App.css'
import Navbar from './components/navbar/navbar'
import { Routes, Route } from 'react-router-dom'
import Profile from './components/profile/profile'
//import Posts from './components/posts/posts'
import Subscribes from './components/subscribes/subscribes'
import Subscriptions from './components/subscriptions/subscriptions'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomerAction, removeCustomerAction } from './redux/store/customerReducer'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.rootReducer.cash.cash)
  const customers = useSelector(state => state.rootReducer.customers.customers)

  const addCash = () => {
    dispatch({ type: 'ADD_CASH', payload: 20 })
  }

  const getCash = () => {
    dispatch({ type: 'GET_CASH', payload: 20 })
  }

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
        TEST
        <button onClick={() => addCash()}> Addcash </button>
        <button onClick={() => getCash()}> Getcash </button>
        <div>{cash}</div>
      </div>
      <div>
        TEST 2
        <button onClick={() => addCustomer()}> Добавить клиента </button>
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
