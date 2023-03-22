import logo from './logo2.svg';
import './App.css';
import {Button, Text,ChakraProvider, Image,SimpleGrid,Grid,GridItem, Divider, Center, Box} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />

        <span className = "MSpacing"> </span>

        <p> Jonah Ramponi </p>

        <span className = "MLSpacing"> </span>

        <Center height='60px'>
            <Divider orientation='vertical' />
        </Center>      

        <span className = "XSSpacing"> </span>

        <SimpleGrid columns = {3} spacing = {10}>
        <Button variant = 'outline' size = 'lg'>Projects  </Button>
        <Button variant = 'outline' size = 'lg'>About Me  </Button>
        <Button variant = 'outline' size = 'lg'>Blog  </Button>

        </SimpleGrid>

      </header>

      <Box h='240vw' bgGradient='linear(to-b, #bbbcd6, green.500)' padding ={10} >
      <Grid templateRows='repeat(6, 1fr)' templateColumns='repeat(5, 1fr)'  rowGap = {20} w = '90vw'>
      
      <GridItem colSpan = {5}>

      </GridItem>

      <GridItem rowSpan={1} colSpan={3}>
        <Center>
          <Box w = '90%' borderWidth={2} borderColor = {'black'} borderRadius = {50}>
            <Image src='/munro_cover.png' borderRadius={50}/> 
          </Box>
        </Center>
      </GridItem>

      <GridItem rowSpan={1} colSpan={2}>
        <SimpleGrid columns = {1} paddingLeft = {10}>
          <Center h = '10vh'>
            <Text fontSize = '4xl' color = {'white'}>
              Long Distance Walks
            </Text>    
          </Center>

          
          <Center height='60px'>
              <Divider orientation='horizontal' />
            </Center>    


          <Text align = 'justify' color = {'white'}>
            Brief route descriptions of some multi-day walks I have completed.
          </Text>


        </SimpleGrid>
        
          
      </GridItem>


      <GridItem rowSpan={1} colSpan={2}>
        <SimpleGrid columns = {1} paddingLeft = {10}>
          <Center h = '10vh'>
            <Text fontSize = '4xl' color = {'white'}>
              Munros
            </Text>    
          </Center>

          
          <Center height='60px'>
              <Divider orientation='horizontal' />
            </Center>    


          <Text align = 'justify' color = {'white'}>
            Documenting my journey to complete all 282 of the Scottish Munros.
          </Text>


        </SimpleGrid>
        
          
      </GridItem>
      <GridItem rowSpan={1} colSpan={3}>
        <Center>
          <Box w = '90%' borderWidth={2} borderColor = {'black'} borderRadius = {50}>
            <Image src='/munro_cover.png' borderRadius={50}/> 
          </Box>
        </Center>
      </GridItem>




      <GridItem rowSpan={1} colSpan={3}>
        <Center>
          <Box w = '100%' borderWidth={2} borderColor = {'black'} borderRadius = {50}>
            <Image src='/edi.png' borderRadius={50}/> 
          </Box>
        </Center>
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        <SimpleGrid columns = {1} paddingLeft = {10}>
          <Center h = '10vh'>
            <Text fontSize = '4xl' color = {'white'}>
              Running
            </Text>    
          </Center>

          <Text align = 'justify' color = {'white'}>
            Data analysis and visualisations using the Strava API. Using the Google Maps API to visualise recent routes and Tableau to produce an interactive dashboard.
          </Text>

          
          <SimpleGrid columns = {3} rows = {1} paddingTop = {5}>
            <Box w = '10vw' borderWidth={1} borderColor = {'black'} borderRadius = {50} padding = {1}>
              <Center>
              <Image src='/strava-removebg-preview.png'  borderRadius={50} padding = {2}/> 
              </Center>
            </Box>

            
            <Box w = '10vw' borderWidth={1} borderColor = {'black'} borderRadius = {50} padding = {1}>
              <Image src='/tableau-removebg-preview.png'  borderRadius={50} padding = {2}/> 
            </Box>

            <Box w = '10vw' borderWidth={1} borderColor = {'black'} borderRadius = {50} padding = {1}>
              <Image src='/rstudio.png'  borderRadius={50}/> 
            </Box>

          </SimpleGrid>


        </SimpleGrid>
        
          
      </GridItem>
      






      <GridItem rowSpan={1} colSpan={2}>
        <SimpleGrid columns = {1}>
            <Text fontSize = '4xl' color = {'white'}>
              Project Assignment
            </Text>    

            <Center height='60px'>
              <Divider orientation='horizontal' />
            </Center>     

          <Text align = 'justify' color = {'white'}>
            Assigning individuals to projects is a common problem. The question of how to define an appropriate assignment brings us to the balancing of utility with fairness. This research looks at project assignment in a university setting.
          </Text>

          <SimpleGrid columns = {3} rows = {1} paddingTop = {5}>
            <Box w = '10vw' borderWidth={1} borderColor = {'black'} borderRadius = {50} padding = {1}>
              <Image src='/gurobi.png'  borderRadius={50}/> 
            </Box>

            <Box w = '10vw' borderWidth={1} borderColor = {'black'} borderRadius = {50} padding = {1}>
              <Image src='/python_logo-removebg-preview.png'  borderRadius={50}/> 
            </Box>

            <Box w = '10vw' borderWidth={1} borderColor = {'black'} borderRadius = {50} padding = {1}>
              <Image src='/rstudio.png'  borderRadius={50}/> 
            </Box>

          </SimpleGrid>
        </SimpleGrid>
      </GridItem>
      <GridItem rowSpan={1} colSpan={3}>
        <Center>
          <Box w = '90%' borderWidth={2} borderColor = {'black'} borderRadius = {30}>
            <Image src='/projmatch-removebg-preview.png'  borderRadius={50}/> 
          </Box>
        </Center>
      </GridItem>


      <GridItem rowSpan={1} colSpan={2}>
        <Center>
          <Box w = '90%' borderWidth={2} borderColor = {'black'} borderRadius = {50}>
            <Image src='/mopt.svg'  borderRadius={50}/> 
          </Box>
        </Center>
      </GridItem>
      <GridItem rowSpan={1} colSpan={3}>
        <SimpleGrid columns = {1} padding = {10}>
            <Text fontSize = '4xl' color = {'white'}>
              Examination Scheduling
            </Text>    

            <Center height='60px'>
              <Divider orientation='horizontal' />
            </Center>     

          <Text align = 'justify' color = {'white'}>
            Ever wondered how universities schedule their examinations? It turns out to be a nice application of mathematics. Through the use of heuristic and meta-heuristic approaches, we can produce a conflict free schedule with ease.
          </Text>

          <SimpleGrid columns = {4} rows = {1} paddingTop = {5}>
            <Box w = '10vw' borderWidth={1} borderColor = {'black'} borderRadius = {50} padding = {1}>
              <Image src='/gurobi.png'  borderRadius={50}/> 
            </Box>

            <Box w = '10vw' borderWidth={1} borderColor = {'black'} borderRadius = {50} padding = {1}>
              <Image src='/python_logo-removebg-preview.png'  borderRadius={50}/> 
            </Box>

            <Box w = '10vw' borderWidth={1} borderColor = {'black'} borderRadius = {50} padding = {1}>
              <Image src='/rstudio.png'  borderRadius={50}/> 
            </Box>

            <Box w = '10vw' borderWidth={1} borderColor = {'black'} borderRadius = {50} padding = {1}>
              <Image src='/tableau-removebg-preview.png'  borderRadius={50} padding = {2}/> 
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </GridItem>


      <GridItem colSpan={5} bgGradient='linear(to-r, #bbbcd6,red.400 )' padding = {50}  borderRadius = {50}>      
        <Grid h ='14vw' templateRows='repeat(3, 1fr)' templateColumns='repeat(3, 1fr)'>

        <GridItem rowSpan={1} colSpan={1}>
          <Center>
              <SimpleGrid columns = {1} padding = {0}>
                <Center>
                  <Box w = '100%' >
                    <Image src='/SoM.png'/> 
                  </Box>
                </Center>
              </SimpleGrid>
             </Center>
          </GridItem>


          <GridItem rowSpan={1} colSpan={1}>
            <Center>
              <SimpleGrid columns = {1} padding = {5}>
                <Center>
                  <Box w = '80%' >
                    <Image src='/actelligent_logo-removebg-preview.png'/> 
                  </Box>
                </Center>
              </SimpleGrid>
             </Center>
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}>
            <Center>
              <SimpleGrid columns = {1} padding = {0}>
              <Center>
                <Box w = '80%' >
                  <Image src='/logo_clear.png'/> 
                </Box>
              </Center>
              </SimpleGrid>
             </Center>
          </GridItem>


          <GridItem rowSpan={1} colSpan={1}>
              <Center>
                <Text as = 'b' color = 'white'>
                  MMath (Hons) 
                </Text>
              </Center>

                <Text fontSize = 'xs' as = 'i' color = 'white'>
                  September 2018 - July 2023
                </Text>
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}>
              <Center>
                <Text as = 'b' color = 'white'>
                  Data Science Intern
                </Text>
              </Center>

                <Text fontSize = 'xs' as = 'i' color = 'white'>
                  December 2021 - July 2022
                </Text>
            </GridItem>

            <GridItem rowSpan={1} colSpan={1}>
              <Center>
                <Text as = 'b' color = 'white'>
                  Engineer
                </Text>
              </Center>

                <Text fontSize = 'xs' as = 'i' color = 'white'>
                  July 2022 - Present 
                </Text>
            </GridItem>

            <GridItem rowSpan = {1} colSpan = {3} padding = {10}>

              <Divider orientation='horizontal'>
              </Divider>
              <SimpleGrid columns = {1}>
              <Text as = 'i'>
                This website has been created with React and Chakra UI. Contact: jonahramponiwork@gmail.com 
              </Text>
              </SimpleGrid>
              
            </GridItem>
        </Grid>
      </GridItem>
    </Grid>
      </Box>
    </div>
    </ChakraProvider>

  );
}

export default App;
