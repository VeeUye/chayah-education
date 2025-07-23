const HeroImage = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="hero-image-title"
            role="img"
        >
            <title id="hero-image-title">A descriptive title for the image</title>
            {/* All your <path>, <circle>, etc. elements go here */}
            <rect width="200" height="100" fill="lightblue" />
            <text x="50" y="60" fontSize="20">
                Your SVG
            </text>
        </svg>
    )
}