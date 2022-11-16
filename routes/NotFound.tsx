import { VStack, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <VStack justifyContent={"center"} minH={"100vh"} bg={"gray.100"}>
      <Heading>Page not found</Heading>
      <Text>It seems that you're lost.</Text>
      <Text>page 404.</Text>
      <Link to={"/"}>
        <Button colorScheme={"red.500"} variant={"link"}>
          Go home &rarr;
        </Button>
      </Link>
    </VStack>
  );
}
