// DO NOT DELETE

import './App.css'
import { useState } from 'react';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/frise-bichon/5.jpg');
  return (
    <div>
      <header>
        <h1>My App</h1>
      </header>
      <img src= {dogUrl} alt= "犬の画像" />
      <p>犬の画像を表示するサイトです</p>
      <button onClick={() => setDogUrl('https://images.dog.ceo/breeds/frise-bichon/2.jpg')}>更新</button>
    </div>
  )
}
