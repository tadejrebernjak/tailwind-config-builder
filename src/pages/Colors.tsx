import PlusButton from '@/components/buttons/PlusButton';
import ColorGroup from '@/components/colors/ColorGroup';
import useColorsStore from '@/store/colors/colorsStore';
import { Color } from '@/types/colorsTypes';
import {
  addColorVariant,
  createNewColor,
  editColorName,
  editColorVariant,
  removeColorByID,
  removeColorVariant,
} from '@/utils/colors';

const Colors: React.FC = () => {
  const { colors, setColors } = useColorsStore();

  const addColor = () => {
    setColors([...colors, createNewColor(colors)]);
  };

  const removeColor = (colorID: string) => {
    setColors(removeColorByID(colors, colorID));
  };

  const renameColor = (colorID: string, newName: string) => {
    setColors(editColorName(colors, colorID, newName));
  };

  const addVariant = (colorID: string) => {
    setColors(addColorVariant(colors, colorID));
  };

  const removeVariant = (colorID: string, variantID: string) => {
    setColors(removeColorVariant(colors, colorID, variantID));
  };

  const changeVariantColor = (colorID: string, variantID: string, newColor: string) => {
    setColors(editColorVariant(colors, colorID, variantID, newColor));
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
          onRemoveVariant={removeVariant}
          onChangeVariantColor={changeVariantColor}
          onRemoveColor={removeColor}
          onRenameColor={renameColor}
        />
      ))}

      <PlusButton intent="color" onClick={addColor} />
    </>
  );
};

export default Colors;
