import { useFetch } from '@/hooks/useFetch'
import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const {id} = useParams()
  const {data} = useFetch(`/product/get/${id}`)
  
  console.log(data);
  
  return (
    <div className='container flex flex-wrap items-center max-h-[80vh] py-20'>
        <div className='border-4 p-6 grid grid-cols-2'>
            <div className=''>
                <img src={data?.image} alt="" />
            </div>
            <div className='border-2 p-3 flex flex-wrap flex-col gap-5'>
              <h2 className='text-[35px]'><span className='text-violet-900 font-bold'></span> Home lorem ipsum dolor elit.</h2>
              <p><span className='text-green-800 font-bold'>Description:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas optio, eaque debitis suscipit ipsam repellendus distinctio eligendi facilis vitae necessitatibus?</p>
              <p className='font-bold'><span className='text-red-700 font-bold'>Price:</span>💲{data?.price}</p>
              <button className='bg-blue-600 w-[40%] text-white px-10 py-2 rounded-md'>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default Detail




