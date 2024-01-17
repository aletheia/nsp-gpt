import * as React from 'react';
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
    Container,
    Image,
    HStack,
    Spacer,
} from '@chakra-ui/react';
import {ColorModeSwitcher} from '../../ColorModeSwitcher';
import {Logo} from './Logo';
import logo from './logo.svg';

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={12}>
                <VStack spacing={8}>
                    <HStack width="100%">
                        <Image src={logo} maxH={50} />
                        <Link
                            color="teal.500"
                            href="http://www.neosperience.com"
                            fontSize="xl"
                            target="_blank"
                            rel="noopener noreferrer">
                            Learn More
                        </Link>
                        <Spacer />
                        <ColorModeSwitcher justifySelf="flex-end" />
                    </HStack>
                    <iframe
                        src="https://www.agenthost.ai/chat/nsp-gpt?embed=true"
                        width="100%"
                        height="600px"
                        allowFullScreen></iframe>
                </VStack>
            </Grid>
        </Box>
    </ChakraProvider>
);
