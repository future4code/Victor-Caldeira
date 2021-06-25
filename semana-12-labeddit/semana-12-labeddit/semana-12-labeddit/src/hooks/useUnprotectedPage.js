import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { goToCadastroPage } from "../routes/coordinator"

const useUnprotectedPage = () => {
  const history = useHistory()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
        goToCadastroPage(history)
    }
  }, [history])
}

export default useUnprotectedPage