import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default Theme;
