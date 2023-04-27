import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react'
import React, { ChangeEvent, FC, useState } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { PrimaryButton } from '../atoms/button/PrimaryButton';

export const Login: FC = React.memo(() => {
  const { login, loading } = useAuth();

  const [userId, setUserId] = useState('');

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

  const onClickLogin = () => login(userId);

  return (
    <Flex align='center' justify='center' height='100vh'>
      <Box bg='white' w='sm' p={4} borderRadius='md' shadow='md'>
        <Heading as="h1" size='lg' textAlign='center'> 
          ユーザー管理アプリ
        </Heading>
        <Divider my={4}></Divider>
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder='userID' value={userId} onChange={onChangeUserId}></Input>
          <PrimaryButton onClick={onClickLogin} disabled={userId === ''} loading={loading}>Login</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
