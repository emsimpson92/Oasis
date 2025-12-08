import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/Header';
import ActivityCard from '../components/ActivityCard';
import EventsImg from '../assets/Events.webp';
import '../styles/fonts.css';

const eventVenueData = [
    {
        id: 1,
        name: 'Grand Ballroom',
        description: 'Host elegant weddings and galas in our spectacular grand ballroom with panoramic views.',
        image: '/favicon.svg',
    },
    {
        id: 2,
        name: 'Terrace Garden',
        description: 'Perfect for intimate ceremonies and outdoor celebrations surrounded by lush gardens.',
        image: '/favicon.svg',
    },
    {
        id: 3,
        name: 'Conference Center',
        description: 'State-of-the-art facilities for corporate events, conferences, and business meetings.',
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

function EventsPage() {
    const theme = useTheme();
    const styles = Styles(theme);

    return (
        <Box>
            <Header />
            <Box style={styles.root}>
                <Container maxWidth="lg">
                {/* Page Title */}
                <Typography variant="h1" style={styles.pageTitle}>
                    Events
                </Typography>

                {/* Hero Image */}
                <Box>
                    <img src={EventsImg} alt="Events Experience" style={styles.heroImage} />
                </Box>

                {/* Special Occasions Section */}
                <Typography variant="h2" style={styles.sectionTitle}>
                    Celebrate in Style
                </Typography>
                <Typography style={styles.descriptionText}>
                    From intimate gatherings to grand celebrations, our world-class venues and expert staff 
                    ensure your special event is truly unforgettable.
                </Typography>

                {/* Event Venues Section */}
                <Typography variant="h2" style={styles.sectionTitle}>
                    Our Event Venues
                </Typography>
                <Grid container spacing={4} style={{ display: 'flex', justifyContent: 'center' }}>
                {
                    eventVenueData.map((venue) => (
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

export default EventsPage;
