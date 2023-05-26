import React, { FunctionComponent } from "react";
import { ProjectModel } from "./Data";

type props = {
    job: ProjectModel;
};

const WorkItem: FunctionComponent<props> = ({ job }) => {
    return (
        <article className="work__card">
            <img src={job.image} alt={job.title} className="work__img" />
            <h3 className="work_title">{job.title}</h3>
            <a href={job.demo} className="work__button" target="_blank" rel="">
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </article>
    );
};

export default WorkItem;
