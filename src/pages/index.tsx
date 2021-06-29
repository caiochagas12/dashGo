import { Flex , Button , Stack } from '@chakra-ui/react'
import  Head  from 'next/head';
import { Input } from '../components/Form/Input'
 
export default function SignIn() {

  return (
<>
  <Head> <title>Sign in | DashGO.</title> </Head>
    <Flex 
     w='100vw'
     h='100vh' 
     align='center' 
     justify='center'
    >

    <Flex as='form' 
     w='100%' 
     maxWidth={360}
     bg='gray.800' 
     p='8' 
     borderRadius={8}
     flexDirection='column'
    >

        <Stack spacing='4'>

 <Input type='email' name='email' label='E-mail'/>       
 <Input type='password' name='password' label='Senha'/>    

      </Stack>

       <Button type='submit' mt='6' size='lg'colorScheme='pink'>Entrar</Button>
    

    </Flex>

    </Flex>
</>
  );

}