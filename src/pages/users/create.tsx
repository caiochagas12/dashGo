import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input} from '../../components/Form/Input'
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { useMutation } from 'react-query'
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({

})

export default function CreateUser(){
    const router = useRouter()
    const createUser = useMutation(async (user:CreateUserFormData) => {
        const response = await api.post('users',{
            user:{
                ...user,
                created_at: new Date()
            }
        })

        return response.data.user;
    },{
        onSuccess:() =>{
            queryClient.invalidateQueries('users')
        }
    });

    const { register, handleSubmit, formState: { errors, isSubmitting}} = useForm({
        resolver:yupResolver(createUserFormSchema)
    })

    const handelCreateUser:SubmitHandler<CreateUserFormData> = async (values) =>{
        await createUsers.mutateAsync(values)

        router.push('/users')
    }
    return(
    <Box>
        <Header />

        <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
            <Sidebar/>
        
             <Box flex='1' borderRadius={8} bg='gray.800' p={['6','8']}>
                 <Heading size='lg' fontWeight='normal'>Criar Usuário</Heading>

                 <Divider my='6' borderColor='gray.700'/>

                 <VStack spacing='8'>

                    <SimpleGrid minChildWidth='240px' spacing={['6','8']} w='100%'>
                        <Input name='name' label='Nome completo'/>
                        <Input name='email' type='email' label='E-mail'/>
                    </SimpleGrid>

                    <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                        <Input name='password' type='password' label='Senha'/>
                        <Input name='password_confirmation' type='password' label='Confirmação da senha'/>
                    </SimpleGrid>

                 </VStack>

                 <Flex mt='6'justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href={'/users'}>
                            <Button colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>
                            <Button colorScheme='pink'>Salvar</Button>
                        </HStack>
                 </Flex>
             </Box>
        </Flex>
    </Box>
    );
};




