import axios from 'axios'
const baseUrl = 'http://localhost:3000'

const getAll = () => {
  return axios.get(`${baseUrl}/contacts.json`)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { 
  getAll: getAll, 
  create: create, 
  update: update 
}