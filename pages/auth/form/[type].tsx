import type { NextPage } from 'next'
import { useRouter } from 'next/router';

import { EmptyLayout } from '../../../src/core/components/layouts'
import { CHANGE_PASSWORD, PAGE_NO_FORM, REGISTER_CREDENTIALS } from '../../../data';
import { getDynamicComponent } from '../../../src/helpers';

const Auth: NextPage = () => {
    const router = useRouter();
    const { type } = router.query;

    const data = (
        () => {
            switch (type) {
                case 'register-credentials':
                    return REGISTER_CREDENTIALS;
                case 'change-password':
                    return CHANGE_PASSWORD;

                default:
                    return PAGE_NO_FORM;
            }
        }
    )();

    return (
        <EmptyLayout title={'Form page'} description={'Dynamic form generation, using a custom configuration.'} classNames={'grid justify-items-center content-center'}>

            {data.map((component, index) => {
                const Dynamic = getDynamicComponent(component.type);
                return <Dynamic key={index} {...component.props} />;
            })}

        </EmptyLayout>
    )
}

export default Auth
