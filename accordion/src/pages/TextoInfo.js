import React, {useState} from 'react'

const TextoInfo = ({question}) =>{
	const [info, setInfo]= useState(false)
	return(
		<div className='box_text' >
			<div className='d-flex flex-column flex-md-row justify-content-between mb-1'>
			<h5>{question.title}</h5>
			<span className='mybtn ms-4 btn btn-outline-secondary col-2 col-md-1' onClick={() => setInfo(!info) } >
					{ info ? '-': '+' }
			</span>
			</div>
			<div>
				<p>
					{
						info ? question.info : ''
					}
				</p>
			</div>
		</div>
	)
}

export default TextoInfo