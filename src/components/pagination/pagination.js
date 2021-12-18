import { Box } from '@mui/system';
import React from 'react';

const Paginations = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="center-page">
      <div className='pagination'>
        {pageNumbers.map(number => (
          <Box key={number} className='page-item'>
            <a onClick={() => paginate(number)} className='page-link'>
              {number}
            </a>
           
          </Box>
        ))}
      </div>
    </nav>
  );
};
export default Paginations;