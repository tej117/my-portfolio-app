import React from 'react';
import style from '../../styles/AboutPage/AboutIntro.module.css'

//Images
import profileImg from '../../assets/placeholder.jpg';

const AboutIntro: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.profile}>
                <div className={style.profileImage}>
                    <img src={profileImg} alt="Simran Cheema" />
                </div>
                <div className={style.profileText}>
                    <h2>Hi, I'm Simran!</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur earum aliquid, non reprehenderit corrupti, laboriosam delectus exercitationem veritatis eaque iure, amet ullam reiciendis excepturi dolorem placeat assumenda quia. Minima!</p>
                </div>
            </div>
        </div>
    );
}

export default AboutIntro;