import { createBrowserRouter } from "react-router-dom"
import Blogs from "../Components/Blogs"
import Portfolio from "../Components/Portfolio"
import ProjectDetails from "../Components/ProjectDetails"
import Main from "../Layout/Main"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Portfolio />
            },
            {
                path: "/home",
                element: <Portfolio />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/project/:id",
                element: <ProjectDetails />,
                loader: async ({ params }) => {
                    return fetch(`projectDetails.json/${params.id}`)
                }
            }
        ]
    }
])