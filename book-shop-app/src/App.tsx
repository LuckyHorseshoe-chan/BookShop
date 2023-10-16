import { VStack } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css';
import Search from './components/Search';
import BookList from './components/BookList';

function App() {
  const [itemsToShow, setItemsToShow] = useState(30);
  return (
    <VStack>
      <Search setItemsToShow={setItemsToShow}/>
      <BookList 
        itemsToShow={itemsToShow}
        setItemsToShow={setItemsToShow}/>
    </VStack>
  );
}

export default App;
