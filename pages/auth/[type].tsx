import type { NextPage } from 'next'
import { useRouter } from 'next/router';

import { EmptyLayout } from '../../src/core/components/layouts'
import { PAGE_DATA, PIN_FORM, RECOGNITION_FORM } from '../../data';
import { getDynamicComponent } from '../../src/helpers';
import { USER_REGISTER_FORM } from '../../data/userForm';

const Auth: NextPage = () => {
    const router = useRouter();
    const { type } = router.query;

    const data = (
        () => {
            switch (type) {
                case 'recognition':
                    return RECOGNITION_FORM;

                case 'pin':
                    return PIN_FORM;

                case 'register':
                    return USER_REGISTER_FORM;

                default:
                    return PAGE_DATA;
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
