import { Flex, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Article from "./article";

export default function Reading() {
    const [data, setData] = useState<any>([]);
    const [hasData, setHasData] = useState<boolean>(false);

    async function getDataFromBackend(){
        const rest = await fetch("http://localhost:8000/posts");
        const data = await rest.json();
        setHasData(true);

        data.map((item: any) => {
            console.log(item)
        })

        setData(data)
    };

    useEffect(() => {
        getDataFromBackend()
    },[])

    return (
    <>
      <Flex height="100%" width="70vw" flexDirection="column" align="center" border="0px solid blue">
        {hasData ? data.map((item:any) => (<Article key={item.id} data={item} />)) : <p>aguardando...</p>}
     </Flex>
   </>
  )
}
