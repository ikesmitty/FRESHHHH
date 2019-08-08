import React, { useState, useEffect} from 'react';
import './App.css';
import FreshCard from './Components/FreshCard';

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
      <div className="NavBar">
        <h1>FRESH HipHopHeads Posts</h1>
      </div>
      {freshPosts.map((value, index) => {
        if(value.data.title.substring(1,6) === "FRESH") {
          return <FreshCard key={index} postInfo={value.data}/>
        } else {
          return '';
        }
      })}
    </div>
  );
}

export default App;