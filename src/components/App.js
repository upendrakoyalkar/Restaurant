import React from "react";
import ReactDom from "react-dom/client";
import Header from "./Header.js"
import Body from "./Body.js";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import About from "./About.js";




                    
                    



const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {path : "/" ,
    element: <AppLayout />,
    },
    {path : "/about",
        element : <About />
    },
]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}  />);

