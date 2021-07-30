import { Flex, Text, Button, useColorMode, Link, Grid } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Flex style={{ width: '70vw', height: '100px' }} justifyContent="space-between" fontSize="25px" border="0px solid red" paddingVertical="40px" align="center">
        <Text width="70%">What I am Reading</Text>
        <Grid width="30%" justifyContent="flex-end" gridTemplateColumns="3fr 3fr 1fr" textAlign="center">
            <Link href="/about"> About </Link>
            <Link href="/"> Home </Link>     
            <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon w={6} h={6}/> : <SunIcon w={6} h={6}/>}
            </Button>
        </Grid>
       </Flex>
   </>
  )
}
