import React, { useState, useEffect } from 'react'
import TextoInfo from './TextoInfo'

const url = `https://gist.githubusercontent.com/Srubens/adf46b97621b74316da6bbcf8515e3ad/raw/0fffb2fb1b772e009782fca55a53f31d9f771203/textInfo.json`

const Index = () =>{

	const [questions, setQuestion] = useState()

	const fetcher = async() =>{
		try{
			const response = await fetch(url)
			const questions = await response.json()
			setQuestion(questions)
		}catch(e){
			console.log('error: ', e)
		}
	}

	useEffect(() =>{
		fetcher()
	},[])

	return(
		<>
		 <div>
			{
				questions.map((question)=>{
					return <TextoInfo key={question.id} question={question} />
				})
			}
		 </div>
		</>	
	)
}

export default Index