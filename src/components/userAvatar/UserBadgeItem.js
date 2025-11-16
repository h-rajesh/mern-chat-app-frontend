import { CloseIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'
import React from 'react'

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <div>
          <Box
           px={2}
           py={1}
              m={2}
              mb={2}
           borderRadius="lg"
           variant="solid"
              fontSize={12}
              backgroundColor="purple"
           color="white"
           cursor="pointer"
            onClick={handleFunction}
          >
              {user.name}
              <CloseIcon pl={1}/>
      </Box>
    </div>
  )
}

export default UserBadgeItem
