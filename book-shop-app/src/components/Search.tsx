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


function Search(){
    const categories = ['art', 'biography', 'computers', 'history', 'medical', 'poetry']

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
                        <Button><SearchIcon/></Button>
                    </HStack>
                    <HStack m={2} w='30vw'>
                        <Text>Categories</Text>
                        <Select bg='white' color='grey'>
                            {categories.map((category: string, i: number) => (
                                <option value={i}>{category}</option>
                            ))}
                        </Select>
                        <Text w='9vw'>Sort by</Text>
                        <Select bg='white' color='grey'>
                            <option value={0}>relevance</option>
                            <option value={1}>newest</option>
                        </Select>
                    </HStack>
                </VStack>
        </Box>
    )
}

export default Search;