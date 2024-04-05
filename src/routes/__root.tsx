import {createRootRoute, Outlet} from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";

export const Route = createRootRoute({
    component: () => (
        <div className={"px-10 py-5 bg-primary-foreground w-full h-screen"}>
            <Outlet/>
            <TanStackRouterDevtools/>
        </div>
    ),
    errorComponent: () => (<div>
        shit broke
    </div>)
})

