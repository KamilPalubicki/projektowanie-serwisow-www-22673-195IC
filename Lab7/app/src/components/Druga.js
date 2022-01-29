import * as React from 'react';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from "@material-ui/core/Button";

function Druga(){
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            backgroundImage: "url('https://cdn.wallpapersafari.com/73/0/251fyQ.png')",
            height:'100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            alignItems: "center"
        }}>
            <Stack spacing={1} style={{
                width:'300px',
                backgroundImage: "url('https://www.designersguild.com/image/986/3939')",
                textAlign: "center",
                alignItems: "center"
            }}>
                <h1>Oceń zamówienie</h1>
                <Typography component="legend">Czas Dostawy</Typography>
                <Rating name="half-rating" defaultValue={5} precision={0.5} />
                <Typography component="legend">Smak</Typography>
                <Rating name="half-rating" defaultValue={5} precision={0.5} />
                <Typography component="legend">Jakość wykonania</Typography>
                <Rating name="half-rating" defaultValue={5} precision={0.5} />
                <Button>Wyślij ocenę</Button>
            </Stack>
        </div>
    )
}
export default Druga;