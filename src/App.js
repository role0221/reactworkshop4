import { useState } from 'react';
import data from  './data'
import SingleContent from './Components/SingleContent';
import './App.css';

function App() {
  const [content,setcontent] = useState(data)
  return (
    <main>
      <div className='container'>
            <h3>  
              เครื่องมือพัฒนา WebApplication 2021
            </h3>
            <section>
              {content.map((data)=>{
                return <SingleContent key={data.id}{...data} />
              })}
            </section>
      </div>
    </main>
  );
}

export default App;
