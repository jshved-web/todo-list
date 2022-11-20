import httpService from "./http.service"

const todosEndPoint = "todos"

const todosService = {
  get: async () => {
    const {data} = await httpService.get(todosEndPoint + '.json')
    return data
  },
  create: async (content) => {
    const {data} = await httpService.post(todosEndPoint + '.json', content)
    return data
  },
  remove: async (_id) => {
    await httpService.delete(todosEndPoint + '/' + _id + '.json')
  },
  update: async (_id, content) => {
    await httpService.put(todosEndPoint + '/' + _id + '.json', content)
  }

}
export default todosService
