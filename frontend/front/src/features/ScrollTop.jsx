import { useEffect, useState } from "react";

const ScrollToTop = ({ autoScroll = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (autoScroll) {
      window.scrollTo(0, 0);
    }

    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [autoScroll]);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        padding: "15px",
        background: "#213E70",
        border: "none",
        borderRadius: "12px",
        cursor: "pointer",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
        transition: "opacity 0.3s ease, background 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#d4833e")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#213E70")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
