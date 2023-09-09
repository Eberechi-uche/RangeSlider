"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";

export default function RangeSelector({
  range,
  name,
}: {
  range: number;
  name: string;
}) {
  const [rangeItems, setRangeItem] = useState([
    Array.from({ length: range }, (item, index) => index),
  ]);
  const [pickedRange, setPickedRange] = useState(0);
  return (
    <Flex
      w={"100%"}
      fontWeight={"600"}
      color={"#FDFBF7"}
      flexDir={"column"}
      alignItems={"center"}
    >
      <Text fontSize={"13px"} p={"15.2px"} textTransform={"capitalize"}>
        {name}
      </Text>
      <Flex align={"center"}>
        <Flex>
          {rangeItems[0].map((element) => (
            <RangeItem
              id={element + 1}
              pickedRange={pickedRange}
              setPickedRange={setPickedRange}
              zIndex={range + 1}
            />
          ))}
        </Flex>
        <Text mx={"4"} fontSize={"9.5px"}>{`${pickedRange}/ ${range} `}</Text>
      </Flex>
    </Flex>
  );
}

type RangeItemProp = {
  id: number;
  pickedRange: number;
  setPickedRange: Dispatch<SetStateAction<number>>;
  zIndex: number;
};

export function RangeItem(props: RangeItemProp) {
  return (
    <>
      <Flex
        align={"center"}
        position={"relative"}
        p={"0"}
        zIndex={props.zIndex}
        onClick={() => {
          props.setPickedRange(props.id);
        }}
        cursor={"pointer"}
      >
        <Box
          w={"30.25px"}
          h={"3.38px"}
          bg={props.pickedRange >= props.id ? "#5978E8" : "#FDFBF7"}
          borderRadius={props.id === 1 ? "full" : "none"}
        />
        <Box
          w={props.pickedRange === props.id ? "12.89px" : "6.95px"}
          h={props.pickedRange === props.id ? "12.89px" : "6.95px"}
          position={"absolute"}
          right={"0px"}
          bg={props.pickedRange > props.id ? "#5978E8" : "#FDFBF7"}
          border={props.pickedRange >= props.id ? "2px solid" : "0"}
          borderColor={"#5978E8"}
          borderRadius={"full"}
          zIndex={props.pickedRange === props.id ? 10 : 1}
        />
      </Flex>
    </>
  );
}
