import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'; 
function App() {
  const apiQuotes='https://api.quotable.io/random';
  const [quotes , setQuotes]=useState({});
  const[loading , setLoading]=useState(true)
 
  const genratorQuote=()=>{
    setLoading(true)
    fetch(apiQuotes).then(response=>response.json()).then(data=>{
      setQuotes(data)
      console.log(data);
      setLoading(false)
    })
  }

  useEffect(()=>{
    genratorQuote()
  },[])
  if(loading){
  return(
    <div className='parent-loader'>
      <span class="loader"></span>
    </div>
  )
  }
  return (
    <>
      <section>
        <div className='container'>
          <div className='row justify-content-center align-items-center' style={{height:'100vh'}}>
            <div className='col-sm-12'>
              <div class="card-quote">
                <div class="card-quote-body">
                  <h5 class="card-quote-title">{quotes.author}</h5>
                  <p class="card-quote-text">{quotes.content}</p>
                  <button onClick={genratorQuote}> More Quote</button>
                </div>
                <div className='circle'>
                      <span>❝</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
