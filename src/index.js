import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Header />
        <Main />
        <Footer />
    </div>
);
