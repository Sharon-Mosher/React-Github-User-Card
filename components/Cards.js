import React from 'react';


const Cards = props => {
    return (
        <div className = "card">
            <img src={props.item.img}/>
            <div class = "card-info">
                <h2>{props.item.name}</h2>
                <p>{props.item.username}</p>
                <p>< a href = {props.item.link}></a></p>
                <p>Followers: {props.item.followers}</p>
                <p>Following: {props.item.following}</p>
            </div>
        </div>
    )
}

export default Cards;