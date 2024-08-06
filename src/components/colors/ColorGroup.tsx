import { Color, ColorVariant } from '../../types/colorsTypes';
import PlusButton from '../buttons/PlusButton';
import ColorPicker from './ColorPicker';

interface IColorGroup extends Omit<Color, 'createdAt'> {
  onAddVariant: (id: string) => void;
  onChangeColor: (colorID: string, variantID: string, newColor: string) => void;
  onRenameColor: (colorID: string, newName: string) => void;
}

const ColorGroup: React.FC<IColorGroup> = ({
  id,
  name,
  variants,
  onAddVariant,
  onChangeColor,
  onRenameColor,
}: IColorGroup) => {
  const changeColor = (variantID: string, newColor: string) => {
    onChangeColor(id, variantID, newColor);
  };

  const renderedColors = variants.map(({ id, tag, colorCode }: ColorVariant) => (
    <ColorPicker key={id} id={id} tag={tag} colorCode={colorCode} onChangeColor={changeColor} />
  ));

  return (
    <section className="mb-10 rounded-lg border-2 border-sky-800 bg-gradient-to-br from-sky-950 via-indigo-950 to-sky-950">
      <input
        type="text"
        value={name}
        onChange={(e) => onRenameColor(id, e.currentTarget.value)}
        className="w-full rounded-t-md border-b-2 border-gray-700 bg-black bg-transparent !bg-opacity-20 px-6 py-2 text-lg outline-none transition-colors focus:border-sky-800 focus:!bg-opacity-50"
      />
      <div className="flex flex-wrap items-center gap-5 p-5">
        {renderedColors}
        <PlusButton onClick={() => onAddVariant(id)} />
      </div>
    </section>
  );
};

export default ColorGroup;
