import React from 'react'
import Header from './Header'
import ImageSlider from '../components/ImageSlider'
import Editor from './Editor'
import Bestseller from './Bestseller'
import slide1 from "../assets/image/slide1.png";
import slide2 from "../assets/image/slide2.jpg";
import Fluid from './Fluid'
import Blog from './Blog'
import Footer from './Footer'




function PageContent() {
    return (
        <div >
            <Header></Header>
            <ImageSlider h5={"SUMMER 2020"} h1={"NEW COLLECTİON"} h4={"We know how large objects will act, but things on a small scale."} button={"Shop Now"} image={[slide1, slide1]}></ImageSlider>
            <Editor></Editor>
            <Bestseller></Bestseller>
            <ImageSlider h5={"SUMMER 2020"} h1={"VITA CLASSIC PRODUCT"} h4={"We know how large objects will act, but things on a small scale."} button={"ADD TO CARD"} price={"16.48$"} image={[slide2, slide2]}></ImageSlider>
            <Fluid />
            <Blog />
            <Footer />
        </div>

    )
}

export default PageContent