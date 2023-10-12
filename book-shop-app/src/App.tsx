import { VStack } from '@chakra-ui/react'
import './App.css';
import Search from './components/Search';
import BookList from './components/BookList';

function App() {
  return (
    <VStack>
      <Search/>
      <BookList/>
    </VStack>
  );
}

export default App;
