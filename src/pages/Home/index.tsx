import { Text, useMediaQuery } from "@chakra-ui/react";

export const Home = () => {
  const [isLargerThan819] = useMediaQuery("(min-width: 767px)");

  return <Text>Home</Text>;
};
