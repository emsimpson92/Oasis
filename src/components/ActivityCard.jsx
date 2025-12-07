import { Card, CardContent, CardMedia, Typography, Link } from '@mui/material';
import { useTheme } from '../hooks/useTheme';

const Styles = (theme) => {
    return {
        root: {
            backgroundColor: theme.colors.header,
            height: '100%',
            display: 'flex',
            width: '350px',
            flexDirection: 'column',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
            '&:hover': {
                transform: 'translateY(-5px)',
            }
        },
        cardTitle: {            
            color: theme.colors.primary,
            fontWeight: 'bold',
        },
        description: {            
            color: theme.colors.text,
            marginBottom: theme.spacing.md,
            flex: 1,
        },
        learnMore: {            
            color: theme.colors.accent,
            textDecoration: 'underline',
            textDecorationColor: theme.colors.accent,
            textDecorationThickness: '2px',
            textUnderlineOffset: '4px',
            display: 'inline-block',
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 'bold',
            '&:hover': {
                opacity: 0.8,
            },
        },
        link: { 
            textDecoration: 'none', 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100%' 
        },
        content: {
            display: 'flex', 
            flexDirection: 'column',
            flex: 1
        }
    }
};

function ActivityCard({ title, description, link, children }) {
    const theme = useTheme();
    const styles = Styles(theme);

    return (
        <Card sx={styles.root}>
            <Link href={link} style={styles.link}>
                <CardMedia component="div">{children}</CardMedia>
                <CardContent sx={styles.content}>
                    <Typography gutterBottom variant="h5" style={styles.cardTitle}>
                        {title}
                    </Typography>
                    <Typography variant="body2" style={styles.description}>
                        {description}
                    </Typography>
                    <Typography sx={styles.learnMore}>
                        Learn More →
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    )
}

export default ActivityCard;