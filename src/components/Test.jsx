import React from 'react'
import { useDispatch } from 'react-redux';
import { addCurrentUser } from '../features/userSlice';
export default function Test() {
    const dispatch = useDispatch()
    const handleClick = (e) => {
        e.preventDefault()
        const test = 'hebchbew'
     
        dispatch(addCurrentUser(test))
      }
  return (
    <div onClick={handleClick}>Test</div>
  )
}
