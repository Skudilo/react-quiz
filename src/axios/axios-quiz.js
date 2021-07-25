import axios from 'axios'

export default axios.create({
  baseURL: 'https://quiz-edbe2-default-rtdb.europe-west1.firebasedatabase.app/'
})