import { useState, useEffect, useRef, useCallback } from "react";
import sunIcon from "../assets/sun.svg";
import moonIcon from "../assets/moon.svg";
import cn from "classnames";
import { useThemeContext } from "../hooks/useThemeContext";

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useThemeContext();
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const mouseDownTimeRef = useRef<number>(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    setIsDragging(true);
    setHasMoved(false);
    mouseDownTimeRef.current = Date.now();

    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseUp = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();

      const clickDuration = Date.now() - mouseDownTimeRef.current;

      if (!hasMoved && clickDuration < 200) {
        toggleTheme();
      }

      setIsDragging(false);
      setHasMoved(false);
    },
    [hasMoved, toggleTheme]
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) {
        return;
      }

      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;

      const maxX = window.innerWidth - 60;
      const maxY = window.innerHeight - 60;

      const constrainedX = Math.max(0, Math.min(newX, maxX));
      const constrainedY = Math.max(0, Math.min(newY, maxY));

      const moveDistance =
        Math.abs(constrainedX - position.x) +
        Math.abs(constrainedY - position.y);
      if (moveDistance > 5) {
        setHasMoved(true);
      }

      setPosition({
        x: constrainedX,
        y: constrainedY,
      });
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart, position, handleMouseUp]);

  return (
    <div
      className={cn(
        "fixed z-50 w-14 h-14 rounded-full shadow-lg cursor-pointer flex items-center justify-center transform select-none transition-colors duration-200",
        {
          "bg-gradient-to-r from-amber-400 to-orange-500": !isDark,
          "bg-gradient-to-r from-purple-600 to-blue-600": isDark,
        }
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
    >
      {isDark ? (
        <img
          src={sunIcon}
          alt="Sun"
          className="size-8 select-none pointer-events-none"
          draggable={false}
        />
      ) : (
        <img
          src={moonIcon}
          alt="Moon"
          className="size-8 select-none pointer-events-none"
          draggable={false}
        />
      )}
    </div>
  );
};
