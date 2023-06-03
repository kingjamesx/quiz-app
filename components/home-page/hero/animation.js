export const animationX = (direction, duration) => {
  const animate = {
    hidden: {
      opacity: 0,
      x: direction,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: duration,
      },
    },
  };

  return animate;
};

export const FloatInTop = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
    },
  },
};

export const floatsVariant = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};
