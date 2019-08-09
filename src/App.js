import React, { useState, useEffect} from 'react';
import './App.css';
import FreshCard from './Components/FreshCard';
import Button from 'react-bootstrap/Button';

function App() {
  const [freshPosts, setFreshPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      fetch("https://www.reddit.com/r/hiphopheads/hot.json?limit=100")
        .then(function (response) {
          return response.json();
        })
        .then(hhhJson => {
          setFreshPosts(hhhJson.data.children);
        })
        .catch(error =>
          console.error('Error Grabbing FRESH Music:', error)
        );
    }

    fetchPosts();
  }, []);

  return ( 
    <div className="App" >
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav mr-auto ml-3">
            <li className="nav-item active">
              <h2><b>FRESH HipHopHeads Posts</b></h2>
            </li>
          </ul>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li> */}
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col"></div>
          <div className="col-7-lg col-12-sm">
            {freshPosts.map((value, index) => {
              if(value.data.title.substring(1,6) === "FRESH") {
                return <FreshCard key={index} postInfo={value.data}/>
              } else {
                return '';
              }
            })}
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default App;