import { Routes, Route} from 'react-router-dom'
import { DashboardPage } from './pages/dashboard'
import { SignInPage } from './pages/signin'
import { ProductsPage } from './pages/products'
import { OrdersPage } from './pages/orders'
import { SettingsPage } from './pages/settings'

export const Router = () => {
  return (
   <Routes>

<Route index element={<DashboardPage/>}/>
<Route path='products' element={<ProductsPage/>}/>
<Route path="login" element={<SignInPage/>}/>
<Route path='orders' element={<OrdersPage/>}/>
<Route path="settings" element={<SettingsPage/>}/>

   </Routes>
  )
}


