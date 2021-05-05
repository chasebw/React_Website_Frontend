import React from 'react'
import {Card} from './Card'

// USe this link to adjust color schemes
// https://getbootstrap.com/docs/4.0/components/navbar/#color-schemes


export const TopicPageLinker = props => {

    const pages = [
        {name: "Sports",
        image: "./sports_image.jpg",
        likes: "12",
        description: "Page about various athletics.",
        },
        {name: "Photography",
        image: "./photography.jpg",
        likes: "16",
        description: "Page about insage photography.",
        },
        {name: "Music",
        image: "./music.jpg",
        likes: "8",
        description: "Page about beauitful sound.",
        },
        {name: "Skating",
        image: "./skating.jpg",
        likes: "21",
        description: "Page about awesome shredding.",
        }
    ]

    return (
        <div className="grid">
        {pages.map((post,indx) => <Card page={post} />)}
        </div>
    );
} 