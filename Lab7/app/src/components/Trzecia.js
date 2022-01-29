import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';


const rodzaj_karnetu = [
    {
        title: 'Karnet miesięczny',
        price: '149',
        description: [
            'Gwarancja stałej ceny karnetu',
            'Dostęp do klubu 24/7',
            'Woda na trening gratis',
            'Zajęcia grupowe w cenie',
        ],
        buttonVariant: 'outlined',
    },
    {
        title: 'Karnet na 6 miesięcy',
        subheader: 'Rekomendujemy',
        price: '76',
        description: [
            'Gwarancja stałej ceny karnetu',
            'Dostęp do klubu 24/7',
            'Woda na trening gratis',
            'Zajęcia grupowe w cenie',
        ],
        buttonVariant: 'contained',
    },
    {
        title: 'Karnet na 12 miesięcy',
        price: '45',
        description: [
            'Gwarancja stałej ceny karnetu',
            'Dostęp do klubu 24/7',
            'Woda na trening gratis',
            'Zajęcia grupowe w cenie',
        ],
        buttonVariant: 'outlined',
    },
];


function PricingContent() {
    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Kup Karnet
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Zacznij zmianę swojej sylwetki już dziś!
                </Typography>
                <Typography variant="h6" align="center" color="text.secondary" component="p">
                    Każdy rodzaj karnetu umozliwia dostęp do 240 obiektów w całej polsce.
                </Typography>
            </Container>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {rodzaj_karnetu.map((tier) => (
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Karnet na 12 miesięcy' ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >
                                        <Typography component="h2" variant="h3" color="text.primary">
                                            {tier.price}zł
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            /msc
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant={tier.buttonVariant}>
                                        Kup teraz
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default function Pricing() {
    return <PricingContent />;
}