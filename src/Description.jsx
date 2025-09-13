// @ts-check
import DogImage from './DogImage'
import { useState } from 'react';

export const Description = () => {
  const [isLoading, setIsLoading] = useState(false);
    const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/frise-bichon/5.jpg');

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
    <>
      <DogImage imageUrl={dogUrl} alt="犬の画像" />
      {isLoading && <p>読み込み中...</p>}
      <p>犬の画像を表示するサイトです</p>
      <button onClick={fetchNewDog}>更新</button>
  </>
  );
}

export default Description
