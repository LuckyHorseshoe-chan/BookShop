import { Box, Image, Text, Center, VStack } from '@chakra-ui/react'

function Book(){
    return (
        <Box 
            bg='whitesmoke'
            w='12vw'
            h='45vh'
            m='2vh'
        >
            <Center m='2vh'>
                <Image src="http://books.google.com/books/content?id=hJtPEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"/>
            </Center>
            <VStack align='stretch' m='1vh'>
                <Text as='u' color='grey'>Computers</Text>
                <Text as='b'>node.js node.js node.js node.js node.js</Text>
                <Text color='grey'>David</Text>
            </VStack>
        </Box>
    )
}

export default Book;