import React from "react";
import {Link} from 'react-router-dom';
import s from "./PostItem.module.scss";


const PostItem = ({title, createdAt, _id}) => {
    return (
        <div className={s.post__item}>
            <a href={`/post/${_id}`}>
                <h2>{title}</h2>
            </a>
            <p>
                <i>Posted on {createdAt}</i>
                <a href={`/post/${_id}`} className={s.btn}> Remove </a>
                <a href={`/post/${_id}`}> Edit </a>
            </p>
        </div>
    )


};

export  default PostItem;