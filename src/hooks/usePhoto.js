import React, { useState, useEffect } from 'react';

//interface Avatar {
//  id: number;
// data: string;
// image: string;
// }

export default function usePhoto() {
    
    const [photo, setPhoto] = useState([])

    function fetchPhoto() {

        const array =
            [
                {
                    title: "Image 1",
                    data: "2021-06-20 08:15:23",
                    img: "../Images/ImgA.jpg",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi elit, effic itur et volutpat sed, fermentum ut arcu."
                },
                {
                    title: "Image 2",
                    data: "2021-06-20 08:15:23",
                    img: "../Images/ImgB.jpg",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi elit, effic itur et volutpat sed, fermentum ut arcu."
                },
                {
                    title: "Image 3",
                    data: "2021-06-20 08:15:23",
                    img: "../Images/ImgC.jpg",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi elit, effic itur et volutpat sed, fermentum ut arcu."
                },
                
            ];

        const Temp = photo.concat(array)
        setPhoto(Temp)

    }

    useEffect(() => {
        setPhoto(
            [
                {
                    title: "Image 1",
                    data: "2021-06-20 08:15:23",
                    img: "../Images/ImgA.jpg",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi elit, effic itur et volutpat sed, fermentum ut arcu."
                },
                {
                    title: "Image 2",
                    data: "2021-06-20 08:15:23",
                    img: "../Images/ImgB.jpg",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi elit, effic itur et volutpat sed, fermentum ut arcu."
                },
                {
                    title: "Image 3",
                    data: "2021-06-20 08:15:23",
                    img: "../Images/ImgC.jpg",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi elit, effic itur et volutpat sed, fermentum ut arcu."
                },
                
            ]
        )
    }, [])

    return {
        fetchPhoto,
        photo
    }
}