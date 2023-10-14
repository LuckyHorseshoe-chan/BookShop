import { 
    Flex, 
    Center, 
    Text, 
    VStack, 
    Spinner,
    Button 
} from '@chakra-ui/react'
import { useState } from 'react'
import { useAppSelector } from '../hooks';
import { selectBooks } from '../features/books/booksSlice';
import Book from './Book';

function BookList(){
    const books = useAppSelector(selectBooks);
    const [pagStep, setPagStep] = useState(30); 

    return(
        <Center w='60vw'>
            {books.status === 'failed' 
            || !("totalItems" in books.value && "items" in books.value)
            || !(Array.isArray(books.value["items"]))
            || !books.value["totalItems"] ? (
                    <Text fontSize='xl'>Not found</Text>
                ) : books.status === 'loading' ? (
                    <Spinner/>
                ) : Number(books.value["totalItems"]) === -1 ? (
                    <span></span>
                ) : 
                    <VStack>
                        <Text fontSize='xl'>
                            Found {Number(books.value["totalItems"])} results
                        </Text>
                        <Flex flexWrap='wrap' w='95%'>
                            {books.value["items"].slice(0, Math.min(pagStep, books.value["items"].length)).map((item: object) => (
                                <Book item={item} />
                            ))}
                        </Flex>
                        <Button onClick={() => {setPagStep(pagStep + 30)}}>Load more</Button>
                    </VStack>
                }
        </Center>
        
    )
}

export default BookList;