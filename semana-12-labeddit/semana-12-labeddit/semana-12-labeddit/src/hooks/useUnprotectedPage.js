import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToCadastroPage } from "../routes/coordinator"

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
        goToCadastroPage(history)
    }
  }, [history])
}

export default useUnprotectedPage