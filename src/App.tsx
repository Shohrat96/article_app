import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import ArticlesPage from './pages/ArticlesPage';
import { Routes, Route } from 'react-router-dom';
import SingleArticlePage from './pages/SingleArticlePage';

function App() {
   return (
      <GlobalProvider>
         <div className='App'>
            <Routes>
               <Route path='/' element={<ArticlesPage />} />
               <Route path='/articles/:id' element={<SingleArticlePage />} />
            </Routes>
         </div>
      </GlobalProvider>
   );
}

export default App;
