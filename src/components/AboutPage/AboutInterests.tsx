import React from 'react';
import style from '../../styles/AboutPage/AboutInterests.module.css'

const AboutInterests: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.section}>
                <h2 className={style.title}>Video Games</h2>
                <p className={style.textContent}> Video games have been my favorite pastime ever since I was a child. I’m especially drawn to games with rich stories (like RPGs and JRPGs) because they ignite my imagination and passion for storytelling. It was through gaming that I first became fascinated by programming, which eventually led me to pursue software engineering. I have to add that I am a huge Nintendo fan.</p>
            </div>
            <div className={style.section}>
                <h2 className={style.title}>Reading</h2>
                <p className={style.textContent}>I love starting the day with a good book and a warm cup of tea or coffee. I’m a huge fan of Fantasy and Science Fiction since I love escaping into worlds different from reality. Reading fuels my imagination and inspires me in my creative ventures.</p>
            </div>
            <div className={style.section}>
                <h2 className={style.title}>Soccer</h2>
                <p className={style.textContent}>Soccer has been a part of my life since childhood. I’ve played every year, competitively in my local league. It remains my favorite way to stay active. Beyond the exercise, I cherish the camaraderie of playing a sport I love alongside teammates.</p>
            </div>
            <div className={style.section}>
                <h2 className={style.title}>Workouts</h2>
                <p className={style.textContent}>I enjoy staying active and often focus on calisthenics when I work out. There’s something rewarding about using your own body weight to engage multiple muscle groups and mastering creative exercises (like handstands) that challenge both strength and balance. It’s a fun way to build strength and learn new skills.</p>
            </div>
            <div className={style.section}>
                <h2 className={style.title}>Creative Projects</h2>
                <p className={style.textContent}>I am deeply creative, whether I’m developing small video game projects or building intricate fantasy worlds. I love exploring different forms of artistic expression and continuously honing my creative skills. These projects are where my imagination truly comes to life.</p>
            </div>
        </div>
    );
}

export default AboutInterests;