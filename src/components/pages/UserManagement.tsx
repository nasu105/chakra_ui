import { Center, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, Stack, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react';
import React, { FC, useCallback, useEffect } from 'react'
import { useAllUsers } from '../../hooks/useAllUsers';
import { useLoginUser } from '../../hooks/useLoginUser';
import { useSelectUser } from '../../hooks/useSelectUsers';
import { UserCard } from '../organisms/user/UserCard';
import { UserDetailModal } from '../organisms/user/UserDetailModal';

export const UserManagement: FC = React.memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  console.log(loginUser);
  
  useEffect(() => getUsers(), []);

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen });
  }, [users, onSelectUser, onOpen]);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify='space-around'>
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                id={user.id}
                imageUrl='https://source.unsplash.com/random'
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              ></UserCard>
            </WrapItem>
          ))}    
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={ isOpen } onClose={onClose} isAdmin={loginUser?.isAdmin}></UserDetailModal>
    </>
  );
});
