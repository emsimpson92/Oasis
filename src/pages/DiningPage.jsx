import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/Header';
import ActivityCard from '../components/ActivityCard';
import DiningImg from '../assets/Dining.webp';
import '../styles/fonts.css';

const restaurantData = [
    {
        id: 1,
        name: 'Coming Soon',
        description: 'Restaurant options coming soon!',
        image: '/favicon.svg',
    },
    {
        id: 2,
        name: 'Coming Soon',
        description: 'Restaurant options coming soon!',
        image: '/favicon.svg',
    },
    {
        id: 3,
        name: 'Coming Soon',
        description: 'Restaurant options coming soon!',
        image: '/favicon.svg',
    },
];

const Styles = (theme) => {
    return {
        root: {
            backgroundColor: theme.colors.background,
            minHeight: '100vh',
            paddingBottom: theme.spacing.xxl,
        },
        pageTitle: {
            fontSize: '3.5rem',
            color: theme.colors.primary,
            fontWeight: 'bold',
            marginBottom: theme.spacing.xl,
            userSelect: 'none',
            fontFamily: 'Arsenica Trial Regular, serif',
            textAlign: 'center',
        },
        heroImage: {
            width: '100%',
            height: '400px',
            borderRadius: '16px',
            objectFit: 'cover',
            marginBottom: theme.spacing.xxl,
            boxShadow: theme.shadows.lg,
        },
        sectionTitle: {
            fontSize: theme.typography.fontSize.xxlarge,
            color: theme.colors.primary,
            textAlign: 'center',
            marginBottom: theme.spacing.xl,
            userSelect: 'none',
            fontWeight: 'bold',
            fontFamily: 'Arsenica Trial Regular, serif',
        },
        descriptionText: {
            fontSize: theme.typography.fontSize.large,
            color: theme.colors.text,
            textAlign: 'center',
            marginBottom: theme.spacing.xxl,
            lineHeight: '1.6',
        },
        restaurantImage: {
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            marginBottom: theme.spacing.lg,
            boxShadow: theme.shadows.md,
        },
    };
};

function DiningPage() {
    const theme = useTheme();
    const styles = Styles(theme);

    return (
        <Box>
            <Header />
            <Box style={styles.root}>
                <Container maxWidth="lg">
                {/* Page Title */}
                <Typography variant="h1" style={styles.pageTitle}>
                    Dining
                </Typography>

                {/* Hero Image */}
                <Box>
                    <img src={DiningImg} alt="Dining Experience" style={styles.heroImage} />
                </Box>

                {/* Culinary Excellence Section */}
                <Typography variant="h2" style={styles.sectionTitle}>
                    Culinary Excellence
                </Typography>
                <Typography style={styles.descriptionText}>
                    Indulge in a variety of exquisite dining options. Savor gourmet dishes 
                    made from the freshest ingredients, with flavors that will delight your palate.
                </Typography>

                {/* Restaurants Section */}
                <Typography variant="h2" style={styles.sectionTitle}>
                    Our Restaurants
                </Typography>
                <Grid container spacing={4} style={{ display: 'flex', justifyContent: 'center' }}>
                {
                    restaurantData.map((restaurant) => (
                        <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                            <ActivityCard title={restaurant.name} description={restaurant.description}>
                                <img src={restaurant.image} alt={restaurant.name} style={styles.restaurantImage} />
                            </ActivityCard>
                        </Grid>
                    ))
                }
                </Grid>
            </Container>
            </Box>
        </Box>
    );
}

export default DiningPage;
