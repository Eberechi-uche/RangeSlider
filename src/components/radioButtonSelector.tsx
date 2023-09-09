"use client";

import { Flex, Icon, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { CheckedIconChecked, CheckedIconUnChecked } from "./ui/icons/Icons";

export function RadioSelector({ children }: { children: ReactNode }) {
  const [checked, setChecked] = useState("");
  return (
    <>
      <Flex></Flex>
    </>
  );
}
export function SelectorItems({ value }: { value: string }) {
  return (
    <Flex align={"center"}>
      <CheckedIconChecked />
      <Text> {value}</Text>
    </Flex>
  );
}
