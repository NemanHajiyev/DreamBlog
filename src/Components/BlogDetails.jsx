import React from 'react';
import { useSelector } from 'react-redux';
import '../Styles/BlogDetail.css';

const BlogDetails = () => {
    const { detail } = useSelector(store => store.blog);

    return (
        <div className='detail-container'>
            {detail?.map((item) => (
                <div key={item.id} className='detail-content'>
                    <img src={item.image} alt={item.title} className='detail-image' />
                    <h1 className='detail-title'>{item.title}</h1>
                    <div className='blog-user'>
                        <p className='detail-author'>By {item.author}</p>
                        <p className='detail-date'>Published: {item.published_date}</p>
                    </div>
                    <p className='detail-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a libero a
                        justo posuere interdum. Integer tristique libero nec lacus luctus, ac malesuada
                        elit egestas. Suspendisse potenti. Phasellus consequat neque ac urna dictum,
                        eget tincidunt lacus hendrerit.
                    </p>
                    <p className='detail-text'>
                        Curabitur tristique augue ut odio rhoncus, et sagittis quam pellentesque. Nulla
                        facilisi. In hac habitasse platea dictumst. Vivamus malesuada magna et nisl
                        elementum, a scelerisque elit dictum. Suspendisse a est sit amet orci efficitur
                        suscipit.
                    </p>
                </div>
            ))}
        </div>
    );
};

export default BlogDetails;
