const Api = {
  apiUrl: 'http://localhost:3001/personagens',
  fetchGetAll: () => fetch(`${Api.apiUrl}/readAll`),
  fetchGetById: id => fetch(`${Api.apiUrl}/readSingle${id}`),
  fetchPost: (vaga) => {
    return fetch(`${Api.apiUrl}/create`, {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(vaga)
    })
  },
  fetchPut: (vaga, id) => {
    return fetch(`${Api.apiUrl}/update/${id}`, {
      method: 'PUT',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(vaga)
    })
  },
  fetchDelete: (id) => {
    return fetch(`${Api.apiUrl}/delete/${id}`, {
      method: 'DELETE'
    })
  }
}

export default Api;