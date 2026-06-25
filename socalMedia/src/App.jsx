import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import SoFooter from './components/Footer';
import SideBar from './components/Sidebar';
import "./Style.css";
import CreatePost from './components/CreatePost';
import Post from './components/Post';
import PostList from './components/PostList';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import PostListeProvider from './store/post-list-store';
function App() {

    // const [selectedTab, setSelectedTab] =useState("Home");

    return ( 
    <>
    <PostListeProvider>
        <div className = "app-container">
            <SideBar/>
            <div className='containt'>
                <Header />
                <Outlet></Outlet>
                <SoFooter />
            </div>
        </div>
    </PostListeProvider>
    </>
        
    );
  

}

export default App;