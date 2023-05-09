import React from 'react'
import { Box, Heading, Stack, VStack, HStack, Button, Input, Text} from '@chakra-ui/react'
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={'16'} color={"white"}>

        <Stack direction={['column' , 'row']}>

            <VStack alignItems={'strect'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
                    Subscribe to our newsletter
                </Heading>

                <HStack borderBottom={'2px solid white'} py= "2">

                    <Input 
                        placeholder='Enter Email Here...' 
                        border={'none'} 
                        borderRadius={'none'} 
                        outline={'none'} 
                        focusBorderColor='none'
                        
                    />
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

            <VStack 
                w={'full'}
                borderLeft={['none', '1px solid white']}
                borderRight={['none', '1px solid white']}>

                   <Heading  textTransform={"uppercase"} textAlign={'cent'}>
                    VIDEO HUB
                   </Heading>
                   <Text>All rights reserved</Text>

            </VStack>

            <VStack w={'full'}>

                <Heading size={'md'} textTransform={'uppercase'}>
                    Social Media
                </Heading>

                <Button target={'blank'} variant={'link'} colorScheme={'purple'}>
                <a href= "https://www.youtube.com">YouTube</a>
                </Button>

                <Button target={'blank'} variant={'link'} colorScheme={'purple'}>
                <a href= "www.instagram.com">Instagram</a>
                </Button>

                <Button target={'blank'} variant={'link'} colorScheme={'purple'}>
                <a href= "www.github.com">GitHub</a>
                </Button>


            </VStack>

           

            

        </Stack>

    </Box>
  )
}

export default Footer
