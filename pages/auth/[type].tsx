import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { EmptyLayout } from '../../components/layouts'
import { MAZUAY_PAGE_DATA, PAGE_DATA } from '../../data';

const getDynamicComponent = (name: string) => dynamic(
    () => import(`../../components/${name}`),
    {
        // loading: () => <p>Loading...</p>
    }
);

const Auth: NextPage = () => {
    const router = useRouter();
    const { type } = router.query;

    const data = type === 'form'
        ? MAZUAY_PAGE_DATA
        : PAGE_DATA;

    return (
        <EmptyLayout title={'Form page'} description={'Dynamic form generation, using a custom configuration.'}>

            <div className='m-auto'>
                {data.map((component, index) => {
                    const Dynamic = getDynamicComponent(component.type);
                    return <Dynamic key={index} {...component.props} />;
                })}
            </div>

        </EmptyLayout>
    )
}

export default Auth
