// @ts-check
import { useState, useEffect } from 'react';
import BreedsSelect from './BreedsSelect';

export const DogListContainer = () => {
  const [breeds , setBreeds] = useState([]);
  const [selectedBreed , setSelectedBreed] = useState('');
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

  useEffect(() => {
    fetchBreeds();
    return () => {};
  },[]);

  return (
    <>
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onBreedChange={setSelectedBreed} />
    </>
  );
}

export default DogListContainer
