"use client";

import { Flex, Icon, Text } from "@chakra-ui/react";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { CheckedIconChecked, CheckedIconUnChecked } from "./ui/icons/Icons";

export function RadioSelector() {
  const [selected, setSelected] = useState("");
  return (
    <>
      <Flex>
        <SelectorItems
          value="Text Snippet"
          selected={selected}
          setSelected={setSelected}
        />
        <SelectorItems
          value="Image"
          selected={selected}
          setSelected={setSelected}
        />
        <SelectorItems
          value="Collapsable"
          selected={selected}
          setSelected={setSelected}
        />
      </Flex>
    </>
  );
}
export function SelectorItems({
  value,
  selected,
  setSelected,
}: {
  value: string;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Flex
      align={"center"}
      onClick={() => {
        setSelected(value);
      }}
      cursor={"pointer"}
      fontWeight={"600"}
      color={"#FDFBF7"}
      fontSize={"11.92px"}
    >
      {selected === value ? <CheckedIconChecked /> : <CheckedIconUnChecked />}
      <Text mx={"2"}> {value}</Text>
    </Flex>
  );
}
