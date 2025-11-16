import { Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

const ChatLoading = () => {
  return (
    <Stack>
      <Skeleton height="40px" w="100%" borderRadius="10px"/>
      <Skeleton height="40px" w="100%" borderRadius="10px"/>
      <Skeleton height="40px" w="100%" borderRadius="10px"/>
      <Skeleton height="40px" w="100%" borderRadius="10px"/>
      <Skeleton height="40px" w="100%" borderRadius="10px"/>
      <Skeleton height="40px" w="100%" borderRadius="10px"/>
      <Skeleton height="40px" w="100%" borderRadius="10px"/>
      <Skeleton height="40px" w="100%" borderRadius="10px"/>
      <Skeleton height="40px" w="100%" borderRadius="10px"/>
    </Stack>
  )
}

export default ChatLoading
