export type ProjectModel = {
    id: number;
    image: string;
    title: string;
    category: string;
    demo: string;
};

export const projectsData: ProjectModel[] = [
    {
        id: 1,
        image: "https://i.ibb.co/QD5Y40b/krypto.png",
        title: "Krypto",
        category: "Web",
        demo: "https://krypto.rdani2005.works/",
    },
    {
        id: 2,
        image: "https://i.ibb.co/RjLNNd6/orion.png",
        title: "Orion",
        category: "App",
        demo: "http://orion.orbitascr.com/",
    },
    {
        id: 3,
        image: "https://i.ibb.co/cgKNgJC/oss-landing.png",
        title: "Landing Page OSS",
        category: "Web",
        demo: "https://oss.orbitascr.com/landing",
    },
    {
        id: 4,
        image: "https://i.ibb.co/4Jgr8XP/la-floresta.jpg",
        title: "Finca Flora y Fauna",
        category: "Design",
        demo: "https://laflorestacr.com/",
    },
];

export type NavModel = {
    name: string;
};

export const ProjectNav: NavModel[] = [
    {
        name: "all",
    },
    {
        name: "Web",
    },
    {
        name: "App",
    },
    {
        name: "Design",
    },
];
