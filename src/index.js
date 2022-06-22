import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';
import Works from './main/works/works';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Header />
        <Main />
        <Works />
        <Footer />
    </div>
);
