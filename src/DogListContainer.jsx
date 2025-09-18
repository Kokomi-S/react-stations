// @ts-check
import { useState, useEffect } from 'react';

export const DogListContainer = () => {
  const [breeds , setBreeds] = useState([]);
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
    <select>
      {breeds.map((breed) => (
        <option key={breed} value={breed}>
        {breed}
        </option>
      ))}
    </select>
  );
}

export default DogListContainer
