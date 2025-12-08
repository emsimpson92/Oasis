import { Box, Button, Typography } from '@mui/material'
import { useTheme } from '../hooks/useTheme'

const Styles = (theme) => {
    return {
        footer: {
            backgroundColor: theme.colors.header,
            padding: `${theme.spacing.lg} ${theme.spacing.md}`,
            textAlign: 'center',
            marginTop: 'auto',
        },
        title: {
            fontSize: theme.typography.fontSize.xxlarge,
            color: theme.colors.primary,
            fontWeight: 'bold',
            userSelect: 'none',
            fontFamily: 'Arsenica Trial Regular, serif',
            marginBottom: theme.spacing.lg,
        },
        sectionsContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            gap: theme.spacing.xxl,
            flexWrap: 'wrap',
            maxWidth: '1000px',
            margin: '0 auto',
        },
        section: {
            minWidth: '150px',
            textAlign: 'left',
        },
        sectionTitle: {
            fontSize: theme.typography.fontSize.large,
            color: theme.colors.primary,
            fontWeight: 'bold',
            userSelect: 'none',
            marginLeft: '4px',
            fontFamily: 'Cormorant Garamond, serif',
            marginBottom: theme.spacing.sm,
        },
        sectionButton: {
            color: theme.colors.primary,
            textTransform: 'none',
            fontWeight: 'bold',
            padding: '4px',
            fontFamily: 'Cormorant Garamond, serif',
            textAlign: 'left',
            display: 'block',
            margin: `${theme.spacing.xs} 0`,
            '&:hover': {
                opacity: 0.7,
            },
        },
        oasisLogo: {
            width: '60px', 
            height: '60px', 
            userSelect: 'none',
        },
        divider: {
            border: `1px solid ${theme.colors.accent}`,
            margin: `${theme.spacing.xs} 0 ${theme.spacing.sm} 0`,
        }
    }
}

function Footer() {
    const theme = useTheme()
    const styles = Styles(theme)

    return (
        <Box sx={styles.footer}>
            <img src='/favicon.svg' alt='Oasis Logo' style={styles.oasisLogo} />
            <Typography variant="h2" sx={styles.title}>
                Enjoy Your Stay at the Oasis
            </Typography>
            <Box sx={styles.sectionsContainer}>
                <Box sx={styles.section}>
                    <Typography sx={styles.sectionTitle}>About</Typography>
                    <hr style={styles.divider} />
                    <Button variant="inline" sx={styles.sectionButton}>What is the Oasis?</Button>
                    <Button variant="inline" sx={styles.sectionButton}>Community Map</Button>
                </Box>
                <Box sx={styles.section}>
                    <Typography sx={styles.sectionTitle}>Events</Typography>
                    <hr style={styles.divider} />
                    <Button variant="inline" sx={styles.sectionButton}>Upcoming events</Button>
                    <Button variant="inline" sx={styles.sectionButton}>Request an Event</Button>
                </Box>
                <Box sx={styles.section}>
                    <Typography sx={styles.sectionTitle}>Contact</Typography>
                    <hr style={styles.divider} />
                    <Button variant="inline" sx={styles.sectionButton}>General Inquiries</Button>
                    <Button variant="inline" onClick={() => window.open('https://discord.gg/AhsnAsSUNK', '_blank', 'noopener,noreferrer')} sx={styles.sectionButton}>Join the Community</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer
