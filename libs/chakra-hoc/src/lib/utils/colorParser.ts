// Split the chakra color into COLOR and SATURATION
export const colorParser = (chakraColor: string) => {
  const colorData = chakraColor ? chakraColor.split('.') : ['teal', '400'];

  const color = colorData[0];
  const saturation = parseInt(colorData[1]);

  return { color, saturation };
};
