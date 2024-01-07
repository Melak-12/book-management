import { Avatar, Badge, Button, DatePicker, Form, Image, Input, InputNumber, Modal, Popover, Progress, Radio } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Loading from '../Loading';
import { ShoppingCartOutlined } from '@ant-design/icons'
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '../config/firebase';

const Carts = () => {
  const [carts, setCarts] = useState([]);

  const [form] = Form.useForm();
 

  //fetch the books data in the api  and use books instead of books1
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://your-api-url/books');
        setCarts(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);
  //use carts in the api 
  const carts1 = [
    {

      new_order_id: 1,
      name: 'John',
      phone_number: '09323232',
      location: 'washington dc',
      address: '23-23-2011',
      book_title: 'Love',
      author: 'Doe',

    },
    {

      new_order_id: 2,
      name: 'John',
      phone_number: '09323232',
      location: 'washington dc',
      address: '23-23-2011',
      book_title: 'Love',
      author: 'Doe',

    },
    {

      new_order_id: 3,
      name: 'John',
      phone_number: '09323232',
      location: 'washington dc',
      address: '23-23-2011',
      book_title: 'Love',
      author: 'Doe',

    },
    {

      new_order_id: 4,
      name: 'John',
      phone_number: '09323232',
      location: 'washington dc',
      address: '23-23-2011',
      book_title: 'Love',
      author: 'Doe',

    },
  ]




  return (
    <div className='pt-5' >
      {<Link to={`/cart/`} className='   bg-slate-600  text-green-400  px-4 p-3 rounded-md  text-center cursor-pointer'
      >Cart
        <Badge size="small" count={carts1.length}>
          <Avatar size="small" className='text-green-500 mx-3' icon={<ShoppingCartOutlined />} />
        </Badge>
      </Link>}
      <div className="flex flex-col  mt-4">


        <div className='p-4  border-slate-500 border-l-4  shadow-2xl rounded-lg mt-4'>

          <table className='w-full h-full mt-5 text-center  '>
            <tbody className='justify-around py-10 '>
              <tr className='text-slate-600 text-md bg-slate-300  shadow-md font-bold pt-4' style={{ textAlign: "start" }}>
                <td>new_order_id </td>
                <td>name</td>
                <td>phone_number</td>
                <td>location</td>
                <td>address</td>
                <td>book_title</td>
                <td>author</td>

              </tr>
              {carts1
                && carts1
                  .map((book) => (
                    < >
                      <tr key={book.new_order_id} className=' py-10 mb-10 text-slate-500 ' style={{ textAlign: "start", margin: 32 }}>
                        <td>{book.new_order_id}</td>
                        <td>{book.name}</td>
                        <td>{book.phone_number}</td>
                        <td>{book.location}</td>
                        <td>{book.address}</td>
                        <td>{book.book_title}</td>
                        <td>{book.author}</td>


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

export default Carts