import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/Header';
import ActivityCard from '../components/ActivityCard';
import RecreationImg from '../assets/Recreation.webp';
import '../styles/fonts.css';

const activityData = [
    {
        id: 1,
        name: 'Waterfall Hikes',
        description: 'Explore stunning natural waterfalls on scenic hiking trails through pristine landscapes.',
        image: '/favicon.svg',
    },
    {
        id: 2,
        name: 'Beach Activities',
        description: 'Enjoy swimming, surfing, and water sports on our beautiful sandy beaches.',
        image: '/favicon.svg',
    },
    {
        id: 3,
        name: 'Adventure Sports',
        description: 'Experience thrilling activities including zip-lining, rock climbing, and kayaking.',
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
        activityImage: {
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            marginBottom: theme.spacing.lg,
            boxShadow: theme.shadows.md,
        },
    };
};

function RecreationPage() {
    const theme = useTheme();
    const styles = Styles(theme);

    return (
        <Box>
            <Header />
            <Box style={styles.root}>
                <Container maxWidth="lg">
                {/* Page Title */}
                <Typography variant="h1" style={styles.pageTitle}>
                    Recreation
                </Typography>

                {/* Hero Image */}
                <Box>
                    <img src={RecreationImg} alt="Recreation Experience" style={styles.heroImage} />
                </Box>

                {/* Outdoor Adventures Section */}
                <Typography variant="h2" style={styles.sectionTitle}>
                    Outdoor Adventures Await
                </Typography>
                <Typography style={styles.descriptionText}>
                    Discover the natural beauty and thrilling activities our paradise has to offer. 
                    From serene hikes to adrenaline-pumping sports, there's something for everyone.
                </Typography>

                {/* Activities Section */}
                <Typography variant="h2" style={styles.sectionTitle}>
                    Our Activities
                </Typography>
                <Grid container spacing={4} style={{ display: 'flex', justifyContent: 'center' }}>
                {
                    activityData.map((activity) => (
                        <Grid item xs={12} sm={6} md={4} key={activity.id}>
                            <ActivityCard title={activity.name} description={activity.description}>
                                <img src={activity.image} alt={activity.name} style={styles.activityImage} />
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

export default RecreationPage;
