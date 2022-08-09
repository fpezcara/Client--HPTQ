import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AnimatedLink } from "../../animations/animatedLink";
import BurgerMenu from "../BurgerMenu";

const NavBar = () => {
  return (
    <Flex
      as={motion.nav}
      bgImage="linear-gradient( 135deg, #845EC2 10%, #D65DB1 100%);"
      minH={["20vh", "15vh"]}
      p={3}
      boxShadow="0px 1px 10px #999"
      // justifyContent={["space-between", "space-between", "space-between"]}
      // alignItems={{ sm: "center", md: "start", lg: "space-between" }}
      // alignItems={["center", "space-between", "space-between"]}
      justifyContent={["center", "space-between", "start", "space-between"]}
      alignItems={["center", "center", "start", "center"]}
      initial={{ opacity: 0.33 }}
      animate={{ opacity: 1 }}
      transition="1.3s ease-in-out"
      // _hover={{ transform: "scale(1)", filter: "brightness(105%)" }}
      // flexDirection={{ base: "row", lg: "row", md: "column", sm: "row" }}
      flexDirection={["row", "row", "column", "row"]}
    >
      <Flex>
        <Heading
          as={motion.h1}
          fontSize={["12px", "sm", "3xl"]}
          fontWeight={"thin"}
          bg="white"
          bgClip="text"
          letterSpacing={2}
          initial={{ opacity: 0, y: -220 }}
          animate={{ opacity: 1, y: 0, fontSize: "40px" }}
          transition="1s fade-in"
          p={3}
          order={["2", "1", "1", "1"]}
        >
          Scribble Do
        </Heading>
      </Flex>
      <Flex
        as="ul"
        alignItems="space-between"
        justifyContent="space-between"
        minW="30%"
        p={1}
        mr={5}
        mt={["3%", "0"]}
        display={["none", "none", "flex"]}
        order={["2", "1"]}
        minWidth={{ sm: "80vw", lg: "30vw" }}
      >
        <AnimatedLink>
          <NavLink to="/">Home</NavLink>
        </AnimatedLink>
        <AnimatedLink>
          <NavLink to="/lobby">New Game</NavLink>
        </AnimatedLink>
        <AnimatedLink>
          <NavLink to="/leaderboard">LeaderBoard</NavLink>
        </AnimatedLink>
      </Flex>
      <BurgerMenu />
    </Flex>
  );
};

export default NavBar;
