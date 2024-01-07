import { Button, DatePicker, Form, Image, Input, InputNumber, Modal, Popover, Progress, Radio } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import book11 from '../book1.jpeg'
import { DeleteOutlined } from '@ant-design/icons'
import Loading from '../Loading';
import { analytics, app, firestore } from '../config/firebase';
import { logEvent } from 'firebase/analytics';
import { getDatabase } from "firebase/database";

const Books = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [loading, setLoading] = useState(false)
    const [books, setBooks] = useState([]);

    const [form] = Form.useForm();

    
    //TODO check if the database is connected in your analytics 
        const database = getDatabase(app);
        console.warn("database is ,",database)

    //fetch the books data in the api  and use books instead of books1
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://your-api-url/books');
                setBooks(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching books:', error);
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);
    const books1 = [
        {
            book_id: 0,
            title: 'Love',
            author: 'john doe',
            image: book11,
            date: '23-23-2011',
            overview: '',
            num_of_pages: 10,
            genre: 'fiction',
            price: '200$',
            book_status: 'sold',
            rating: 0,
            amount: 0
        },
        {
            book_id: 1,
            title: 'Love',
            author: 'john ',
            image: '',
            date: '23-23-2011',
            overview: '',
            num_of_pages: 10,
            genre: 'fiction',
            price: '200$',
            book_status: 'sold',
            rating: 0,
            amount: 0
        },
        {
            book_id: 0,
            title: 'Love',
            author: 'john doe',
            image: book11,
            date: '23-23-2011',
            overview: '',
            num_of_pages: 10,
            genre: 'fiction',
            price: '200$',
            book_status: 'sold',
            rating: 0,
            amount: 0
        },
        {
            book_id: 0,
            title: 'Love',
            author: 'john doe',
            image: '',
            date: '23-23-2011',
            overview: '',
            num_of_pages: 10,
            genre: 'fiction',
            price: '200$',
            book_status: 'sold',
            rating: 0,
            amount: 0
        }

    ]

    const showModal = (book) => {
        setIsModalOpen(true);
        setSelectedBook(book);

    };


    const content = (id) => {
        return (
            <div>
                <p className='text-red-600'>Are you sure you want to delete ?</p>
                <div className="flex justify-around">
                    <span className='cursor-pointer' >no</span>
                    <span className='cursor-pointer' onClick={() => deleteBook(id)}>yes</span>

                </div>
            </div>
        );
    }
    const deleteBook = async (id) => {
        console.warn('book id to be deleted is', id)
        try {
            setLoading(true)
            await axios.delete(`https://localhost/api/books/${id}`).then(response => {
                console.warn('API delete data:', response.data);
            })
                .catch(error => {
                    console.error('API Error:', error);
                });

        } catch (error) {
            console.error('API Error:', error);

        } finally {
            setLoading(false)
        }
    }

    const handleOk = () => {
        setSelectedBook(null)
        setIsModalOpen(false);

    };
    const handleCancel = () => {
        setSelectedBook(null)

        setIsModalOpen(false);
    };

    const onFinish = async (values) => {

        const updatedValues = Object.keys(values)
            .filter((key) => form.isFieldTouched(key))
            .reduce((obj, key) => {
                obj[key] = values[key];
                return obj;
            }, {});

        try {
            setLoading(true)
            await axios.put(`https://localhost/api/books/${selectedBook._id}`, { ...updatedValues }).then(response => {
                console.warn('update books:', response.data);


            })
                .catch(error => {
                    console.error('API Error:', error);
                });



        } catch (error) {
            console.error('API Error:', error);

        } finally {
            setSelectedBook(null);
            form.resetFields();

            setIsModalOpen(false);
            setLoading(false)
        }


        console.warn('book id to be updated :', selectedBook.book_id);
        console.warn('Success - Updated Values:', updatedValues);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    return (
        <div className='pt-5' >
            {loading && <Loading />}
            {<Link to={`/addbook/`} className='   bg-slate-600  text-green-400  px-4 p-3 rounded-md  text-center cursor-pointer'
            >Add Book</Link>}
            <div className="flex flex-col  mt-4">
                <div className='p-4  border-green-500 border-t-4  shadow-2xl rounded-lg mt-4'>
                    <table className='w-full h-full mt-5 text-center  search-table-outter'>
                        <tbody className='justify-around py-10 '>
                            <tr className='text-slate-600 text-md bg-slate-300  shadow-md font-bold pt-4' style={{ textAlign: "start" }}>
                                <td>title</td>
                                <td>author</td>
                                <td>image</td>
                                <td>date</td>
                                <td>overview</td>
                                <td>num_of_pages</td>
                                <td>genre</td>
                                <td>price</td>
                                <td>book_status</td>
                                <td>rating</td>
                                <td>amount</td>
                                <td>Action</td>
                            </tr>
                            {books1
                                && books1
                                    .map((book) => (
                                        < >
                                            <tr key={book._id} className=' py-10 mb-10 text-slate-500 ' style={{ textAlign: "start", margin: 32 }}>
                                                <td>{book.title}</td>
                                                <td>{book.author}</td>
                                                <td><Image src={book.image} height={50} width={60} /></td>
                                                <td>{book.date}</td>
                                                <td>{book.overview}</td>
                                                <td>{book.num_of_pages}</td>
                                                <td>{book.genre}</td>
                                                <td className='text-yellow-600'>{book.price}</td>
                                                <td>{book.book_status}</td>
                                                <td>{book.rating}</td>
                                                <td>{book.amount}</td>
                                                <td>
                                                    <Popover content={() => content(book.book_id)} title="Delete!" className='mx-2'>
                                                        <DeleteOutlined className='text-red-500' />
                                                    </Popover>
                                                    <button onClick={() => showModal(book)} type="" className='mx-2 bg-slate-600 text-green-200 p-1 m-2 rounded-md'>update</button>
                                                </td>
                                            </tr>
                                            <Modal
                                                title="Update book"
                                                open={isModalOpen && selectedBook && selectedBook._id === book._id}
                                                onOk={() => {
                                                    form
                                                        .validateFields()
                                                        .then((values) => {
                                                            form.resetFields();
                                                            handleOk();
                                                        })
                                                        .catch((info) => {
                                                            console.log('Validate Failed:', info);
                                                        });
                                                }}
                                                onCancel={handleCancel}
                                            >
                                                <Form

                                                    form={form}
                                                    name="basic"
                                                    initialValues={{

                                                    }}
                                                    labelCol={{
                                                        span: 8,
                                                    }}
                                                    wrapperCol={{
                                                        span: 16,
                                                    }}
                                                    style={{
                                                        maxWidth: 600,
                                                    }}
                                                    onFinish={onFinish}
                                                    onFinishFailed={onFinishFailed}
                                                    autoComplete="off"
                                                    className=' text-center'
                                                >
                                                    <Form.Item
                                                        label="book title"
                                                        name="title"
                                                        rules={[
                                                            {
                                                                message: 'Please input book title!',
                                                            },
                                                        ]}
                                                    >
                                                        <Input defaultValue={book.title} />

                                                    </Form.Item>
                                                    <Form.Item
                                                        label="book author"
                                                        name="author"
                                                        rules={[
                                                            {
                                                                message: 'Please input book author!',
                                                            },
                                                        ]}
                                                    >
                                                        <Input defaultValue={book.author} />
                                                    </Form.Item>
                                                    <Form.Item
                                                        label="book image"
                                                        name="image"

                                                    >
                                                        <Input defaultValue={book.image} />
                                                    </Form.Item>

                                                    <Form.Item
                                                        label="book date"
                                                        name="date"
                                                        rules={[
                                                            {
                                                                // message: 'Please input book date!',
                                                            },
                                                        ]}
                                                    >
                                                        <DatePicker format='DD-MM-YYYY' />
                                                    </Form.Item>

                                                    <Form.Item
                                                        label="book overview"
                                                        name="overview"
                                                        rules={[
                                                            {
                                                                message: 'Please input book overview!',
                                                            },
                                                        ]}
                                                    >
                                                        <Input.TextArea defaultValue={book.overview} />
                                                    </Form.Item>

                                                    <Form.Item
                                                        label="Number of Pages"
                                                        name="num_of_pages"
                                                        rules={[
                                                            {
                                                                type: 'number',
                                                                message: 'Please input the number of pages!',
                                                            },
                                                        ]}
                                                    >
                                                        <InputNumber defaultValue={book.num_of_pages} />
                                                    </Form.Item>

                                                    <Form.Item
                                                        label="Genre"
                                                        name="genre"
                                                        rules={[
                                                            {
                                                                message: 'Please input book genre!',
                                                            },
                                                        ]}
                                                    >
                                                        <Input defaultValue={book.genre} />
                                                    </Form.Item>

                                                    <Form.Item
                                                        label="Price"
                                                        name="price"
                                                        rules={[
                                                            {
                                                                message: 'Please input book price!',
                                                            },
                                                        ]}
                                                    >
                                                        <Input defaultValue={book.price} />
                                                    </Form.Item>

                                                    <Form.Item
                                                        label="Book Status"
                                                        name="book_status"
                                                        rules={[
                                                            {
                                                                message: 'Please input book status!',
                                                            },
                                                        ]}
                                                    >
                                                        <Input defaultValue={book.book_status} />
                                                    </Form.Item>

                                                    <Form.Item
                                                        label="Rating"
                                                        name="rating"
                                                        rules={[
                                                            {
                                                                type: 'number',
                                                                message: 'Please input book rating!',
                                                            },
                                                        ]}
                                                    >
                                                        <InputNumber defaultValue={book.rating} />
                                                    </Form.Item>

                                                    <Form.Item
                                                        label="Amount"
                                                        name="amount"
                                                        rules={[
                                                            {
                                                                type: 'number',
                                                                message: 'Please input the amount!',
                                                            },
                                                        ]}
                                                    >
                                                        <InputNumber defaultValue={book.amount} />
                                                    </Form.Item>



                                                    <Form.Item
                                                        wrapperCol={{
                                                            offset: 8,
                                                            span: 16,
                                                        }}
                                                    >
                                                        <Button className='w-full bg-green-600 text-slate-200 hover:text-slate-100' htmlType="submit">
                                                            Submit
                                                        </Button>
                                                    </Form.Item>
                                                </Form>
                                            </Modal>
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

export default Books