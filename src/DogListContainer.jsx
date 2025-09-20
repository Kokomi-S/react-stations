// @ts-check
import { useState, useEffect } from 'react';
import BreedsSelect from './BreedsSelect';
import Description from './Description';
import DogImage from './DogImage';

export const DogListContainer = () => {
  const [breeds , setBreeds] = useState([]);
  const [selectedBreed , setSelectedBreed] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const [dogUrl, setDogUrl] = useState('');
  const [dogUrls, setDogUrls] = useState([]);

  const fetchBreeds = async() => {
    try {
      const res = await fetch('https://dog.ceo/api/breeds/list/all');
      if (!res.ok) throw new Error('ネットワークエラー');
      const data = await res.json();
      setBreeds(Object.keys(data.message));
    } catch (error) {
      console.error('エラーが発生しました', error);
    }
  };

  const fetchNewDog = async() => {
      try {
        setIsLoading(true);
        setDogUrls([]);
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!res.ok) throw new Error('ネットワークエラー');
        const data = await res.json();
        setDogUrls([data.message]);
      } catch (error) {
        console.error('エラーが発生しました', error);
      } finally {
        setIsLoading(false); 
      }
  };

  const fetchSelectedDog = async(breed) => {
    if (!breed) return;
      try {
        setIsLoading(true);
        const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/12`);
        if (!res.ok) throw new Error('ネットワークエラー');
        const data = await res.json();
        setDogUrls(data.message);
      } catch (error) {
        console.error('エラーが発生しました', error);
      } finally {
        setIsLoading(false); 
      }
  };

  useEffect(() => {
    fetchBreeds();
    return () => {};
  },[]);

  useEffect(() => {
    // breeds が取得できたら最初の1つを selected にする
    if (breeds.length > 0 && selectedBreed === '') {
      setSelectedBreed(breeds[0]);
    }
  }, [breeds, selectedBreed]);

  return (
    <>
      <button onClick={fetchNewDog}>更新</button>
      <br />
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onBreedChange={setSelectedBreed} />
      <button onClick={() => fetchSelectedDog(selectedBreed || breeds[0])}>
        表示
      </button>
      <br />
      {dogUrls.length > 0 
      ? (dogUrls.map(url => <DogImage imageUrl={url} alt="犬の画像" key={url} />))
      : <Description dogUrls={dogUrls} isLoading={isLoading} />
      }
    </>
  );
};

export default DogListContainer
