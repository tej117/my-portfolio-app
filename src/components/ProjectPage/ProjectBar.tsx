import React from "react";
import style from '../../styles/ProjectPage/ProjectBar.module.css'

type Props = {
    active: string;
}

const ProjectBar: React.FC<Props> = ({ active }) => {
    console.log("Active Section:", active);
    return (
        <div className={style.sidebar}>
            <ul>
                <li className={active === "project1" ? style.active : undefined}>
                    <a href="#project1">Project1</a>
                </li>
                <li className={active === "project2" ? style.active : undefined}>
                    <a href="#project2">Project2</a>
                </li>
            </ul>
        </div>
    );
}


export default ProjectBar;