import React, {useState} from 'react'

const TextoInfo = ({question}) =>{
	const [info, setInfo]= useState(false)
	return(
		<div>
		  <h5>{question.title}</h5>
		  <p>
			{
				info ? question.info : ''
			}
			<span onClick={() => setInfo(!info) } >clique aqui para mostrar</span>
		  </p>
		</div>
	)
}

export default TextoInfo