import React, { useEffect } from 'react';
import '../Styles/Home.css';
import { blogData } from '../Data/Mock-Data';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../Redux/BlogSlice';
import { FaUser } from 'react-icons/fa';

const Home = () => {
    const dispatch = useDispatch();
    const { blogs } = useSelector(store => store.blog)

    useEffect(() => {
        (dispatch(addData(blogData)))
    }, [])

    return (
        <div className='Home'>
            <div className='home-conatiner'>
                <div className='home-left'>
                    {blogs?.slice(0, 9).map((item) => (
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
                </div>
            </div>
            <div className='paginate'>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                </ul>
            </div>
        </div>
    )
}

export default Home
