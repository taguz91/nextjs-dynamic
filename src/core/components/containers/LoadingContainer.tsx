import { DynamicComponent } from '../../../interfaces/DynamicComponent';
import { FC } from 'react';
import { getDynamicComponent } from '../../../helpers';

interface Props {
    childrens: DynamicComponent[];
}

export const LoadingContainer: FC<Props> = ({ childrens }) => {
    console.log('THIS IS LOADING')

    return (
        <>
            {
                childrens.map((component, index) => {
                    const Dynamic = getDynamicComponent(component.type);
                    return <Dynamic key={index} {...component.props
                    } />;
                })
            }
        </>
    );
}

export default LoadingContainer;