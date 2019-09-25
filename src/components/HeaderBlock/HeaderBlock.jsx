import React from "react";
import s from "./HeaderBlock.module.scss";


const HeaderBlock = ({title, description, imageUrl}) => {
    return (
        <div className={s.header__block} style={{backgroundImage: `url(${imageUrl})`}}>
            <div className={s.container}>
                <div className={s.header__block_overlay}>
                    <div className={s.header__block_center}>
                        <h1>{title}</h1>
                        <h3>{description}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBlock;