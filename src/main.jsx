import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import BlogGallery from './components/BlogGallery.jsx';
import LoRA_QLoRA_Blog from './components/Blogs/LoRA_QLoRA_Blog.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blogs" element={<BlogGallery />} />
        <Route path="/blogs/lora-qlora" element={<LoRA_QLoRA_Blog />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
