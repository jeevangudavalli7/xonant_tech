import React from "react";

/**
 * Atmosphere — fixed background system behind all glass layers.
 * Deep black base + diffused gradient orbs + faint grid + noise.
 */
export const Atmosphere: React.FC = () => {
  return (
    <div className="xon-atmosphere" aria-hidden="true">
      {/* Grid overlay */}
      <div className="xon-grid-overlay" />

      {/* Diffused light orbs */}
      <div
        className="xon-orb animate-float-slow"
        style={{
          width: "600px",
          height: "600px",
          top: "-10%",
          left: "-8%",
          background:
            "radial-gradient(circle, rgba(180,255,57,0.08), transparent 70%)",
        }}
      />
      <div
        className="xon-orb"
        style={{
          width: "700px",
          height: "700px",
          top: "40%",
          right: "-15%",
          background:
            "radial-gradient(circle, rgba(80,120,255,0.05), transparent 70%)",
        }}
      />
      <div
        className="xon-orb animate-float-slow"
        style={{
          width: "500px",
          height: "500px",
          bottom: "-10%",
          left: "30%",
          background:
            "radial-gradient(circle, rgba(180,255,57,0.04), transparent 70%)",
          animationDelay: "3s",
        }}
      />

      {/* Noise texture */}
      <div className="xon-noise" />
    </div>
  );
};

export default Atmosphere;
