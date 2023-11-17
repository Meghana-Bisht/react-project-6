import { Box, HStack, Heading, Icon } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'
import { FaBars, FaUserCircle} from "react-icons/fa";

const TopNav = ({title,onOpen}) => {
    return (
        <Box px="4" bg="white">
            <HStack maxW="60rem" mx="auto" h="64px" justifyContent="space-between">
                <Icon as={FaBars} onClick={onOpen} display={{
                    base:"block",
                    lg:"none"
                }}/>
                <Heading fontWeight="bold" fontSize="28px">{title}</Heading>

                <Menu>
                    {/* <MenuButton as={Button} >
                    Actions
                </MenuButton> */}
                    <MenuButton>
                        <Icon as={FaUserCircle} fontSize="2.5rem" />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Dashboard</MenuItem>
                        <MenuItem>Transactions</MenuItem>
                        <MenuItem>Contact Us</MenuItem>
                        <MenuItem>Support</MenuItem>
                        <MenuItem>Log Out</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Box>
    )
}

export default TopNav