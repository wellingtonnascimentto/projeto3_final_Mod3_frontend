import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const filme = props.data;
  return (
    <Link to={`/view/${filme._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ filme.nome }</h5>
          <img src={filme.imagemUrl} alt=""  width="300" height="400"/>
        </div>
      </div>
    </Link>
  )
}

export default Card
