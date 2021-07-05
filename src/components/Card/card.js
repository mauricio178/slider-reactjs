import React, { useState } from 'react'
import './card.css'
import { images } from '../../Example/Examples'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Card() {

  // Estado para a posição ponteiro no index do array de objetos das imagens
  const [pointer, setPointer] = useState(0);

  return (
    <>
    {/* Recuperando os Dados das imagens */}
      <div>
        <h1>{images[pointer].title}</h1>
        <h4>
          <p>{images[pointer].data}</p>
          <p>{images[pointer].content}</p>
        </h4>

      </div>
      <div className="container">

        {/* Image como background do Carousel, Url acessa o arquivo Examples > monitora o estado de 'pointer' */}
        <div className="carouselInner" style={{ backgroundImage: `url(${images[pointer].image})` }}>

          {/* Margem da esquerda, setPointer é chamado e decrementa um do estado de 'pointer' */}
          <div className="left" onClick={() => {
            pointer > 0 && setPointer(pointer - 1)
          }}>
            <ArrowBackIosIcon style={{ fontSize: 40 }} />
          </div>

          {/* Centro do carousel, com o Title e Content */}
          <div className="center">
          </div>

          {/* Margem da direita, Condição > Se o estado do 'pointer' for menor que o tamanho do array menos um,
        o contador irá incrementar mais um no estado do 'pointer' */}
          <div className="right" onClick={() => {
            pointer < images.length - 1 && setPointer(pointer + 1)
          }}>
            
            <ArrowForwardIosIcon style={{ fontSize: 40 }} />
          </div>


        </div>
      </div>
    </>
  )
}

export default Card

// TO-DO: 
//  1 - Condição de para rolagem infinita;
