// @ts-check
import DogImage from "./DogImage";

export const Description = ({ dogUrls, isLoading }) => {

  return (
    <>
      {isLoading && <p>読み込み中...</p>}
      <p>犬の画像を表示するサイトです</p>
      {dogUrls.length > 0 && dogUrls.map(url => <DogImage imageUrl={url} alt="犬の画像" key={url} />)}  
    </>
  );
}

export default Description
