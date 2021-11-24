import React from 'react'
import './Cadastro.css';
import Api from '../../api/api';

const Cadastro = (props) => {
  const history = props.history;

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // pego o valor que usuario digitou nos inputs
    const nome = evento.target.nome.value; 
    const diretor = evento.target.diretor.value;
    const duracao = evento.target.duracao.value;
    const genero = evento.target.genero.value;
    const imagemUrl = evento.target.imagemUrl.value;
    const atores = evento.target.atores.value;

    const filme = {
      nome,
      diretor,
      duracao,
      genero,
      imagemUrl,
      atores
    }
    
    try {
      const response = await Api.fetchPost(filme)
      const result = await response.json();
      alert(result.message);
      history.push('/'); // forca o historico a voltar para a rota de / => home
    } catch(error) {
      console.log(error);
    }
    
  }

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Cadastro de Filmes</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="nome" id="floatingInput" placeholder="Digite o Nome do Filme"/>
                  <label htmlFor="floatingInput">Nome</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control" name="diretor" id="floatingsalario" placeholder="Digite o Nome do Diretor"/>
                  <label htmlFor="floatingsalario">Diretor</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control" name="duracao" id="floatingsalario" placeholder="Digite a Duração do Filme em Minutos"/>
                  <label htmlFor="floatingsalario">Duração</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control" name="genero" id="floatingsalario" placeholder="Digite o Gênero do Filme"/>
                  <label htmlFor="floatingsalario">Gênero</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control" name="imagemUrl" id="floatingsalario" placeholder="Cole aqui o Url da Imagem"/>
                  <label htmlFor="floatingsalario">ImagemUrl</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control" name="atores" id="floatingsalario" placeholder="Digite o Nome dos atores"/>
                  <label htmlFor="floatingsalario">Atores</label>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">Enviar</button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
