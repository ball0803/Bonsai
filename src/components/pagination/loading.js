import React, { useState, useEffect } from 'react';
import Posts from './post';
import Pagination from './pagination';
import {db} from "../../Firebase";
import { onSnapshot, collection, query, where, getDocs, limit, orderBy, toDate } from "firebase/firestore";
import "./Pagination.css";
import { Box } from '@mui/system';

const Loading = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const newsRef = collection(db, "News");
      const q = query(newsRef, orderBy('date', 'desc'), limit(90))
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
    <Box className="stock-title">Recent News</Box>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <Box>Page: {currentPage}</Box>
    </>
  );
};

export default Loading;