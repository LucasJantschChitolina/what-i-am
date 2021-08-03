import { Flex, Button, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Article from "./article";
import InfiniteScroll from 'react-infinite-scroll-component'; //will be used on next update

export default function Reading() {
    const [data, setData] = useState<any>([]);
    const [hasData, setHasData] = useState<boolean>(false);

    async function getDataFromBackend(){
        const rest = await fetch("https://what-i-am-backend.herokuapp.com/posts");
        const data = await rest.json();
        setHasData(true);
        setData(data)
    };

    useEffect(() => {
        getDataFromBackend()
    },[])

    return (
    <>
      <Flex height="90%" width="70vw" flexDirection="column" align="center" border="0px solid blue"  overflowY="auto">
        {hasData ? data.map((item:any) => (<Article key={item.id} data={item} />)) : <Spinner color="red.500" size="xl"/>}
     </Flex>
   </>
  )
}
