import React from 'react'
import MacWindow from './MacWindow'
import githubData from "../../assests/github.json" 
import "./github.scss"

const Gitcard = ({data ={id:1, image: "", title:"", description:"",tags:"[]", repolink:"", demolink:"" }}) => {
    return <div className='card'>
            <img src={data.image} alt="hi" />
            <h1>{data.title}</h1>
            <p className='description'>{data.description}</p>
            <div className='tags'>
                {
                    data.tags.map(tag => <p className='tag'>{tag}</p> )
                }
            </div>

            <div className='urls'>
                <a href={data.repolink}>Repositry</a>
                <a href={data.demolink}>Demo Link</a>
            </div>
    </div>
}

const Github = ({ windowName, setWindowState }) => {
  return (
    <MacWindow  windowName={windowName} setWindowState={setWindowState}>
        <div className='cards'>
            {githubData.map(project =>{
                return <Gitcard data={project}/>
            })}
        </div>
    </MacWindow>
  )
}

export default Github