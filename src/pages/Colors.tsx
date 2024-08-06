import PlusButton from '../components/buttons/PlusButton';
import ColorGroup from '../components/colors/ColorGroup';
import useColorsStore from '../store/colors/colorsStore';
import { Color } from '../types/colorsTypes';
import { addNewVariantToColor, changeVariantColor, createNewColor, editColorName } from '../utils/colors';

const Colors: React.FC = () => {
  const { colors, setColors } = useColorsStore();

  const addColor = () => {
    setColors([...colors, createNewColor(colors)]);
  };

  const addVariant = (id: string) => {
    setColors(addNewVariantToColor(colors, id));
  };

  const changeColor = (colorID: string, variantID: string, newColor: string) => {
    setColors(changeVariantColor(colors, colorID, variantID, newColor));
  };

  const renameColor = (colorID: string, newName: string) => {
    setColors(editColorName(colors, colorID, newName));
  };

  return (
    <>
      {colors.map(({ id, name, variants }: Color) => (
        <ColorGroup
          key={id}
          id={id}
          name={name}
          variants={variants}
          onAddVariant={addVariant}
          onChangeColor={changeColor}
          onRenameColor={renameColor}
        />
      ))}

      <PlusButton intent="color" onClick={addColor}></PlusButton>
    </>
  );
};

export default Colors;
