import { Grid, SimpleGrid } from '@mantine/core';
import { Navigation } from './navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
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
