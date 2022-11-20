import axios from 'axios'
import config from '../config.json'

/**
 *
 * @type {string} Присвоение базового Url-адреса
 */
axios.defaults.baseURL = config.apiEndpoint

/**
 * Объект предоствляющий методы HTTP запросов
 */
const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
export default httpService;
