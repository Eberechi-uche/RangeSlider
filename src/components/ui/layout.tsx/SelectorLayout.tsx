import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";

export function SelectorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Flex flexDir={"column"}>
        <Flex w={"100%"} justify={"space-between"}>
          <Text
            fontSize={"18px"}
            fontWeight={"600px"}
            fontStyle={"italic"}
            color={"#fff"}
          >
            Hacker News
          </Text>
          <Flex w={"30%"} justifyContent={"space-evenly"}>
            <Box
              mr={"4"}
              borderBottomRadius={"0"}
              borderTopRadius={"10px"}
              color={"#D6455B"}
              bg={"#301a1a"}
              px={"4"}
              py={"1"}
              fontSize={"11.22px"}
              fontWeight={"600"}
            >
              Discard changes
            </Box>
            <Box
              borderBottomRadius={"0"}
              borderTopRadius={"10px"}
              color={"#4D6EDF"}
              bg={"#1f2745"}
              px={"4"}
              py={"1"}
              fontSize={"11.22px"}
              fontWeight={"600"}
            >
              save
            </Box>
          </Flex>
        </Flex>
        <SimpleGrid
          bg={"#312c2d"}
          px={"26px"}
          py={"12px"}
          columns={3}
          borderRadius={"5px"}
        >
          {children}
        </SimpleGrid>
      </Flex>
    </>
  );
}
