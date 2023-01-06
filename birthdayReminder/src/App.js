import People from "./People"
import { listPeople } from './list-people'
import { useState } from "react"


const App = () =>{

  const [people, setPeople] = useState(listPeople)

  const handlerClick = () =>{
    setPeople([])
    // let newPeople = people.filter((person) =>{
    //   setPeople(newPeople)
    //   console.log('aqui',person)
    // })
  }

  return (
    <>
      <div className="main_content" >
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="main_box">
              <div className="main_title text-center mb-4" >
                <h1>{ people.length } Birthday today</h1>
              </div>
              {
                people.map((peoples, index)=>{
                  return(
                    <People {...peoples} key={index} />
                  )
                })
              }
              <div className="d-flex justify-content-center ">

                <div className="col-8 btn btn-primary" onClick={handlerClick}>Limpar tudo</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
