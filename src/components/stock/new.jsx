
import React, {useState, useEffect} from 'react';
import { createTheme, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link, useParams } from 'react-router-dom';
import "./stock.css";
import { FaRegNewspaper } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Grid } from "@mui/material";
import {db} from "../../Firebase";
import { onSnapshot, collection, query, where, getDocs, limit, orderBy, toDate, get } from "firebase/firestore";
import Posts from '../pagination/post';
import SideMenu from '../SideMenu';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Kanit',
      'sans-serif',
    ].join(','),
  },
});

function News() {
  const { stock } = useParams();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [ViewerIP, setViewerIP] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      axios.get("https://api.ipify.org?format=json")
      .then((res)=>{if(res.data){setViewerIP(res.data.ip.toString().replaceAll(".", "-"))}})

        const newsRef = collection(db, "News");
        const q = query(newsRef, where('tag', 'array-contains-any', [stock]), orderBy('date', 'desc'), limit(900))
          onSnapshot(q, (snapshot)=>{
            snapshot.docs.map((doc)=>{
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
  return (
      <>
      <SideMenu focus="Search"/>
      <div className="container">
        <Typography component="div" theme={theme}>
        {/* <div className='stock-box'>
        <Box className="stock-title">{stock}</Box>
        </div> */}
        <Typography variant='h2'>{stock}</Typography>
            <Box>Page: {currentPage}</Box>
          <button className="link-fundamental"><Link className="linkto-new" to={`/search/${stock}`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="overlink">
            <FaRegNewspaper className="link-logo" />
            <Box className="link-fundamental-text">
            &nbsp;&nbsp;&nbsp;Fundamental&nbsp;
            </Box>
            
            <IoIosArrowForward
              className="link-logo"
              style={{ color: "#2EAA49" }}
            /></div></Link>
          </button>
        </Typography>
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
      
    );
  }
  
  export default News;