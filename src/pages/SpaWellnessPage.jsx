import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/Header';
import ActivityCard from '../components/ActivityCard';
import SpaImg from '../assets/Springs.webp';
import '../styles/fonts.css';

const spaServiceData = [
    {
        id: 1,
        name: 'Massage Therapy',
        description: 'Relax and rejuvenate with our professional massage treatments designed to relieve tension and promote wellness.',
        image: '/favicon.svg',
    },
    {
        id: 2,
        name: 'Facial Treatments',
        description: 'Experience luxurious facials tailored to your skin type for a radiant, refreshed complexion.',
        image: '/favicon.svg',
    },
    {
        id: 3,
        name: 'Thermal Baths',
        description: 'Soak in our heated mineral-rich pools to unwind and restore your body and mind.',
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
        serviceCard: {
            textAlign: 'center',
        },
        serviceImage: {
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            marginBottom: theme.spacing.lg,
            boxShadow: theme.shadows.md,
        },
        serviceName: {
            fontSize: theme.typography.fontSize.xlarge,
            color: theme.colors.primary,
            fontWeight: 'bold',
            marginBottom: theme.spacing.sm,
            userSelect: 'none',
            fontFamily: 'Cormorant Garamond, serif',
        },
        serviceDescription: {
            fontSize: theme.typography.fontSize.base,
            color: theme.colors.text,
            lineHeight: '1.5',
        },
    };
};

function SpaWellnessPage() {
    const theme = useTheme();
    const styles = Styles(theme);

    return (
        <Box>
            <Header />
            <Box style={styles.root}>
                <Container maxWidth="lg">
                {/* Page Title */}
                <Typography variant="h1" style={styles.pageTitle}>
                    Spa & Wellness
                </Typography>

                {/* Hero Image */}
                <Box>
                    <img src={SpaImg} alt="Spa & Wellness Experience" style={styles.heroImage} />
                </Box>

                {/* Wellness Sanctuary Section */}
                <Typography variant="h2" style={styles.sectionTitle}>
                    Wellness Sanctuary
                </Typography>
                <Typography style={styles.descriptionText}>
                    Escape to our serene spa and wellness retreat. Discover treatments and 
                    therapies designed to harmonize your body, mind, and spirit.
                </Typography>

                {/* Services Section */}
                <Typography variant="h2" style={styles.sectionTitle}>
                    Our Services
                </Typography>
                <Grid container spacing={4} style={{ display: 'flex', justifyContent: 'center' }}>
                {
                    spaServiceData.map((service) => (
                        <Grid item xs={12} sm={6} md={4} key={service.id}>
                            <ActivityCard title={service.name} description={service.description}>
                                <img src={service.image} alt={service.name} style={styles.serviceImage} />
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

export default SpaWellnessPage;
