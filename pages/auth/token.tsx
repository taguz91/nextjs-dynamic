import React from 'react'
import TextInput from '../../src/core/components/inputs/TextInput';
import { EmptyLayout } from '../../src/core/components/layouts'
import ImageTop from '../../src/core/components/ui/ImageTop';
import RedirectButton from '../../src/core/components/actions/RedirectButton';
import { useForm, SubmitHandler } from 'react-hook-form';

export const TokenPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit: SubmitHandler<any> = data => console.log('Data', data);

    console.log('Loaded pageeee!!!');

    return (
        <EmptyLayout title={'Home Page'} description={'Dynamic form generations'} classNames={'grid justify-items-center content-center'}>


            <ImageTop img='https://download.logo.wine/logo/The_Boring_Company/The_Boring_Company-Logo.wine.png' height='250px' description='Company logo' />


            <div className='w-3/5'>
                <p className='texttext-slate-500'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptas exercitationem, beatae debitis distinctio modi fugit molestias provident saepe qui autem perspiciatis aut dignissimos, molestiae placeat maiores laborum accusantium nisi!
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis, inventore hic dignissimos sit ipsam. Eaque nobis quo explicabo ipsa officiis praesentium illo quas laudantium dolor. Sunt maxime consequuntur adipisci?
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput register={register} errors={errors} name='token' label={'Ingresar token'} type={'number'} />

                <input type="submit" />
            </form>

            <RedirectButton label='Verificar' href='/auth/success' />

        </ EmptyLayout>
    )
}

export default TokenPage;