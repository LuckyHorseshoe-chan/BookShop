import { VStack } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css';
import Search from './components/Search';
import BookList from './components/BookList';

function App() {
  const [pagStep, setPagStep] = useState(30);
  return (
    <VStack>
      <Search setPagStep={setPagStep}/>
      <BookList 
        pagStep={pagStep}
        setPagStep={setPagStep}/>
    </VStack>
  );
}

export default App;
