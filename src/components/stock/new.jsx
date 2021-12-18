
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
  const handleChange = (event, value) => {
    setCurrentPage(value);
    window.scroll(0, 0)
  };
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
        const newsRef = collection(db, "News");
        const q = query(newsRef, where('tag', 'array-contains-any', [stock]), orderBy('date', 'desc'), limit(900))
          onSnapshot(q, (snapshot)=>{
              snapshot.docs.map((doc)=>{
              setPosts(posts => [...posts, doc.data()])
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
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
      <>
      <SideMenu focus="Search"/>
      <div className="container">
        <Typography component="div" theme={theme}>
        <div className='stock-box'>
        <Box className="stock-title">{stock}</Box>
            <Box>Page: {currentPage}</Box>
        </div>
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
        <Posts posts={currentPosts} loading={loading} />
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