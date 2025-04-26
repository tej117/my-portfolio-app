import React from 'react';
import style from '../../styles/AboutPage/AboutInterests.module.css'

const AboutInterests: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.section}>
                <h2 className={style.title}>Video Games</h2>
                <p className={style.textContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores recusandae amet ipsam iste inventore debitis nostrum delectus esse accusantium, dolorum magni voluptas quisquam aliquam porro, exercitationem pariatur omnis laboriosam ea.</p>
            </div>
            <div className={style.section}>
                <h2 className={style.title}>Reading</h2>
                <p className={style.textContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores recusandae amet ipsam iste inventore debitis nostrum delectus esse accusantium, dolorum magni voluptas quisquam aliquam porro, exercitationem pariatur omnis laboriosam ea.</p>
            </div>
            <div className={style.section}>
                <h2 className={style.title}>Soccer</h2>
                <p className={style.textContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores recusandae amet ipsam iste inventore debitis nostrum delectus esse accusantium, dolorum magni voluptas quisquam aliquam porro, exercitationem pariatur omnis laboriosam ea.</p>
            </div>
            <div className={style.section}>
                <h2 className={style.title}>Workouts</h2>
                <p className={style.textContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores recusandae amet ipsam iste inventore debitis nostrum delectus esse accusantium, dolorum magni voluptas quisquam aliquam porro, exercitationem pariatur omnis laboriosam ea.</p>
            </div>
            <div className={style.section}>
                <h2 className={style.title}>Creative Projects</h2>
                <p className={style.textContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores recusandae amet ipsam iste inventore debitis nostrum delectus esse accusantium, dolorum magni voluptas quisquam aliquam porro, exercitationem pariatur omnis laboriosam ea.</p>
            </div>
        </div>
    );
}

export default AboutInterests;