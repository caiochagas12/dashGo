import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Link from 'next/link'
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useEffect } from "react";

export default function UserList(){
    const isWideVersion = useBreakpointValue({
        base:false,
        lg:true
    })

    useEffect(() => {
        fetch('http://localhost:3000/api/users')
        .then(response => response.json())
        .then( data => console.log(data))
    },[])

    return(
  <Box>
        <Header />
        <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
            <Sidebar/>
        
             <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                 <Flex mb='8' justify='space-between' align='center'>
                     <Heading size='lg' fontWeight='normal'>Usuários</Heading>
                     
            <Link href={'users/create'} passHref>
                     <Button as='a' 
                     size='sm' 
                     fontSize='sm' 
                     colorScheme='pink'
                     leftIcon={<Icon as={RiAddLine} fontSize='20'/>}>
                    {isWideVersion ? 'Criar novo usuário': 'Criar novo'}</Button>
            </Link>

                 </Flex>
                 <Table colorScheme='whiteAlpha'>
                     <Thead>
                         <Tr>
                             <Th px={['4','4','6']} color='gray.300' width='8'>
                                 <Checkbox colorScheme='pink'/>
                             </Th>
                             <Th>Usuários</Th>
                            {isWideVersion && <Th>Data de cadastro</Th>}
                             <Th width='8'></Th>
                            
                         </Tr>
                     </Thead>

                     <Tbody>
                         <Tr>
                             <Td px={['4','4','6']}>
                             <Checkbox colorScheme='pink'/>
                             </Td>
                             <Td>
                                 <Box>
                                     <Text fontWeight='bold'>All Might</Text>
                                     <Text fontSize='sm' color='gray.300'>all.might.hero93@gmail.com</Text>
                                 </Box>
                             </Td>
                             { isWideVersion && <Td>12 de Fevereiro, 2023</Td>}
                             <Td>
                                 <Button as='a' 
                                size='sm' 
                                fontSize='sm' 
                                colorScheme='purple'
                                leftIcon={<Icon as={RiPencilLine} fontSize='16' />}>
                                 { isWideVersion && 'Editar'}
                                </Button>
                            </Td>

                            
                         </Tr>

                         <Tr>
                             <Td px={['4','4','6']}>
                             <Checkbox colorScheme='pink'/>
                             </Td>
                             <Td>
                                 <Box>
                                     <Text fontWeight='bold'>Izuku Midoriya</Text>
                                     <Text fontSize='sm' color='gray.300'>izuku.midoriya.hero12@gmail.com</Text>
                                 </Box>
                             </Td>
                             { isWideVersion && <Td>12 de Fevereiro, 2023</Td>}
                             <Td>
                                 <Button as='a' 
                                size='sm' 
                                fontSize='sm' 
                                colorScheme='purple'
                                leftIcon={<Icon as={RiPencilLine} fontSize='16' />}>
                                 { isWideVersion ? 'Editar' : ''}
                                </Button>
                            </Td>
                         </Tr>
                         <Tr>
                             <Td px={['4','4','6']}>
                             <Checkbox colorScheme='pink'/>
                             </Td>
                             <Td>
                                 <Box>
                                     <Text fontWeight='bold'>Bakugou Katsuki</Text>
                                     <Text fontSize='sm' color='gray.300'>bakugou.katsuki.hero23@gmail.com</Text>
                                 </Box>
                             </Td>
                             { isWideVersion && <Td>12 de Fevereiro, 2023</Td>}
                             <Td>
                                 <Button as='a' 
                                size='sm' 
                                fontSize='sm' 
                                colorScheme='purple'
                                leftIcon={<Icon as={RiPencilLine} fontSize='16' />}>
                                 { isWideVersion ? 'Editar' : ''}
                                </Button>
                            </Td>

                            
                         </Tr>
                     </Tbody>

                 </Table>

                 <Pagination />
            </Box>
        </Flex>
  </Box>
        
    );
};  




