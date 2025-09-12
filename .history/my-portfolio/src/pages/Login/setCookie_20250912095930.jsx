import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

const setCookie = (value) => {
  const date = new Date()
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
console.log(day, hours, minutes, seconds)


const currentTime = new Date().getTime();
const expireTime = new Date(currentTime + 0.3 * 60 * 60 * 1000);     // 앞에 1은 1시간
console.log(expireTime)

const localDate = new Date()
const thrHoursLate = new Date(new Date().getHours() + 3)
console.log(thrHoursLate)


  const expire = (new Date().getHours() + 3).toString()
  console.log(expire)


  const item = {
    value: value,
    expireHours: expireTime,
  }
  Cookies.set('user', value, {expires : expireTime})
  console.log(expireTime)
  Cookies.set('loginState', true)
  localStorage.setItem('user', expireTime)
}

export default setCookie



// const [count, setCount] = useState()


// useEffect(() => {
//   count = expireTime - now.getHours
//   const id = setInterval(() => {
//     setCount(value => value - 1)
//   }, 1000)

//   return () => clearInterval(id)
// },[])


// useInterval(() => {
//   setCount(count - 1)
// }, 1000)