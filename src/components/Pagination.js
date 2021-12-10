import React, { useEffect,ReactDOM, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {db} from "../Firebase";
import { doc, onSnapshot, collection, query, where, getDocs, limit, orderBy, toDate } from "firebase/firestore";
import { async } from '@firebase/util';
// Example items, to simulate fetching from another resources.

function Post({ currentItems }) {
  // const dateArray = []
  // currentItems.map((item)=>{
  //   const d = new Date(item.date)
  //   console.log(item.date)
  //   dateArray.push(d)
  // })
  
  return (
    <>
    <ul>
      {currentItems &&
        currentItems.map((item, index) => (
          <li>
            {
              
            }
            <a href={item.link}>
              {item.pic ? <img src={item.pic} alt="" /> : null}
              <h1 className="hearder">{item.header}</h1>
              {item.summary ? <p>{item.summary}</p> : null}
              <time dateTime={item.date}>{item.date.toDate().toDateString()}</time>
            </a>
          </li>
        ))}
    </ul>
    </>
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
    <>
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
    </>
  );
}

export default PaginatedItems;