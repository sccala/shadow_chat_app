import { useCallback, useState } from 'react'
import { MessageError } from '../components/Messages'
import axios from 'axios'

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const getUsers = useCallback(() => {
    setLoading(true)
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data)
      })
      .catch(() => {
        return <MessageError />
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return { getUsers, loading, users }
}
