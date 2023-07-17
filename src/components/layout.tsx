import { Grid, SimpleGrid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Navigation } from './navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
    const largeScreen = useMediaQuery('(min-width: 60em)');
    return (
        <Grid>
            <Grid.Col md={2} xs={12}>
                <Navigation />
            </Grid.Col>
            <Grid.Col md={10} xs={12}>
                <main>{children}</main>
            </Grid.Col>
            {/* <Footer/> */}
        </Grid>
    );
}
