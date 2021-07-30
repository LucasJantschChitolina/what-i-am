import { Flex, Text } from "@chakra-ui/react";
import Reading from '../src/components/reading'

export default function Home() {
  return (
    <>
      <Flex style={{ width: '100vw', height: '100%' }} flexDirection="row" align="center" justify="center" fontSize="70px">
        <Reading/>
       </Flex>
   </>
  )
}
