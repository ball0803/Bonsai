import React, {useState, useEffect} from 'react';
import { createTheme, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link, useParams } from 'react-router-dom';
import "./stock.css";
import { FaRegNewspaper } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Grid } from "@mui/material";
import {db} from "../../Firebase";
import { onSnapshot, collection, query, where, getDocs, limit, orderBy, toDate, get, Timestamp } from "firebase/firestore";
import Posts from '../Home/post';
import SideMenu from '../SideMenu';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

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
  const { date } = useParams();
  const allStock = stock.split(",")
  const allDate = date.split(",")
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [ViewerIP, setViewerIP] = useState(null)

  console.log(posts)
  function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      axios.get("https://api.ipify.org?format=json")
      .then((res)=>{if(res.data){setViewerIP(res.data.ip.toString().replaceAll(".", "-"))}})

        const newsRef = collection(db, "News");
        var q;
        if ( stock === "None"){
          if(allDate[0]=== "null"){
            if(allDate[1]==="null"){
              q = query(newsRef, orderBy('date', 'desc'), limit(450))
            }else{
              q = query(newsRef, where("date", "<=", parseISOString(allDate[1])),orderBy('date', 'desc'), limit(450))
            }
          }else{
            if(allDate[1]==="null"){
              q = query(newsRef, where("date", ">=", parseISOString(allDate[0])), orderBy('date', 'desc'), limit(450))
            }else{
              q = query(newsRef, where("date", ">=", parseISOString(allDate[0])), where("date", "<=", parseISOString(allDate[1])),orderBy('date', 'desc'), limit(450))
            }
          }
        }else{
          if(allDate[0]=== "null"){
            if(allDate[1]==="null"){
              q = query(newsRef, where('tag', 'array-contains-any', allStock), orderBy('date', 'desc'), limit(450))
            }else{
              q = query(newsRef, where('tag', 'array-contains-any', allStock), where("date", "<=", parseISOString(allDate[1])),orderBy('date', 'desc'), limit(450))
            }
          }else{
            if(allDate[1]==="null"){
              q = query(newsRef, where('tag', 'array-contains-any', allStock), where("date", ">=", parseISOString(allDate[0])), orderBy('date', 'desc'), limit(450))
            }else{
              q = query(newsRef, where('tag', 'array-contains-any', allStock), where("date", ">=", parseISOString(allDate[0])), where("date", "<=", parseISOString(allDate[1])),orderBy('date', 'desc'), limit(450))
            }
          }
        }
        onSnapshot(q, (snapshot)=>{
          snapshot.docs.map((doc)=>{
              const data = doc.data()
              data['id'] = doc.id
              setPosts(posts => [...posts, data])
            })
        })
      setLoading(true);
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
        <Typography variant='h2'>News</Typography>
        <Typography variant='h5' style={{color: "green"}}>{stock === "None"? null : stock}{allDate[0] === "null" ? null : ` from '${parseISOString(allDate[0]).toDateString()}' `}{allDate[1] === "null" ? null : `up to '${parseISOString(allDate[1]).toDateString()}'`}</Typography>
          <Box>Page: {currentPage}</Box>
          {
          posts.length > 0 ? posts.length > 1 ? 
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
          :           
          <button className="link-fundamental">
            <Link className="linkto-new" to={`/search/${stock}`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="overlink">
            <FaRegNewspaper className="link-logo" />
            <Box className="link-fundamental-text">
            &nbsp;&nbsp;&nbsp;Fundamental&nbsp;
            </Box>
            
            <IoIosArrowForward
              className="link-logo"
              style={{ color: "#2EAA49" }}
            /></div>
            </Link>
          </button>
          :
          null
          }
        </Typography>
        <br/>
        {posts.length > 0 ? <Posts posts={currentPosts} loading={loading} ip={ViewerIP}/> 
        :
        <Typography variant='h4'>
          <PageviewOutlinedIcon fontSize='large'/>
          There current no document you search for...
        </Typography>
        }
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
  
  export default News;///