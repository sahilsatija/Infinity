import React, { useEffect, useState } from 'react';
import './pagination.css';

function Pagination(){
    const [data, setData] = useState([]);
    const [currentPage, SetCurrentPage] = useState(1);
    const perPageRecords = 5;
    const totalRecords = data.length;

    useEffect(() => {
        const fetchPosts = async() => {
            try {
                let response = await fetch('https://jsonplaceholder.typicode.com/posts');
                let data = await response.json();
                setData(data);
            } catch(err){
                console.log('err', err);
            }
        }
        fetchPosts();
    }, [])

    const slicedData = data.slice((currentPage - 1) * perPageRecords, currentPage * perPageRecords);

    const renderPosts = () => {
        return slicedData.map(post => (
            <tr><td>{post.title}</td></tr>
        ))
    }

    const handleClick = (page) => {
        SetCurrentPage(page);
    }

    const renderPages = () => {
        const pageCount = Math.ceil(totalRecords/perPageRecords);
        let i = 1;
        let pageNumbers = [];
        while(i <= pageCount){
            pageNumbers.push(i);
            i++
        }
        const pages = pageNumbers.map(page => (
            <span onClick={() => handleClick(page)} className={page === currentPage ? 'active' : ''}>{page}</span>
        ))
        return pages;
    }
    return (
        <>
        <div>Pagination component</div>
        <table>
            <thead><tr><th>Title</th></tr></thead>
            <tbody>{renderPosts()}</tbody>
        </table>
        <div className='pagination'>{renderPages()}</div>
        </>
    )
}

export default Pagination;