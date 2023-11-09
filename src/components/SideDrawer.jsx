import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
} from '@chakra-ui/react'
import SideNav from './SideNav'

const SideDrawer = ({ onClose, isOpen }) => {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    // const btnRef = React.useRef()

    return (
        <>
            {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
            </Button> */}
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                // finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <SideNav />

                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )

}

export default SideDrawer