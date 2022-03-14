import { EmptyLayout } from '../../src/core/components/layouts'
import ImageTop from '../../src/core/components/ui/ImageTop';

export const SuccessPage = () => {
    return (
        <EmptyLayout title={'Home Page'} description={'Dynamic form generations'} classNames={'grid justify-items-center content-center'}>


            <ImageTop img='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Check_green_circle.svg/1200px-Check_green_circle.svg.png' height='350px' description='Success logo' />


        </ EmptyLayout>
    )
}

export default SuccessPage;