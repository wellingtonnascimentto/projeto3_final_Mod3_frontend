const Api = {
  apiUrl: 'https://api-hobbies.herokuapp.com/filmes',
  fetchGetAll: () => fetch(`${Api.apiUrl}/listall`),
  fetchGetById: id => fetch(`${Api.apiUrl}/listid/${id}`),
  fetchPost: (filme) => {
    return fetch(`${Api.apiUrl}/add`, {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(filme)
    })
  },
  fetchPut: (filme, id) => {
    return fetch(`${Api.apiUrl}/update/${id}`, {
      method: 'PUT',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(filme)
    })
  },
  fetchDelete: (id) => {
    return fetch(`${Api.apiUrl}/delete/${id}`, {
      method: 'DELETE'
    })
  }
}

export default Api;