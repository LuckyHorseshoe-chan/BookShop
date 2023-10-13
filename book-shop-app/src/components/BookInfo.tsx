import { 
    VStack, 
    HStack, 
    Center, 
    Text, 
    Image 
} from '@chakra-ui/react'

function BookInfo({item}: {item: object}){
    return(
        <div>
            {("volumeInfo" in item 
            && typeof(item["volumeInfo"]) === 'object'
            && item["volumeInfo"]) ?
                <Center>
                    <HStack m={3} w='50vw'>
                        {("imageLinks" in item["volumeInfo"]
                            && item["volumeInfo"]["imageLinks"]
                            && typeof(item["volumeInfo"]["imageLinks"]) === 'object'
                            && "thumbnail" in item["volumeInfo"]["imageLinks"]
                            && item["volumeInfo"]["imageLinks"]["thumbnail"]
                            && typeof(item["volumeInfo"]["imageLinks"]["thumbnail"]) === 'string') ? 
                        <Image src={item["volumeInfo"]["imageLinks"]["thumbnail"]} h='40vh'/> :
                        <span></span>}
                        <VStack align='stretch' m={5}>
                            {("categories" in item["volumeInfo"]
                                && item["volumeInfo"]["categories"]
                                && Array.isArray(item["volumeInfo"]["categories"])
                                && item["volumeInfo"]["categories"].length) ? 
                                <Text as='u' color='grey'>
                                    {item["volumeInfo"]["categories"].join(', ')}
                                </Text> : 
                                <span></span>}
                            {("title" in item["volumeInfo"]
                                && item["volumeInfo"]["title"]
                                && typeof(item["volumeInfo"]["title"]) === 'string') ? 
                                <Text as='b' fontSize='xl'>
                                    {item["volumeInfo"]["title"]}
                                </Text> :
                                <span></span>}
                            {("authors" in item["volumeInfo"]
                                && item["volumeInfo"]["authors"]
                                && Array.isArray(item["volumeInfo"]["authors"])) ? 
                                <Text color='grey'>
                                    {item["volumeInfo"]["authors"].join(', ')}
                                </Text>:
                                <span></span>}
                            {("description" in item["volumeInfo"]
                                && item["volumeInfo"]["description"]
                                && typeof(item["volumeInfo"]["description"]) === 'string') ? 
                                <Text borderWidth={1} p={2}>
                                    {item["volumeInfo"]["description"]}
                                </Text> :
                                <span></span>}
                        </VStack>
                    </HStack>
                </Center>
            : <span></span>}
        </div> 
    )
}

export default BookInfo;