import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'react-image-resizer';
 
export default class Carousell extends Component {
    render() {
        return (
            <Carousel showArrows={true}>
                <div>
                    <Image src="http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
                </div>
                <div>
                    <Image src="http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
                </div>
                <div>
                    <img src="http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
                </div>
                <div>
                    <img src="http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" />
                </div>
            </Carousel>
        )
    }
}