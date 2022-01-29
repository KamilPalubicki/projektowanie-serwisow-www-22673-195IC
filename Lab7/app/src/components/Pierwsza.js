import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue, yellow } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {
    return (
        <div>
            <AutoRotatingCarousel
                label="Kup teraz"
                open={handleOpen.open}
                onClose={() => setHandleOpen({ open: false })}
                onStart={() => setHandleOpen({ open: false })}
                autoplay={false}
                mobile={isMobile}
                style={{ position: "absolute" }}
            >
                <Slide
                    media={
                        <img src="https://logodix.com/logo/38.png" />
                    }
                    mediaBackgroundStyle={{ backgroundColor: red[400] }}
                    style={{ backgroundColor: red[600] }}
                    title="Jeśli zależy Ci na środowisku"
                    subtitle="oraz lubisz najnowsze technologie, wybierz auto od Elona Muska!"
                />
                <Slide
                    media={
                        <img src="https://logodix.com/logo/2129026.png" />
                    }
                    mediaBackgroundStyle={{ backgroundColor: blue[400] }}
                    style={{ backgroundColor: blue[600] }}
                    title="Chcesz być popularny?"
                    subtitle="W dodatku nie wiesz co to kierunkowskazy? To idealne auta dla Ciebie!"
                />
                <Slide
                    media={
                        <img src="https://logodix.com/logo/2129053.png" />
                    }
                    mediaBackgroundStyle={{ backgroundColor: yellow[400] }}
                    style={{ backgroundColor: yellow[600] }}
                    title="Jeżeli lubisz samochody z pazurem"
                    subtitle="i nie myslisz o załozeniu rodziny to wybierz Lambo!"
                />
            </AutoRotatingCarousel>
        </div>
    );
};

function Pierwsza() {
    const [handleOpen, setHandleOpen] = useState({ open: false });
    const handleClick = () => {
        setHandleOpen({ open: true });
    };
    const matches = useMediaQuery("(max-width:600px)");
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Button onClick={handleClick}>Open carousel</Button>
            </div>
            <AutoRotatingCarouselModal
                isMobile={matches}
                handleOpen={handleOpen}
                setHandleOpen={setHandleOpen}
            />
        </>
    );
}
export default Pierwsza;