function GradientSVG() {
    const idCSS = "hello";
    const gradientTransform = `rotate(90)`;
    return (
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id={idCSS} gradientTransform={gradientTransform}>
            <stop offset="40%" stopColor="rgba(0, 117, 255, 0.3)" />
            <stop offset="60%" stopColor="rgba(0, 117, 255, 1)" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  
  export default GradientSVG;