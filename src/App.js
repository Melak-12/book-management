import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom';
import { Avatar, Badge, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons'
import Books from './components/Books';
import Selles from './components/Selles';
import Orders from './components/Orders';
import AddBook from './components/AddBook';
import Carts from './components/Carts';


function App() {

  const { Content } = Layout;

  return (
    <>
      <Router>
        <div className="md:block hidden">
          <Layout style={{ minHeight: '100vh' }} className=''>
            <Layout className=''>
              <div className="flex justify-between bg-slate-800 p-4  rounded-b-lg">
                <span className='flex justify-end text-slate-500'>Book managment</span>
                <div className='flex justify-between text-slate-400'>
                  <Link to={'/'} className='px-3 rounded-3xl  hover:bg-slate-600 cursor-pointer' >Books</Link>
                  <span className='px-3 rounded-3xl  hover:bg-slate-600 cursor-pointer'>contact us</span>
                  <span className='px-3 rounded-3xl  hover:bg-slate-600 cursor-pointer'>services</span>
                </div>
                <span className='flex justify-between text-white   rounded-xl  cursor-pointer'>
                  <Link to={'/carts'} className=' mx-5 text-green-500 px-3 rounded-md'>
                    <Badge size="small" count={3}> 
                      <Avatar size="small" className='text-green-500' icon={ <ShoppingCartOutlined />} />
                    </Badge>
                  </Link>
                  <Link to={'/sells'} className=' bg-slate-700 mx-5 text-green-500 px-3 rounded-md'>sells</Link>
                  <Link to={'/orders'} className=' bg-slate-700 mx-5 text-green-500 px-3 rounded-md'>orders</Link>
                </span>
              </div>
              <div className="">
                <Content style={{ margin: '0 16px' }} className=''>
                  <Routes>
                    <Route path="/" element={<Books />} />
                    <Route path="/addbook/" element={<AddBook />} />
                    <Route path="/sells/" element={<Selles />} />
                    <Route path="/orders/" element={<Orders />} />
                    <Route path="/carts/" element={<Carts />} />
                  </Routes>
                </Content>
              </div>
            </Layout>
          </Layout>
        </div>
        <div className='md:hidden block'>
          Please use your computer to see the project!
          <br />
          <i>will be done for mobile soon!</i>
        </div>
      </Router>
    </>
  );
}

export default App;