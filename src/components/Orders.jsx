import { Button, DatePicker, Form, Image, Input, InputNumber, Modal, Popover, Progress, Radio } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Loading from '../Loading';

const Orders = () => {
  const [orders1, setOrders] = useState([]);

 //fetch the orders data in the api  and use orders instead of orders1
 useEffect(() => {
  const fetchBooks = async () => {
      try {
          const response = await axios.get('https://your-api-url/books');
          setOrders(response.data);
      } catch (error) {
          console.error('Error fetching books:', error);
      }
  };

  fetchBooks();
}, []); 

// use order 1 from api
  const orders = [
    {
      order_id: 1,
      book_id: 1,
      username: 'JohnDoe',
      name: 'John',
      phone_number: '09323232',
      location: 'washington dc',
      address: '23-23-2011',
      type: ''
    }
    , {
      order_id: 2,
      book_id: 1,
      username: 'JohnDoe',
      name: 'John',
      phone_number: '09323232',
      location: 'washington dc',
      address: '23-23-2011',
      type: ''
    }
    , {
      order_id: 3,
      book_id: 1,
      username: 'JohnDoe',
      name: 'John',
      phone_number: '09323232',
      location: 'washington dc',
      address: '23-23-2011',
      type: ''
    }
    ,

  ]


  return (
    <div className='pt-5' >
      {<Link to={`/orders/`} className='   bg-slate-600  text-green-400  px-4 p-3 rounded-md  text-center cursor-pointer'
      >Orders  </Link>}
      <div className="flex flex-col  mt-4">


        <div className='p-4  border-slate-500 border-l-4  shadow-2xl rounded-lg mt-4'>

          <table className='w-full h-full mt-5 text-center  '>
            {/* <hr /> */}
            <tbody className='justify-around py-10 '>
              <tr className='text-slate-600 text-md bg-slate-300  shadow-md font-bold pt-4' style={{ textAlign: "start" }}>
                {/* <td>book_id</td> */}
                <td>order_id </td>
                <td>book_id </td>
                <td>username</td>
                <td>name</td>
                <td>phone_number</td>
                <td>location</td>
                <td>address</td>
                <td>type</td>
              </tr>
              {orders
                && orders
                  .map((book) => (
                    < >
                      <tr key={book.order_id} className=' py-10 mb-10 text-slate-500 ' style={{ textAlign: "start", margin: 32 }}>
                        <td>{book.order_id}</td>
                        <td className='text-green-500 font-bold cursor-pointer '>{book.book_id}</td>
                        <td>{book.username}</td>
                        <td>{book.name}</td>
                        <td>{book.phone_number}</td>
                        <td>{book.location}</td>
                        <td>{book.address}</td>
                        <td>{book.type}</td>


                      </tr>
                      
                    </>

                  ))
              }
            </tbody>
          </table>
        </div>

      </div>
    </div>

  )
}

export default Orders