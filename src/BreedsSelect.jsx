// @ts-check

export const BreedsSelect = ({ breeds, selectedBreed, onBreedChange }) => {
  const handleChange = (event) => {
    console.log(event.target.value);
    onBreedChange(event.target.value);
  };
  return (
    <select value={selectedBreed} onChange={handleChange}>
      <option value="">犬種を選択してください</option>
      {breeds.map((breed) => (
        <option key={breed} value={breed}>
        {breed}
        </option>
      ))}
    </select>
  );
}

export default BreedsSelect
