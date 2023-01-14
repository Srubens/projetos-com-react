import React, {useState} from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () =>{
    const [index, setIndex]= useState(0)
    const { image,name, job, text } = people[index]

    const checkNumber = (number) =>{
        if( number > people.length -1 ){
            return 0
        }
        if( number < 0 ){
            return people.length -1
        }
        return number
    }

    const randomPerson = () =>{
        let randomNumber = Math.floor(Math.random() * people.length)
        if( randomNumber === index ){
            randomNumber = index + 1
        }
        console.log(randomNumber)
        setIndex(checkNumber(randomNumber))
    }

    const nextPerson = () =>{
        setIndex((index) =>{
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }
    
    const prevPerson = () =>{
        setIndex((index) =>{
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }


    return(
        <article className='card text-bg-info col-md-4 col-10'>
            <div className="card-body">
                <div className="d-flex align-items-center flex-column justify-content-md-center text-center">
                    <span className='faquoteright' >
                        <FaQuoteRight/>
                    </span>
                    <img src={image} alt="imagem da pessoa" />
                    <h5>{name}</h5>
                    <small>{job}</small>
                    <p>{text}</p>
                    <div className="d-flex align-items-center">
                        <div className="btn btn-primary me-1" onClick={prevPerson} >
                            <FaChevronLeft/>
                        </div>
                        <div className="btn btn-primary ms-1" onClick={nextPerson} >
                            <FaChevronRight/>
                        </div>
                    </div>
                    <div className="btn btn-outline-light mt-4" onClick={randomPerson} >Randow</div>
                </div>
            </div>
        </article>
    )
}

export default Review