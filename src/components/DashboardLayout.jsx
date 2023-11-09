import { Flex, Box, Container } from "@chakra-ui/react"
import SideNav from "./SideNav"
import TopNav from "./TopNav"


const DashboardLayout = ({ title, children }) => {
    return (
        <div>
            <Flex>
                <SideNav />
                <Box flexGrow={1}>
                    <TopNav title={title} />
                    <Container maxW="60rem" >
                        {children}
                    </Container>
                </Box>
            </Flex>
        </div>
    )
}

export default DashboardLayout