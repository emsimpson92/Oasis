import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/Header';
import ActivityCard from '../components/ActivityCard';
import NightlifeImg from '../assets/Nightlife.webp';
import '../styles/fonts.css';

const venueData = [
    {
        id: 1,
        name: 'The Velvet Lounge',
        description: 'Experience sophisticated cocktails and live jazz in our elegant lounge setting.',
        image: '/favicon.svg',
    },
    {
        id: 2,
        name: 'Starlight Bar',
        description: 'Dance to curated DJ sets under dazzling lights in our vibrant nightclub.',
        image: '/favicon.svg',
    },
    {
        id: 3,
        name: 'The Oasis Club',
        description: 'Premium cocktails and spectacular views create an unforgettable evening.',
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
        venueImage: {
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            marginBottom: theme.spacing.lg,
            boxShadow: theme.shadows.md,
        },
    };
};

function NightlifePage() {
    const theme = useTheme();
    const styles = Styles(theme);

    return (
        <Box>
            <Header />
            <Box style={styles.root}>
                <Container maxWidth="lg">
                {/* Page Title */}
                <Typography variant="h1" style={styles.pageTitle}>
                    Nightlife
                </Typography>

                {/* Hero Image */}
                <Box>
                    <img src={NightlifeImg} alt="Nightlife Experience" style={styles.heroImage} />
                </Box>

                {/* Entertainment Section */}
                <Typography variant="h2" style={styles.sectionTitle}>
                    Vibrant Entertainment
                </Typography>
                <Typography style={styles.descriptionText}>
                    Immerse yourself in our world-class nightlife. From elegant lounges to energetic clubs, 
                    we offer unforgettable evenings with premium drinks and exceptional entertainment.
                </Typography>

                {/* Venues Section */}
                <Typography variant="h2" style={styles.sectionTitle}>
                    Our Venues
                </Typography>
                <Grid container spacing={4} style={{ display: 'flex', justifyContent: 'center' }}>
                {
                    venueData.map((venue) => (
                        <Grid item xs={12} sm={6} md={4} key={venue.id}>
                            <ActivityCard title={venue.name} description={venue.description}>
                                <img src={venue.image} alt={venue.name} style={styles.venueImage} />
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

export default NightlifePage;
