import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import {PRs} from './PRs';
import PRCard from './PRCard';

function App(){
  return(
    <section className='List'>
      {PRs.map((PR)=>{
      return <PRCard name={PR.Name} date={PR.PRDate} issue={PR.Issue}></PRCard>
    })}
    </section>
    
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))