import type { NextPage } from 'next'
import { EmptyLayout } from '../components/layouts'


const Home: NextPage = () => {
  return (
    <EmptyLayout title={'Home Page'} description={'Dynamic form generations'}>

      <div className='m-auto'>
        <h1 className='uppercase text-3xl font-semibold'>Dynamically generated components</h1>

        <p className='text-sm text-orange-700 mt-3 text-center'>
          This project is an example using dynamically generation page.
        </p>

      </div>

    </EmptyLayout>
  )
}

export default Home
