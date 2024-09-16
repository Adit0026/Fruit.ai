import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/Homepage';
import LoginRegister from './Components/LoginPage/LoginRegister';
import TranslatorPage from './Components/TranslatorPage/Translator';
import AboutPage from './Components/AboutPage/About';
import ChatBotPage from './Components/ChatBotPage/ChatBot';
import FAQPage from './Components/FAQPage/FAQPage';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<LoginRegister />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/translator" element={<TranslatorPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/chatbot" element={<ChatBotPage />} />
          <Route path="/faq" element={<FAQPage/>}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
