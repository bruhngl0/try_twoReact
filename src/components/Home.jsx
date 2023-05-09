import React from 'react'
import {Box, Container, ControlBox, Heading, Img, Stack, Text} from  "@chakra-ui/react"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  textTransform: "Uppercase",
  p: "4",
  size: "4xl",

}

const Home = () => {
  return (
    <Box>

        <MyCarousel />

        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
            <Heading 
                textTransform={"uppercase"} 
                py={'2'} 
                w={'fit-content'} 
                borderBottom={'2px solid'}
                margin={'auto'}
            >
                Services
            </Heading>


            <Stack
                h={'full'}
                p={'4'}
                alignItems={'center'}
                direction={['column' , 'row']}
            >
                <Img src={img5} h={['40' , '400']} filter={'hue-rotate(-130deg)'} textAlign={'c'}/>

                <Text letterSpacing={'widest'} lineHeight={'190%'} p={['40' , '16']} >"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto harum laudantium assumenda? Assumenda voluptates minus suscipit quos non quidem quod, adipisci, sequi aperiam sed doloremque, obcaecati porro ad atque ex.</Text>
                

            </Stack>
        </Container>


    </Box>
  )
}

export default Home

const MyCarousel= ()=>{
    return(
        <Carousel 
            autoPlay 
            infiniteLoop 
            interval={1000} 
            showStatus={false} 
            showThumbs={false} 
            showArrows={false}
        >

            <Box w={'full'} h={'100vh'}>
                <Img src= {img1} />
                <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                    Watch The Future
                </Heading>

            </Box>


            <Box w={'full'} h={'100vh'}>
                <Img src= {img2} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                    Future Is Gaming
                </Heading>

            </Box>
            
            <Box w={'full'} h={'100vh'}>
                <Img src= {img3} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                    Gaming On Console
                </Heading>

            </Box>


            <Box w={'full'} h={'100vh'}>
                <Img src= {img4} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                    Night Life Is Dumb
                </Heading>

            </Box>


        </Carousel>


    )

}
