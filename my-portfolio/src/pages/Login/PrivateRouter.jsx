import Cookies from "js-cookie"
import { Navigate, Outlet } from "react-router-dom"




const PrivateRoutes = () => {
  const isLogin = Cookies.get('loginState')

  return isLogin ? <Outlet/> : <Navigate to='/login' replace/>

}

export default PrivateRoutes