// DO NOT DELETE
import './App.css'
import Header from './Header'
import Description from './Description'
import DogListContainer from './DogListContainer'
import BreedsSelect from './BreedsSelect'


/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return(
    <>
      <Header />
      <Description />
      <DogListContainer />
    </>
  );

}
