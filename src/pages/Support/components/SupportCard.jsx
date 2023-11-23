import { Flex, Stack, Icon, Text } from "@chakra-ui/react"


import ContactCard from "./ContactCard";

const SupportCard = ({ icon,heading, para ,leftComponent}) => {
    return (
        <Flex gap={6} flexDirection={{
            base: "column",
            xl: "row",
        }}>
            <Stack maxW="380px" >
                <Icon boxSize={6} color="p.purple" as={icon} />
                <Text as="h1" fontWeight="bold" textStyle="h1">{heading}</Text>
                <Text fontSize="sm" color="black.60">{para}</Text>
            </Stack>
            {leftComponent}
        </Flex>
    )
}

export default SupportCard