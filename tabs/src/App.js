import React, { useEffect, useState } from 'react';
import './App.css';

/**
 * VAMOS ESTA USANDO A API DELE NESTE MOMENTO E DEPOIS CRIAREMOS A 
 * NOSSA PROPRIA
 * API NÃO ESTA NO AR
 */
const url = 'https://gist.githubusercontent.com/Srubens/ce010350eaa5479b7f3522bb00922d62/raw/2f36c81457ff1e875b6902fbc6544e1a7277e7d7/jobs.json'

const App = () =>{
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async() =>{
    try{
      const response = await fetch(url)
      const newJobs = await response.json()
      setJobs(newJobs)
      setLoading(false)
    }catch(e){
      setLoading(true)
      console.log('error: ',e)
    }
  }

  useEffect(() =>{
    fetchJobs()
  },[])

  if(loading){
    return (
      <div>
        <h1>Carregando...</h1>
      </div>
    )
  }

  const { company, dates, duties, title } = jobs[value]

  return (
    <div>
      <div>
        <h2>Experience</h2>
      </div>
      <article>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p>{dates}</p>
        {
          duties.map((duty, index) =>{
            return <div key={index} >
              {duty}
            </div>
          })
        }
      </article>
    </div>
  )
}

export default App;
