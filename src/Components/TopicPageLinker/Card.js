import React from 'react'

export const Card = props => {

    return (
        <article className="card topic-item">
            <header className="card-header text-center">
            <h1>
                    {props.page.name}
            </h1>
            </header>
            <div className="card-image">
                <img src={props.page.image} className="image-fluid" alt="someCardImage" />
            </div>
            <div className="card-content">
                <h2 className="topic-likes">{props.page.likes} Likes</h2>
                <p className="topic-description"> {props.page.description} </p>
            </div>
            <div className="card-actions">
                <button className="btn btn-primary"> Visit Page</button>
            </div>
        </article>
    );
}