import { Box, Button, ChakraProvider, Container, extendTheme, Flex, Grid, GridItem, Heading, IconButton, Image, Input, Link, Stack, Text, useColorMode, VStack, useColorModeValue, Menu, MenuButton, MenuList, MenuItem, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { FaBicycle, FaCoffee, FaInstagram, FaFacebookF, FaTwitter, FaMoon, FaSun, FaBars } from "react-icons/fa";

// Theme configuration
const theme = extendTheme({
  colors: {
    darkGray: "#333",
    leatherBrown: "#845422",
    vintageRed: "#D04E50",
    cream: "#F3ECE0",
  },
  fonts: {
    heading: "Avenir, sans-serif",
    body: "Georgia, serif",
  },
});

const Index = () => {
  const { colorMode, toggleColorMode } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("cream", "darkGray");
  const color = useColorModeValue("darkGray", "cream");

  return (
    <ChakraProvider theme={theme}>
      <Box bg={bg} color={color} minH="100vh">
        <Container maxW="container.lg">
          {/* Header */}
          <Flex as="header" py={4} justify="space-between" align="center" position="sticky" top={0} zIndex={10}>
            <Heading size="lg">
              <FaCoffee /> Bike & Brew
            </Heading>
            <IconButton aria-label="Toggle Dark Mode" icon={colorMode === "dark" ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} />
            <Menu>
              <MenuButton as={Button} rightIcon={<FaBars />} variant="ghost">
                Menu
              </MenuButton>
              <MenuList>
                <MenuItem>Our Story</MenuItem>
                <MenuItem>Menu</MenuItem>
                <MenuItem>Community Events</MenuItem>
                <MenuItem>Contact</MenuItem>
              </MenuList>
            </Menu>
          </Flex>

          {/* Hero Section */}
          <VStack as="section" spacing={4} py={12}>
            <Image src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzEwMzE5NTgzfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
            <Heading as="h1" size="xl">
              Where Biking Meets Brewing
            </Heading>
            <Text fontSize="lg">Join us for a ride, stay for the coffee.</Text>
            <Button colorScheme="vintageRed" onClick={onOpen}>
              Visit Us
            </Button>
          </VStack>

          {/* About Section */}
          <Grid as="section" templateColumns="repeat(2, 1fr)" gap={6} py={12}>
            <GridItem colSpan={{ base: 2, md: 1 }}>
              <Heading as="h2" size="lg">
                Our Story
              </Heading>
              <Text mt={4}>Bike & Brew combines the thrill of biking with the comfort of a warm cup of coffee. Our commitment to sustainability and love for the biking community drives us each day.</Text>
            </GridItem>
            <GridItem colSpan={{ base: 2, md: 1 }}>
              <Image src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiaWtpbmclMjBjb2ZmZWUlMjBjb21tdW5pdHl8ZW58MHx8fHwxNzEwMzE5NTg0fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
            </GridItem>
          </Grid>

          {/* Menu Section */}
          <VStack as="section" spacing={4} py={12}>
            <Heading as="h2" size="lg">
              Our Menu
            </Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              {/* Repeat this for each menu item */}
              <GridItem>
                <Box p={4} shadow="md" borderRadius="md">
                  <Image src="https://images.unsplash.com/photo-1497636577773-f1231844b336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydHxlbnwwfHx8fDE3MTAzMTk1ODR8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
                  <Heading as="h3" size="md" mt={2}>
                    Signature Latte
                  </Heading>
                  <Text mt={1}>A classic favorite with a Bike & Brew twist.</Text>
                </Box>
              </GridItem>
              {/* End of menu item repeat */}
            </Grid>
          </VStack>

          {/* Events Calendar */}
          <VStack as="section" spacing={4} py={12}>
            <Heading as="h2" size="lg">
              Upcoming Events
            </Heading>
            <Button colorScheme="vintageRed" onClick={onOpen}>
              View Calendar
            </Button>
            {/* Modal for events details */}
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Event Details</ModalHeader>
                <ModalCloseButton />
                <ModalBody>{/* Event details go here */}</ModalBody>
                <ModalFooter>
                  <Button colorScheme="vintageRed" onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </VStack>

          {/* Footer */}
          <Flex as="footer" direction="column" align="center" py={12}>
            <Stack direction="row" spacing={4}>
              <IconButton as={Link} aria-label="Instagram" icon={<FaInstagram />} />
              <IconButton as={Link} aria-label="Facebook" icon={<FaFacebookF />} />
              <IconButton as={Link} aria-label="Twitter" icon={<FaTwitter />} />
            </Stack>
            <Stack mt={4}>
              <Heading as="h4" size="sm">
                Subscribe to Our Newsletter
              </Heading>
              <Flex>
                <Input placeholder="Enter your email" />
                <Button colorScheme="vintageRed">Subscribe</Button>
              </Flex>
            </Stack>
          </Flex>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
