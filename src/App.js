import React, { useState, useEffect} from 'react';
import './App.css';
import FreshCard from './Components/FreshCard';

function App() {
  const [freshPosts, setFreshPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      fetch("http://www.reddit.com/r/hiphopheads/hot.json?count=500")
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
    <div className = "App" >
      {freshPosts.map((value, index) => {
        return <FreshCard key={index} postInfo={value.data}/>
      })}
    </div>
  );
}

export default App;