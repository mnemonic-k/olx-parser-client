import './App.css';
import BasicPagination from './Components/Pagination';
import MediaCard from './Components/Card';
import AppHeader from './Components/Header';
import Search from './Components/Search';
import axios from 'axios';
import { useEffect, useState } from 'react';

const getOlxPosts = async (query) => {
  let url = 'http://localhost:4000/olx-parser/posts'
  
  const response = await axios.get(url, {
    params: {
    ...(query?.q ? {q: query.q}: {}),
    offset: query?.offset || 0,
    limit: 10
  }
})

  return response.data
}

function App() {
  const [pagination, setPagination] = useState({})
  const [posts, setPosts] = useState([])

  const fetchData = async (query) => {
    const result = await getOlxPosts(query);
    
    setPosts(result.data)

    setPagination(result.pagination)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <AppHeader/>
      <div style={{marginTop: 50}}>
      <Search onChange = {fetchData}/>
      
      <div style={{marginTop: 30, display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center'}}>
        {posts.map(item => (
      <MediaCard {...item} key={item.uuid}/>
        ))}
      </div>

      <div style={{marginTop: 30, marginBottom: 50, display: 'flex', justifyContent:'center'}}>
      <BasicPagination pagination={pagination} onChange = {fetchData}/>
      </div>

      </div>
    </div>
  );
}

export default App;
