import axios from 'axios'
import { useCallback } from 'react'
import { useHistory } from 'react-router'

export const useAuth = () => {
  const history = useHistory()

  const login = useCallback(
    id =>
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
          if (res.data) {
            // const isAdmin = res.data.id === 10 ? true : false
            // setLoginUser({ ...res.data, isAdmin })
            history.push('./home')
            alert('login success')
          } else {
            alert('User not found')
          }
        })
        .catch(() => {
          alert('login error')
        }),
    [history]
    // [history, setLoginUser]
  )
  return { login }
}
