import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/Header';
import ActivityCard from '../components/ActivityCard';
import AccommodationsImg from '../assets/Accommodations.webp';
import '../styles/fonts.css';

const roomTypeData = [
    {
        id: 1,
        name: 'Deluxe Suite',
        description: 'Spacious suites with panoramic views, premium bedding, and modern amenities.',
        image: '/favicon.svg',
    },
    {
        id: 2,
        name: 'Ocean View Villa',
        description: 'Exclusive villas with private balconies overlooking the ocean and direct beach access.',
        image: '/favicon.svg',
    },
    {
        id: 3,
        name: 'Presidential Penthouse',
        description: 'Luxury penthouse suites with exceptional service and unparalleled comfort and elegance.',
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
        roomImage: {
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            marginBottom: theme.spacing.lg,
            boxShadow: theme.shadows.md,
        },
    };
};

function AccommodationsPage() {
    const theme = useTheme();
    const styles = Styles(theme);

    return (
        <Box>
            <Header />
            <Box style={styles.root}>
                <Container maxWidth="lg">
                {/* Page Title */}
                <Typography variant="h1" style={styles.pageTitle}>
                    Accommodations
                </Typography>

                {/* Hero Image */}
                <Box>
                    <img src={AccommodationsImg} alt="Accommodations Experience" style={styles.heroImage} />
                </Box>

                {/* Luxury Comfort Section */}
                <Typography variant="h2" style={styles.sectionTitle}>
                    Your Sanctuary Awaits
                </Typography>
                <Typography style={styles.descriptionText}>
                    Discover our world-class accommodations designed for comfort and luxury. 
                    Each room offers breathtaking views and exceptional amenities for your perfect stay.
                </Typography>

                {/* Room Types Section */}
                <Typography variant="h2" style={styles.sectionTitle}>
                    Room Types
                </Typography>
                <Grid container spacing={4} style={{ display: 'flex', justifyContent: 'center' }}>
                {
                    roomTypeData.map((room) => (
                        <Grid item xs={12} sm={6} md={4} key={room.id}>
                            <ActivityCard title={room.name} description={room.description}>
                                <img src={room.image} alt={room.name} style={styles.roomImage} />
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

export default AccommodationsPage;
