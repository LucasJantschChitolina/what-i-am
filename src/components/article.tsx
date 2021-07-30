/* eslint-disable jsx-a11y/alt-text */
import { Flex, Container, Text, Image, Heading, Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'

interface articleProps {
    data: {
        title: string;
        image_url: string;
        description: string;
        link_url: string;
    }
}

export default function Article({data}: articleProps) {  
  return (
    <>
      <Flex height="180px"  marginTop="25px" width="100%" borderRadius="8px" justifyContent="space-between" border="1px solid #690E7E">
        <Flex w="70%" flexDirection="column" justifyContent="space-between" padding="15px">
                <Heading fontSize="22px">{data.title}</Heading>
                <Text fontSize="18px" color="GrayText">{data.description}</Text>
                  <Link href={data.link_url} fontSize="18px" isExternal>
                    {data.link_url} <ExternalLinkIcon mx="2px" />
                  </Link>
        </Flex>
              <Link w="30%" href={data.link_url} isExternal>
              <Image
                w="100%"
                h="100%"
                objectFit="cover"
                borderRadius="0px 8px 8px 0px"
                src={data.image_url}
                // alt={data.title}
                />
              </Link>
      </Flex>
   </>
  )
}
