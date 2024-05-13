import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDatas(data));
    }, []);

    // Function to chunk array into groups of size 'chunkSize'
    const chunkArray = (arr, chunkSize) => {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunkedArray.push(arr.slice(i, i + chunkSize));
        }
        return chunkedArray;
    };

    return (
        <div>
            <Navbar />

            <div className="carousel w-full h-auto mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/S08tX2X/Depositphotos-315556372-s-2019.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Mf4ZKFj/summer-crafts-6616fd97a7b65.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/qj2BL7H/maxresdefault.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/0Fc0sYN/rainbow-crafts-hero-0.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4" style={{ marginTop: '2%', marginLeft: '25%', marginBottom: '2%' }}>
                {chunkArray(datas, 3).map((chunk, index) => (
                    <div key={index} className="grid grid-cols-1 gap-4">
                        {chunk.map(item => (
                            <div key={item.id} className="outline outline-offset-2 outline-4">
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img src={item.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item.item_name}</h2>
                                        <b><h5>{item.subcategory_Name}</h5></b>
                                        <p>{item.short_description}</p>
                                        <p>Price: {item.price}</p>
                                        <p>Rating: {item.rating}</p>
                                        <p>Customization: {item.customization}</p>
                                        <p>Processing Time: {item.processing_time}</p>
                                        <p>Stock: {item.stockStatus}</p>
                                        <p>Email: {item.User_Email}</p>
                                        <p>Name: {item.User_Name}</p>
                                        <div className="card-actions justify-end">
                                            <p>{item.segment_name}</p>
                                            <button className="btn btn-primary">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Home;
