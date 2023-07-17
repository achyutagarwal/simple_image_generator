import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);
  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setResult(res.data.data[0].url);
  };
  return (
    <div className="app-main">
      <h1>Generate an Image using Open AI API </h1>
      <input
        className="app-input"
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a prompt to generate image"
      />
      <button onClick={generateImage}>Generate an Image</button>
      {result.length > 0 ? (
        <img src={result} className="result-img" alt="result-img" />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
