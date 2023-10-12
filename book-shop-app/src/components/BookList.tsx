import { Flex, Center} from '@chakra-ui/react'
import Book from './Book';

function BookList(){
    return(
        <Center w='60vw'>
            <Flex flexWrap='wrap' w='95%'>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
                <Book/>
            </Flex>
        </Center>
        
    )
}

export default BookList;