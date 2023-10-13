import { 
    Box, 
    Image, 
    Text, 
    Center, 
    VStack 
} from '@chakra-ui/react'
import { useState } from 'react';
import Modal from 'react-modal';
import BookInfo from './BookInfo';

function Book({item}: {item: object}){
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    
    return (
        <div>
            {("volumeInfo" in item 
                && typeof(item["volumeInfo"]) === 'object'
                && item["volumeInfo"]) ?
                <a onClick={openModal}>
                    <Box 
                    bg='whitesmoke'
                    w='12vw'
                    h='45vh'
                    m='2vh'
                    >
                        {("imageLinks" in item["volumeInfo"]
                            && item["volumeInfo"]["imageLinks"]
                            && typeof(item["volumeInfo"]["imageLinks"]) === 'object'
                            && "thumbnail" in item["volumeInfo"]["imageLinks"]
                            && item["volumeInfo"]["imageLinks"]["thumbnail"]
                            && typeof(item["volumeInfo"]["imageLinks"]["thumbnail"]) === 'string') ? 
                        <Center>
                            <Image m='1vh' src={item["volumeInfo"]["imageLinks"]["thumbnail"]}/>
                        </Center> :
                        <span></span>}
                        <VStack align='stretch' m='1vh'>
                            {("categories" in item["volumeInfo"]
                                && item["volumeInfo"]["categories"]
                                && Array.isArray(item["volumeInfo"]["categories"])
                                && item["volumeInfo"]["categories"].length) ? 
                            <Text as='u' color='grey' isTruncated>{item["volumeInfo"]["categories"][0]}</Text>: 
                            <span></span>}
                            {("title" in item["volumeInfo"]
                                && item["volumeInfo"]["title"]
                                && typeof(item["volumeInfo"]["title"]) === 'string') ? 
                            <Text as='b' noOfLines={2}>{item["volumeInfo"]["title"]}</Text>:
                            <span></span>}
                            {("authors" in item["volumeInfo"]
                                && item["volumeInfo"]["authors"]
                                && Array.isArray(item["volumeInfo"]["authors"])) ? 
                            <Text color='grey' noOfLines={2}>{item["volumeInfo"]["authors"].join(', ')}</Text>:
                            <span></span>}
                        </VStack> 
                    </Box>
                </a> 
                : <span></span>}
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <BookInfo item={item}/>
            </Modal>
        </div> 
    )
}

export default Book;