import { Box, HStack, Stack, Icon, Text, Heading } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
const SideNav = () => {

    const navLinks = [{
        icon: RxDashboard,
        text: "Dashboard",
        link: "/"
    },
    {
        icon: TbArrowsDoubleNeSw,
        text: "Transactions",
        link: "/transactions"

    }]
    // .stack{
    //     display:flex;
    //     flex-direction:column;
    // }
    // .hstack{
    //     display:flex;
    //     align-items:center;
    // }

    return (
        <Stack boxShadow={{
            base: "none",
            lg: "lg",
        }} w={{
            base: "full",
            lg: "256px",
        }} h="100vh" justifyContent="space-between"

        >
            <Box>
                <Heading fontSize="20px" color="#5F00D9" padding="54px 46px 24px 28px " as="h1">@MeghanaBisht</Heading>
                <Box mt="6" mx="3">
                    {navLinks.map((nav) => (
                        <HStack padding="0px 12px" cursor="pointer" transition="0.5s ease" _hover={
                            {
                                bg: "#F3F3F7",
                                borderRadius: "10px",
                                color: "#171717"
                            }
                        }
                            color="#797e82"
                            key={nav.text}>
                            <Icon as={nav.icon} />
                            <Text fontSize="14px" padding="12px 6px" fontWeight="extrabold">{nav.text}</Text>
                        </HStack>))}
                </Box>
            </Box>
            <Box mt="6" mx="3" mb="6">
                <HStack padding="0px 12px" cursor="pointer" transition="0.5s ease" _hover={
                    {
                        bg: "#F3F3F7",
                        borderRadius: "10px",
                        color: "#171717"
                    }
                }
                    color="#797e82">
                    <Icon as={BiSupport} />
                    <Text fontSize="14px" padding="12px 6px" fontWeight="extrabold">Support</Text>
                </HStack>
            </Box>
        </Stack>
    )
}

export default SideNav