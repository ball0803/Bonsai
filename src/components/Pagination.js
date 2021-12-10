import React, { useEffect,ReactDOM, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {db} from "../Firebase";
import { doc, onSnapshot, collection, query, where, getDocs, limit, orderBy, toDate } from "firebase/firestore";
import { async } from '@firebase/util';
// Example items, to simulate fetching from another resources.
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import "./Pagination.css";

function Post({ currentItems }) {
  // const dateArray = []
  // currentItems.map((item)=>{
  //   const d = new Date(item.date)
  //   console.log(item.date)
  //   dateArray.push(d)
  // })
 
  
  return (
    <div>
    <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
      {currentItems &&
        currentItems.map((item, index) => (
          <Grid item xs={4}>
            {
              
            }
            <a class="link-newbox" href={item.link} target="_blank">
            <div className="new-box">
              {item.pic ? <img src={item.pic==='https://sp-ao.shortpixel.ai/client/q_lossless,ret_img/https://www.mitihoon.com/wp-content/uploads/2017/12/Blue-150x100.jpg' ? 'https://www.mitihoon.com/wp-content/uploads/2018/01/mitihoon.jpg':item.pic} alt="" width="100%"/> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsaCI-qKlHLUj70F15CT6NDY6ku49oiDRK__BYPuBGDz0lz-7CxCRx78qVDO-0Kku2d6c&usqp=CAU" alt="" width="100%"/>}
              <Box className="hearder">{item.header}</Box>
              {item.summary ? <Box className="summary">{item.summary.slice(0,100)}...</Box> : null}
              <Box className="date"><time dateTime={item.date}>{item.date.toDate().toDateString()}</time></Box>
              </div>
            </a>
            
          </Grid>
        ))}
    </Grid>
    </div>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [EndOffset, setEndOffset] = useState(0)

  const [Item, setItem] = useState([]);
  const newsRef = collection(db, "News");
  const q = query(newsRef, orderBy('date', 'desc'), limit(200))
  useEffect(() => {
    const getData = async () =>{
      onSnapshot(q, (snapshot)=>{
          snapshot.docs.map((doc)=>{
            setItem(Item => [...Item, doc.data()])
            // console.log(doc.data())
          })
      })
    }
  getData()    
  
  }, [])
  useEffect(() => {
    // Fetch items from another resources.
    setEndOffset(itemOffset + itemsPerPage)
    console.log(`Loading items from ${itemOffset} to ${EndOffset}`);
    setPageCount(Math.ceil(Item.length / itemsPerPage));
      
  }, [itemOffset, itemsPerPage]);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Item.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      <Post currentItems={Item.slice(itemOffset ,EndOffset)}/>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default PaginatedItems;