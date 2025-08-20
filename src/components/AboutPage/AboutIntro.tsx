import React from 'react';
import style from '../../styles/AboutPage/AboutIntro.module.css'

//Images
import profileImg from '../../assets/Me.jpg';

const AboutIntro: React.FC = () => {
    return (
        <div>
            <div className={style.container}>
                <div className={style.profile}>
                    <div className={style.profileImage}>
                        <img src={profileImg} alt="Simran Cheema" />
                    </div>
                    <div className={style.profileText}>
                        <h2>Hi, I'm Simran!</h2>
                        <p>I’m a Software Engineering student at the University of Victoria, specializing in Artificial Intelligence. I’m passionate about using technology to solve real-world problems and am fascinated with projects that combine AI and robotics. When I’m not coding or experimenting with new tech, you’ll probably find me playing video games, reading novels, or dancing in my hip-hop classes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutIntro;