import React, { useEffect, useState } from 'react';
import '../Styles/Home.css';
import { blogData } from '../Data/Mock-Data';
import { useDispatch, useSelector } from 'react-redux';
import { addData, blogDetail, categorySelect } from '../Redux/BlogSlice';
import { FaUser } from 'react-icons/fa';
//
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { blogs, category } = useSelector(store => store.blog);

    useEffect(() => {
        dispatch(addData(blogData));
    }, []);

    const getBlogDetail = (id) => {
        dispatch(blogDetail(id));
        navigate('/blog-detail');
    }

    const getCategory = (ctg) => {
        if (ctg === "All") {
            dispatch(categorySelect(""));
        } else {
            dispatch(categorySelect(ctg)); s
        }
    }

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = category.length > 0 ? category.slice(itemOffset, endOffset) : blogs.slice(itemOffset, endOffset);
    const pageCount = Math.ceil((category.length > 0 ? category.length : blogs.length) / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % (category.length > 0 ? category.length : blogs.length);
        setItemOffset(newOffset);
    }
    const categories = ["All", "Startups", "Security", "AI", "Apps", "Tech"];

    return (
        <div className='Home'>
            <div className='home-catgeory'>
                <ul>
                    {categories.map((ctg, index) => (
                        <li key={index} onClick={() => getCategory(ctg)}>{ctg}</li>
                    ))}
                </ul>
            </div>
            <div className='home-conatiner'>
                <div className='home-left'>
                    {currentItems?.map((item) => (
                        <div key={item.id} onClick={() => getBlogDetail(item.id)} className='home-items'>
                            <img src={item.image} alt="" />
                            <p>{item.title}</p>
                            <div className='blog-user'>
                                <div className='blog-user-title'>
                                    <FaUser />
                                    <p>{item.author}</p>
                                </div>
                                <p>Published: {item.published_date}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='home-right'>
                    <div>
                        <h2>Latest Blogs</h2>
                        <div className='latest-blogs'>
                            {blogs?.slice(25, 29).map((item) => (
                                <div key={item.id} className='latest-title'>
                                    <p>{item.title}</p>
                                    <h3 onClick={() => getBlogDetail(item.id)}>Read Now →</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2>Popular Blogs</h2>
                        <div className='latest-blogs'>
                            {blogs?.slice(35, 38).map((item) => (
                                <div key={item.id} className='latest-title'>
                                    <p>{item.title}</p>
                                    <h3 onClick={() => getBlogDetail(item.id)}>Read Now →</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='paginate'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next >"
                    previousLabel="< Previous"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    containerClassName="pagination"
                    activeClassName="active"
                />
            </div>
        </div>
    );
}


export default Home
