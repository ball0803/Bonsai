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
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [ViewerIP, setViewerIP] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      axios.get("https://api.ipify.org?format=json")
      .then((res)=>{
        if(res.data){
          setViewerIP(res.data.ip.toString().replaceAll(".", "-"))
        }
        setLoading(true)
      })

      const newsRef = collection(db, "News");
      const q = query(newsRef, orderBy('date', 'desc'), limit(180))
        onSnapshot(q, (snapshot)=>{
            snapshot.docs.map((doc)=>{
              console.log(doc)
            const data = doc.data()
            data['id'] = doc.id
            setPosts(posts => [...posts, data])
            })
        })
    };

    fetchPosts();
   ;
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

  return (
    <>
      {loading ? 
      <> 
        <SideMenu focus="Home"/>
        <div className="container">
            <Typography variant="h2" style={{fontFamily: 'Kanit'}}>Recent News</Typography>
            <Box>Page: {currentPage}</Box>
          <br/>
            <Posts posts={currentPosts} ip={ViewerIP}/>
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
        :
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
        >
        <CircularProgress color="inherit" />
        </Backdrop>
      
      }
    </>
  );
};

export default Home;
