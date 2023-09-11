"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";

export default function RangeSelectorContainer({
  range,
  label,
}: {
  range: number;
  label: string;
}) {
  const [rangeItems, setRangeItem] = useState([
    Array.from({ length: range }, (item, index) => index),
  ]);

  return (
    <>
      <RangeSelector label={label} rangeItems={rangeItems[0]} />
    </>
  );
}

function RangeSelector({
  rangeItems,
  label,
}: {
  rangeItems: number[];
  label: string;
}) {
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
        {label}
      </Text>
      <Flex align={"center"}>
        <Flex>
          {rangeItems.map((element) => (
            <RangeItem
              id={element + 1}
              pickedRange={pickedRange}
              setPickedRange={setPickedRange}
            />
          ))}
        </Flex>
        <Text
          mx={"4"}
          fontSize={"9.5px"}
        >{`${pickedRange}/ ${rangeItems.length} `}</Text>
      </Flex>
    </Flex>
  );
}

type RangeItemProp = {
  id: number;
  pickedRange: number;
  setPickedRange: Dispatch<SetStateAction<number>>;
};

function RangeItem(props: RangeItemProp) {
  return (
    <>
      <Flex
        align={"center"}
        position={"relative"}
        p={"0"}
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
        />
      </Flex>
    </>
  );
}
