function ReferalGradientSVG() {
    const idCSS = "refgrad";
    const gradientTransform = `rotate(90)`;
    return (
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id={idCSS} gradientTransform={gradientTransform}>
            <stop offset="5%" stopColor="rgba(5, 205, 153, 0)" />
            <stop offset="95%" stopColor="rgba(5, 205, 153, 1)" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  export default ReferalGradientSVG;