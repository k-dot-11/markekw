import {
	Avatar,
	Box,
	Button,
	chakra,
	CloseButton,
	Flex,
	Heading,
	HStack,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	useColorModeValue,
	useDisclosure,
	VisuallyHidden,
	VStack
} from '@chakra-ui/react';
import React from 'react';
import { DarkModeSwitch } from './DarkModeSwitch';
import {
	AiFillBell,
	AiFillHome,
	AiFillRocket,
	AiFillVideoCamera,
	AiOutlineInbox,
	AiOutlineMenu,
	AiOutlineSearch,
  AiOutlineShop
} from 'react-icons/ai';
export default function NavBar() {
	const bg = useColorModeValue('#EA5C2B', 'gray.800');
	const mobileNav = useDisclosure();

	return (
		<React.Fragment>
			<chakra.header bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md">
				<Flex alignItems="center" justifyContent="space-between" mx="auto">
					<HStack display="flex" spacing={3} alignItems="center">
						<Box display={{ base: 'inline-flex', md: 'none' }}>
							<IconButton
								display={{ base: 'flex', md: 'none' }}
								aria-label="Open menu"
								fontSize="20px"
								color={useColorModeValue('gray.200', 'inherit')}
								variant="ghost"
								icon={<AiOutlineMenu />}
								onClick={mobileNav.onOpen}
							/>
							<VStack
								pos="absolute"
								top={0}
								left={0}
								right={0}
								display={mobileNav.isOpen ? 'flex' : 'none'}
								flexDirection="column"
								p={2}
								pb={4}
								m={2}
								bg={bg}
								spacing={3}
								rounded="sm"
								shadow="sm"
							>
								<CloseButton
									aria-label="Close menu"
									justifySelf="self-start"
									onClick={mobileNav.onClose}
								/>
								<Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
									Dashboard
								</Button>
								<Button w="full" variant="solid" colorScheme="brand" leftIcon={<AiOutlineInbox />}>
									Inbox
								</Button>
								<Button w="full" variant="ghost" leftIcon={<AiFillVideoCamera />}>
									Videos
								</Button>
							</VStack>
						</Box>
						<chakra.a href="/" title="Choc Home Page" display="flex" alignItems="center" />

						<HStack spacing={3} display={{ base: 'none', md: 'inline-flex' }}>
              <Heading  fontSize={'3xl'}>Markekw</Heading>
							<Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
								Home
							</Button>
							<Button variant="outline" leftIcon={<AiOutlineShop />} size="sm">
								Market
							</Button>
							<Button variant="ghost" leftIcon={<AiFillRocket />} size="sm">
								Orders
							</Button>
						</HStack>
					</HStack>

					<HStack spacing={3} display={mobileNav.isOpen ? 'none' : 'flex'} alignItems="center">
						<InputGroup>
							<InputLeftElement pointerEvents="none" children={<AiOutlineSearch />} />
							<Input type="tel" placeholder="Search..." />
						</InputGroup>

						<chakra.a
							p={3}
							color={useColorModeValue('gray.800', 'inherit')}
							rounded="sm"
							_hover={{ color: useColorModeValue('gray.800', 'gray.600') }}
						>
							<AiFillBell />
							<VisuallyHidden>Notifications</VisuallyHidden>
						</chakra.a>

						<Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
						<DarkModeSwitch />
					</HStack>

				</Flex>
			</chakra.header>
		</React.Fragment>
	);
}
