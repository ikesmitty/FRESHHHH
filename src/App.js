import React, { useState, useEffect} from 'react';
import './App.css';
import FreshCard from './Components/FreshCard';
import { Col } from 'react-bootstrap';

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
          <Col></Col>
          <Col xs="12" md="7">
            {freshPosts.map((value, index) => {
              if(value.data.title.substring(1,6) === "FRESH") {
                return <FreshCard key={index} postInfo={value.data}/>
              } else {
                return '';
              }
            })}
          </Col>
          <Col></Col>
        </div>
      </div>
    </div>
  );
}

export default App;