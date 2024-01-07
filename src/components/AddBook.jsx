import React, { useState } from 'react';
import { Alert, Button, DatePicker, Form, Input, InputNumber } from 'antd';

import Loading from '../Loading';
import axios from 'axios';

const AddBook = () => {
    const [added, setAdded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState('');

    const onFinish = async (values) => {

        console.log(' book to be added  :', values);
        const updatedValues = {
            ...values
        };

        try {
            setLoading(true)
            await axios.post('https://localhost/api/books/create/', updatedValues).then(response => {
                console.warn('API Response add data:', response.data);
            
            })
                .catch(error => {
                    console.error('API Error:', error);
                });
            setAdded(true)


        } catch (error) {
            console.error('API Error:', error);

        } finally {
            setLoading(false)
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    if (added) {
    }



    if (successMessage) {
        return <Alert message={successMessage} type="success" showIcon closable onClose={() => setSuccessMessage('')} />
    }
    return (
        <div className='my-4 pt-4'>
            {loading && <Loading />}
            <span className='text-slate-700 text-2xl pt-44'>Add Book</span>
            <hr className='h-2 w-full bg-green-600 rounded-b-lg mb-5' />
            <div className='-ml-28 flex justify-center'>

                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className='  flex flex-col text-center shadow-lg p-8 px-10 justify-center w-full'
                >


                    <Form.Item
                        label="Book Title"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input book title!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Author"
                        name="author"
                        rules={[
                            {
                                required: true,
                                message: 'Please input author!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Image URL"
                        name="image"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Publication Date"
                        name="date"
                        rules={[
                            {
                                required: true,
                                message: 'Please input publication date!',
                            },
                        ]}
                    >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        label="Overview"
                        name="overview"
                    >
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item
                        label="Number of Pages"
                        name="num_of_pages"
                    >
                        <InputNumber />
                    </Form.Item>

                    <Form.Item
                        label="Genre"
                        name="genre"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Price"
                        name="price"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Book Status"
                        name="book_status"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Rating"
                        name="rating"
                    >
                        <InputNumber />
                    </Form.Item>

                    <Form.Item
                        label="Amount"
                        name="amount"
                    >
                        <InputNumber />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button className='w-full bg-green-600 text-slate-200 hover:text-slate-100' htmlType="submit">
                            Add Book
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}




export default AddBook;