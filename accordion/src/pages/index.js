import React, { useState, useEffect } from 'react'
import TextoInfo from './TextoInfo'

const url = `https://gist.githubusercontent.com/Srubens/adf46b97621b74316da6bbcf8515e3ad/raw/0fffb2fb1b772e009782fca55a53f31d9f771203/textInfo.json`

const Index = () =>{

	const [loading, setLoading] = useState(true)
	const [questions, setQuestion] = useState()

	const fetcher = async() =>{
		try{
			const response = await fetch(url)
			const questions = await response.json()
			// console.log(questions)
			setLoading(false)
			setQuestion(questions)
		}catch(e){
			setLoading(true)
			setQuestion(false)
			console.log('error: ', e)
		}
	}

	useEffect(() =>{
		fetcher()
	},[])

	if( loading ){
		return(
			<div>Carregando...</div>
		)
	}

	return(
		<>
		 <div className='container' >
			<div className='main_box d-flex flex-column flex-md-row g-3 mt-5 justify-content-center mb-2' >
				<div className='col' >
					<h1>primeiro texto vem aqui</h1>
				</div>
				<div className='col' >
					{
						questions.map((question)=>{
							return <TextoInfo key={question.id} question={question}/>
						})
					}
				</div>
			</div>
		 </div>
		</>	
	)
}

export default Index