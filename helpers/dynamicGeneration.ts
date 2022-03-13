import dynamic from "next/dynamic";


export const getDynamicComponent = (name: string) => dynamic(
    () => import(`../components/${name}`),
    {
        // loading: () => <p>Loading...</p>
    }
);