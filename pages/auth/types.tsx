import { EmptyLayout } from '../../src/core/components/layouts';
import { TYPES_AUTH } from '../../data/typesAuth';
import Link from 'next/link';
import { ImageTop } from '../../src/core/components/ui/ImageTop';
import Title from '../../src/core/components/informations/Title';
import { RedirectButton } from '../../src/core/components/actions/RedirectButton';

export const Types = () => {
    return (
        <EmptyLayout title={'Home Page'} description={'Dynamic form generations'} classNames={'grid justify-items-center content-center'}>

            <div className="">

                <ImageTop img='https://download.logo.wine/logo/The_Boring_Company/The_Boring_Company-Logo.wine.png' height='250px' description='Company logo' />

                <Title title='Seleccione el tipo de autentificaión' />

                <div className="w-full md:w-96 grid grid-cols-1 md:grid-cols-2 grid-flow-col gap-4 mx-auto mt-4">

                    {TYPES_AUTH.map((authType, index) => {
                        return (
                            <Link href={authType.url} key={index}>
                                <div className='p-4 cursor-pointer rounded-lg shadow-lg col-span-1'>

                                    <img style={{
                                        height: '75px',
                                        display: 'block',
                                        margin: 'auto',
                                    }} src={authType.icon} alt={`Image icon ${authType.type}`} />

                                    <p className='font-semibold text-xl mt-auto text-center mt-2'>{authType.label}</p>

                                </div>
                            </Link>
                        );
                    })}

                </div>


                <RedirectButton label='Cancelar' href='https://www.google.com/' />
            </div>

        </EmptyLayout>
    )
}

export default Types;
