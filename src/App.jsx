// DO NOT DELETE
import './App.css'
import { useState } from 'react';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/frise-bichon/5.jpg');
  const [isLoading, setIsLoading] = useState(false);


  const fetchNewDog = async() => {
    try {
      setIsLoading(true);
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      if (!res.ok) throw new Error('ネットワークエラー');
      const data = await res.json();
      setDogUrl(data.message);
    } catch (error) {
      console.error('エラーが発生しました', error);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div>
      <header className="header">
        <h1>My App</h1>
      </header>
      {isLoading && <p>読み込み中...</p>}
      <img src= {dogUrl} alt= "犬の画像" />
      <p>犬の画像を表示するサイトです</p>
      <button onClick={fetchNewDog}>更新</button>
    </div>
  )
}
