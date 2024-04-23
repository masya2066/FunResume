import testing from "../images/datastore-svgrepo-com.svg"
import backend from "../images/cloud-storage-svgrepo-com.svg"
import frontend from "../images/cloud-shell-svgrepo-com.svg"
import auto from "../images/compute-engine-svgrepo-com.svg"

export const SKILLS = [
    {
        title: "Testing",
        icon: testing,
        skills: [
            {skill: "Automation testing", percentage: "91%"},
            {skill: "Hand testing", percentage: "94%"},
            {skill: "API testing", percentage: "89%"},
            {skill: "Overload testing", percentage: "79%"},
        ]
    },
    {
        title: "Automation",
        icon: auto,
        skills: [
            {skill: "Cypress", percentage: "95%"},
            {skill: "JavaScript/TypeScript", percentage: "92%"},
            {skill: "Docker", percentage: "73%"},
            {skill: "CI/CD", percentage: "62%"},
        ]
    },
    {
        title: "Frontend",
        icon: frontend,
        skills: [
            {skill: "React", percentage: "55%"},
            {skill: "React Native", percentage: "67%"},
            {skill: "HTML5", percentage: "75%"},
            {skill: "CSS/SCSS", percentage: "43%"},
        ]
    },
    {
        title: "Backend",
        icon: backend,
        skills: [
            {skill: "Golang", percentage: "56%"},
            {skill: "MySQL/PostgreSQL", percentage: "58%"},
            {skill: "Nginx", percentage: "83%"},
            {skill: "Linux", percentage: "69%"},
        ]
    }
]


export const WORK_EXPERIENCE = [
    {
        title: "Automation QA Engineer at MSOFT",
        date: "January 2024 - Now()",
        responsibilities: [
            "Hand / Automation (Cypress) testing",
            "Backend testing",
            "Write and update testing documentation",
            "Regression, Smoke and Documentation testing",
            "Data base testing, work with Nginx and Symfony logs"
        ]
    },
    {
        title: "Automation QA Engineer at IBIS",
        date: "June 2023 - November 2023",
        responsibilities: [
            "Hand / Automation (PyTest) testing",
            "Mobile testing",
            "Write and update testing documentation",
            "Regression, Smoke and Documentation testing",
            "Data base testing, work with Nginx and Symfony logs"
        ]
    },
    {
        title: "QA Engineer at Gazprom Bank",
        date: "April 2022 - April 2023",
        responsibilities: [
            "Hand testing",
            "Documentation testing",
            "API / Integration testing",
            "Technical support and resolve client problems",
            "Data base testing, work with Nginx and Symfony logs"
        ]
    },
    {
        title: "QA Engineer at ITS",
        date: "November 2019 - December 2023",
        responsibilities: [
            "Hand testing",
            "Documentation testing",
            "Bug reports and create test cases",
            "Technical support and resolve client problems",
            "Data base testing, work with Nginx and Symfony logs"
        ]
    },
]