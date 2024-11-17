"use client"
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import BlogContent from './blogContent';


export default function PaginationComponent({ contents }) {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentContents = contents.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div>
            
            <BlogContent contents={currentContents}></BlogContent> 
            
            <Stack spacing={2} mt={2} mb={2} direction={'row'} justifyContent={'center'}>
                <Pagination
                    count={Math.ceil(contents.length / postsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Stack>
        </div>
    );
}
