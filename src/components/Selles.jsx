import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Loading from '../Loading';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const Selles = () => {

  const [sells1, setSells] = useState([]);




  //fetch the selles data in the api  and use selles1 instead of selles
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://your-api-url/sells');
        setSells(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);
  //use Selles1 in the api 
  const [loading, setLoading] = useState(false)

  const selles = [
    {
      sell_id: 0,
      title: 'Love',
      author: 'john doe',
      price: '200$',
      phone: '123-456-7890',
      status: 'sold'
    },
    {
      sell_id: 1,
      title: 'Another Book Title',
      author: 'Another Author',
      price: '150$',
      phone: '987-654-3210',
      status: 'available'
    },
  ];









  return (
    <div className='pt-5' >
      {loading && <Loading />}
      <Link to={`/sells/`} className='bg-slate-600  text-green-400  px-4 p-3 rounded-md  text-center cursor-pointer'
      >Sold Books </Link>
      <div className="flex flex-col  mt-4">
        <div className='p-4  border-slate-500 border-t-4  shadow-2xl rounded-lg mt-4'>
          <table className='w-full h-full mt-5 text-center  '>
            <tbody className='justify-around py-10 '>
              <tr className='text-slate-600 text-md bg-slate-300  shadow-md font-bold pt-4' style={{ textAlign: "start" }}>
                <td>sell_id </td>
                <td>title</td>
                <td>author</td>
                <td>price</td>
                <td>phone</td>
                <td>status</td>
              </tr>
              {selles
                && selles
                  .map((book) => (
                    < >
                      <tr key={book.sell_id} className=' py-10 mb-10 text-slate-500 ' style={{ textAlign: "start", margin: 32 }}>
                        <td>{book.sell_id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.price}</td>
                        <td>{book.phone}</td>
                        {book.status === 'available' ? <td className='text-green-500 font-bold'>{book.status}</td> :
                          <td className='text-yellow-500 font-bold'>{book.status}</td>
                        }
                      </tr>

                    </>

                  )
                  )
              }
            </tbody>
          </table>
        </div>

      </div>
    </div>

  )
}

export default Selles