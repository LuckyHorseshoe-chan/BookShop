import { 
    HStack, 
    VStack, 
    Box, 
    Input, 
    Text, 
    Button, 
    Select 
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useAppSelector, useAppDispatch } from '../hooks';
import { setSubject, setSort, selectBooks } from '../features/books/booksSlice';


function Search(){
    const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
    const sortTypes = ['relevance', 'newest']
    const books = useAppSelector(selectBooks);
    const dispatch = useAppDispatch();

    return(
        <Box 
            borderWidth='1px'
            w='60vw'
            m='5vh'
            bgImage="url(/books.jpg)"
            color='white'
            >
                <VStack>
                    <Text as='b' fontSize='3xl'>Search for books</Text>
                    <HStack m={2} w='30vw'>
                        <Input bg='white' color='black'></Input>
                        <Button onClick={() => {console.log({books})}}><SearchIcon/></Button>
                    </HStack>
                    <HStack m={2} w='30vw'>
                        <Text>Categories</Text>
                        <Select 
                            bg='white'
                            color='grey'
                            onChange={(e: any) => dispatch(setSubject(categories[e.target.value]))}
                        >
                            {categories.map((category: string, i: number) => (
                                <option value={i}>{category}</option>
                            ))}
                        </Select>
                        <Text w='9vw'>Sort by</Text>
                        <Select 
                            bg='white'
                            color='grey'
                            onChange={(e: any) => dispatch(setSort(sortTypes[e.target.value]))}
                        >
                            {sortTypes.map((type: string, i: number) => (
                                <option value={i}>{type}</option>
                            ))}
                        </Select>
                    </HStack>
                </VStack>
        </Box>
    )
}

export default Search;