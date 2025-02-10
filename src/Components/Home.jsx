import React, { useEffect, useState } from 'react';
import '../Styles/Home.css';
import { blogData } from '../Data/Mock-Data';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../Redux/BlogSlice';
import { FaUser } from 'react-icons/fa';
//
import ReactPaginate from 'react-paginate';


const Home = () => {
    const dispatch = useDispatch();
    const { blogs } = useSelector(store => store.blog)

    useEffect(() => {
        (dispatch(addData(blogData)))
    }, [])

    //Paginate
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = blogs.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(blogs.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % blogs.length;
        setItemOffset(newOffset);
    }

    return (
        <div className='Home'>
            <div className='home-catgeory'>
                <ul>
                    <li>All</li>
                    <li>Startups</li>
                    <li>Security</li>
                    <li>AI</li>
                    <li>Apps</li>
                    <li>Tech</li>
                </ul>
            </div>
            <div className='home-conatiner'>
                <div className='home-left'>
                    {currentItems?.map((item) => (
                        <div className='home-items'>
                            <img src={item.image} alt="" />
                            <p>{item.title}</p>
                            <div className='blog-user'>
                                <div className='blog-user-title'>
                                    <FaUser />
                                    <p>{item.author}</p>
                                </div>
                                <p>Published : {item.published_date}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='home-right'>
                    <div>
                        <h2>Latest Blogs</h2>
                        <div className='latest-blogs'>
                            {blogs?.slice(25, 29).map((item) => (
                                <div className='latest-title'>
                                    <p>{item.title}</p>
                                    <h3>Read Now →</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2>Popular Blogs</h2>
                        <div className='latest-blogs'>
                            {blogs?.slice(45, 48).map((item) => (
                                <div className='latest-title'>
                                    <p>{item.title}</p>
                                    <h3>Read Now →</h3>
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
    )
}

export default Home
