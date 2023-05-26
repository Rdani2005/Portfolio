import { FunctionComponent, useEffect, useState } from "react";
import { NavModel, ProjectModel, ProjectNav, projectsData } from "./Data";
import WorksItem from "./WorkItem";

const Jobs: FunctionComponent = () => {
    const [item, setItem] = useState<NavModel>({ name: "all" });
    const [projects, setProjects] = useState<ProjectModel[] | []>([]);
    const [active, setActive] = useState<number>(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter(
                (project) =>
                    project.category.toLowerCase() === item.name.toLowerCase()
            );
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (
        e: React.MouseEvent<HTMLSpanElement>,
        index: number
    ) => {
        setItem({ name: e.currentTarget.textContent! });
        setActive(index);
    };

    return (
        <>
            <div className="work__filters">
                {ProjectNav.map((item, i) => (
                    <span
                        className={`work__item ${
                            active === i && "active-work"
                        }`}
                        key={i}
                        onClick={(e) => handleClick(e, i)}
                    >
                        {item.name}
                    </span>
                ))}
            </div>
            <div className="work__container container grid">
                {projects.map((item, i) => (
                    <WorksItem job={item} key={i} />
                ))}
            </div>
        </>
    );
};

export default Jobs;
