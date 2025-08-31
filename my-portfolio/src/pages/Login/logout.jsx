import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  Cookies.remove("user");
  Cookies.remove("loginState");
  const move = useNavigate();
  
  return move("/");
}
