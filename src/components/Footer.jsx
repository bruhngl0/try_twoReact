import React from 'react'
import { Box, Heading, Stack, VStack, HStack, Button} from '@chakra-ui/react'
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={'16'} color={"white"}>

        <Stack direction={['column' , 'row']}>

            <VStack>
                <Heading size={'md'} textTransform={'uppercase'}>
                    Subscribe to our newsletter
                </Heading>

                <HStack>
                    <Button
                       p={'0'}
                       colorScheme='purple'
                       variant={'ghost'}
                       borderRadius={'0 20px 20px 0'} 
                    >
                        <AiOutlineSend size={'20'}/>

                    </Button>
                </HStack>
            </VStack>

        </Stack>

    </Box>
  )
}

export default Footer
