import dynamic from "next/dynamic";
import { DynamicComponent } from '../interfaces/DynamicComponent';

const renderedComponents: Record<string, any> = {};

export const getDynamicComponent = (name: string) => dynamic(
    () => import(`../core/components/${name}`),
    {
        // loading: () => <p>Loading...</p>
    }
);

export const renderDynamicComponent = (
    component: DynamicComponent,
    props?: any
) => {
    // If not send initiallize the props here
    if (!props) {
        props = {}
    }

    const Dynamic = cacheComponent(component);
    if (component.props) {
        props = {
            ...component.props,
            ...props,
        }
    }
    return <Dynamic {...props} />
}

export const cacheComponent = ({ type, uid }: DynamicComponent) => {
    const DynamicCached = renderedComponents[uid] ?? false;
    if (!DynamicCached) {
        const Dynamic = getDynamicComponent(type);
        renderedComponents[uid] = Dynamic;
    }
    return renderedComponents[uid];
}