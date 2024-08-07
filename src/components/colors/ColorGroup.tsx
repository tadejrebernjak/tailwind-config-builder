import { Color, ColorVariant } from '@/types/colorsTypes';
import PlusButton from '@/components/buttons/PlusButton';
import RemoveButton from '@/components/buttons/RemoveButton';
import ColorVariantPreview from './ColorVariantPreview';

interface IColorGroup extends Omit<Color, 'createdAt'> {
  onAddVariant: (colorID: string) => void;
  onRemoveVariant: (colorID: string, variantID: string) => void;
  onChangeVariantColor: (colorID: string, variantID: string, newColor: string) => void;
  onRenameColor: (colorID: string, newName: string) => void;
  onRemoveColor: (colorID: string) => void;
}

const ColorGroup: React.FC<IColorGroup> = ({
  id,
  name,
  variants,
  onAddVariant,
  onRemoveVariant,
  onChangeVariantColor,
  onRenameColor,
  onRemoveColor,
}: IColorGroup) => {
  const removeVariant = (variantID: string) => {
    onRemoveVariant(id, variantID);
  };

  const changeVariantColor = (variantID: string, newColor: string) => {
    onChangeVariantColor(id, variantID, newColor);
  };

  const renderedColors = variants.map(({ id, tag, colorCode }: ColorVariant) => (
    <ColorVariantPreview
      key={id}
      id={id}
      tag={tag}
      colorCode={colorCode}
      onRemoveVariant={removeVariant}
      onChangeVariantColor={changeVariantColor}
    />
  ));

  return (
    <section className="relative mb-10 rounded-lg border-2 border-sky-800 bg-sky-950 bg-opacity-30">
      <RemoveButton onClick={() => onRemoveColor(id)} className="absolute -right-4 -top-4" />

      <input
        type="text"
        value={name}
        onChange={(e) => onRenameColor(id, e.currentTarget.value)}
        className="w-full rounded-t-md border-b-2 border-sky-800 bg-slate-950 !bg-opacity-30 px-6 py-2 text-lg outline-none transition-colors focus:!bg-opacity-50"
      />

      <div className="flex flex-wrap items-center gap-5 p-5">
        {renderedColors}
        {variants.length < 11 && <PlusButton onClick={() => onAddVariant(id)} />}
      </div>
    </section>
  );
};

export default ColorGroup;
