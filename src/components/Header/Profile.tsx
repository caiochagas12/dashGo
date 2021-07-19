import { Flex, Box, Text, Avatar } from "@chakra-ui/react"

interface ProfileProps {
    showProfileData?:boolean;
}
export function Profile({showProfileData = true}:ProfileProps){
    return(
        <Flex>
            { showProfileData && (
                <Box mr='4' textAlign='right'>
                <Text>All Might</Text>
           <Text 
           color='gray.300'
           fontSize='small'>
               all.might.hero93@gmail.com
           </Text> 
           </Box>
            ) }
        <Avatar size='md'name='All Might' src='https://i.pinimg.com/originals/57/74/25/577425424d33b282994670a29e32df91.jpg'/>
        </Flex>
    );
}