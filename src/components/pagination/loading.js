import React, { useState, useEffect } from 'react';
import Posts from './post';
import { doc, setDoc } from "firebase/firestore"; 
import {db} from "../../Firebase";
import { onSnapshot, collection, query, where, getDocs, limit, orderBy, toDate } from "firebase/firestore";
import "./Pagination.css";
import { Box } from '@mui/system';
import SideMenu from '../SideMenu';
import Pagination from '@mui/material/Pagination';
import { Typography } from '@mui/material';
import axios from 'axios';

const Loading = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [ViewerIP, setViewerIP] = useState(null)
  // console.log(ViewerIP.ip.toString().replaceAll(".", "-"))

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      axios.get("https://api.ipify.org?format=json")
      .then((res)=>{if(res.data){setViewerIP(res.data.ip.toString().replaceAll(".", "-"))}})

      const newsRef = collection(db, "News");
      const q = query(newsRef, orderBy('date', 'desc'), limit(180))
        onSnapshot(q, (snapshot)=>{
            snapshot.docs.map((doc)=>{
              // console.log(doc.id)
            const data = doc.data()
            data['id'] = doc.id
            setPosts(posts => [...posts, data])
            })
        })
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const handleChange = (event, value) => {
    setCurrentPage(value);
    window.scroll(0, 0)
  };
  if (loading) {
    return <h2>Loading...</h2>;
  }else{
  return (
    <>
    <SideMenu focus="Home"/>
    <div className="container">
        <Typography variant="h2" style={{fontFamily: 'Kanit'}}>Recent News</Typography>
        <Box>Page: {currentPage}</Box>
      <br/>
        <Posts posts={currentPosts} loading={loading} ip={ViewerIP}/>
        <Pagination page={currentPage}
        className="center-page"
        count={Math.ceil(posts.length / postsPerPage)}
        variant='outlined'
        shape='rounded'
        showFirstButton
        showLastButton
        onChange={handleChange}
        size='large'
         />
        
    </div>
    
    </>
  );}
};

export default Loading;
