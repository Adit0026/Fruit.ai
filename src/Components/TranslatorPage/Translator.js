import { useState } from "react";
import './Translator.css';
import { AiOutlineClose } from 'react-icons/ai';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [outputLang, setOutputLang] = useState('ar');
  const [outputText, setOutputText] = useState('');
  const [isTranslated, setIsTranslated] = useState();

  const translate = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': process.env.REACT_APP_RapidAPI_Key,
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
      },
      body: JSON.stringify([{ Text: inputText }])
    };
  
    fetch(`${process.env.REACT_APP_Base_URL}?to=${outputLang}`, options)
      .then(response => {
        if (response.status !== 200) {
          setIsTranslated(false);
          console.error("HTTP error:", response.status);
          return;
        }
        return response.json();
      })
      .then(data => {
        if (data && data[0] && data[0].translations && data[0].translations[0]) {
          const translatedText = data[0].translations[0].text;
          setOutputText(translatedText);
          setIsTranslated(true);
        } else {
          setIsTranslated(false);
          console.error("Unexpected response format");
        }
      })
      .catch(err => {
        setIsTranslated(false);
        console.error("Fetch error:", err);
      });
  };
  
  
  

  const clearInput = () => {
    setInputText('');
    setOutputText('');
    setIsTranslated();
  }

  return (
    <section className="translator">
      <div className="row-wrapper">
        <div className="translator-container input-lang">
          <div className="top-row">
            <button
              className="btn btn-primary btn-translate"
              onClick={translate}
            >
              Translate
            </button>
          </div>
          <form className="input-form">
            <textarea
              className="text-box"
              placeholder="Enter text (any language)"
              onChange={e => setInputText(e.target.value)}
              value={inputText}
            >
            </textarea>
            {
              inputText !== "" &&
              <AiOutlineClose
                className="icon-btn close-btn"
                onClick={clearInput}
              />
            }
          </form>
        </div>
        <div className="translator-container output-lang">
          <div className="top-row">
            <select
              name="languages"
              id="languages"
              className="form-select form-select-sm"
              onChange={e => setOutputLang(e.target.value)}
            >
              <option value="ar">Arabic</option>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="es">Spanish</option>
            </select>
          </div>
          <p className="text-box output-box">
            {
              isTranslated === false ?
                <span className="output-placeholder translation-error">Translation failed</span>
                :
                outputText === "" ?
                  <span className="output-placeholder">Select a language</span>
                  :
                  outputText
            }
          </p>
        </div>
      </div>
    </section>
  );
}

export default Translator;