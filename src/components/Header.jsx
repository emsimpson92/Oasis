import { Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import DiscordIcon from '../assets/discord-icon.svg';

const Styles = (theme) => {
    return {
        header: {
            backgroundColor: theme.colors.background,
            padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 100,
        },
        oasisLogo: {
            width: '35px', 
            height: '35px', 
            userSelect: 'none',
        },
        logo: {
            color: theme.colors.primary,
            textDecoration: 'none',
            fontSize: theme.typography.fontSize.xxlarge,
            fontWeight: 'bold',
            fontFamily: 'Arsenica Trial Regular, serif',
            '&:hover': {
                opacity: 0.8,
            },
        },
        discordButton: {
            background: 'transparent',
            color: theme.colors.primary,
            border: 'none',
            textTransform: 'none',
            fontSize: theme.typography.fontSize.large,
            cursor: 'pointer',
            fontFamily: 'serif',
            padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.sm,
            '&:hover': {
                opacity: 0.7,
            },
            '@media (max-width: 768px)': {
                padding: `${theme.spacing.xs}`,
            },
        },
        discordText: {
            '@media (max-width: 768px)': {
                display: 'none',
            },
        },
        oasisText: {
            transform: 'translateY(-4px)',
            display: 'inline-block',
            paddingLeft: `${theme.spacing.sm}`
        }
    };
};

function Header() {
    const theme = useTheme();
    const styles = Styles(theme);

    return (
        <Box sx={styles.header}>
            <RouterLink to="/" style={styles.logo}>            
                <img src='/favicon.svg' alt='Oasis Logo' style={styles.oasisLogo} />
                <span style={styles.oasisText}>The Oasis</span>
            </RouterLink>
            <Button variant="text" href="https://discord.gg/AhsnAsSUNK" target="_blank" rel="noopener noreferrer" sx={styles.discordButton}>
                <img src={DiscordIcon} alt="Discord" style={{ width: '24px', height: '24px' }} />
                <span style={styles.discordText}>Join us on Discord</span>
            </Button>
        </Box>
    );
}

export default Header;
