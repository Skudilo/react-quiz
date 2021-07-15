import Axios from 'axios'

export default Axios.create({
  baseURL: 'https://quiz-edbe2-default-rtdb.europe-west1.firebasedatabase.app/'
})