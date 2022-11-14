import { Box, HStack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <HStack justifyContent={"space-between"} py={5} px={40}>
      <Box>
        <Text>© 2022 Airbnb, Inc.·Privacy·Terms·Sitemap·Destinations</Text>
      </Box>
    </HStack>
  );
}
