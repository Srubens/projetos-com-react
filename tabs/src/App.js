import React, { useEffect, useState } from 'react';
import './App.css';
import { FaAngleDoubleRight } from 'react-icons/fa';

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
  /**
   * COLOCAR NA CLASS DO BOTAO
   * active = classe que vai esta ativa no css
   * ${index === value && 'active'}
   */
  return (
    <div className='container' >
      <div className='text-center mt-4' >
        <h2><ins>Experience</ins></h2>
      </div>
      <div className="d-flex justify-content-center mt-5 flex-column flex-md-row">
        <div className='d-flex flex-md-column' >
          {jobs.map((item, index)=>{
            return <div key={item.id} className={`btn btn-outline-primary mx-3 m-3 ${index === value && 'active'}`} onClick={() => setValue(index)} >
              {item.company}
            </div>
          })}
        </div>

        <article>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p>{dates}</p>
          {
            duties.map((duty, index) =>{
              return( 
                <div key={index} >
                <FaAngleDoubleRight /> {duty}
                </div>
              )
            })
          }
        </article>
      </div>
    </div>
  )
}

export default App;
