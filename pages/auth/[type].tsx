import type { NextPage } from 'next'
import { useRouter } from 'next/router';

import { EmptyLayout } from '../../components/layouts'
import { FORM_PAGE_DATA, PAGE_DATA } from '../../data';
import { getDynamicComponent } from '../../helpers';

const Auth: NextPage = () => {
    const router = useRouter();
    const { type } = router.query;

    const data = type === 'form'
        ? FORM_PAGE_DATA
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
