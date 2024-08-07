import clsx from 'clsx';
import React, { useState } from 'react';
import { HexColorInput, HexColorPicker } from 'react-colorful';

import RemoveButton from '@/components/buttons/RemoveButton';
import { ColorVariant } from '@/types/colorsTypes';
import { getVisibleForegroundColor } from '@/utils/colors';

interface IColorVariantPreview extends ColorVariant {
  onRemoveVariant: (variantID: string) => void;
  onChangeVariantColor: (variantID: string, newColor: string) => void;
}

const ColorVariantPreview: React.FC<IColorVariantPreview> = ({
  id,
  tag,
  colorCode,
  onRemoveVariant,
  onChangeVariantColor,
}: IColorVariantPreview) => {
  const [showPicker, setShowPicker] = useState(false);
  const foregroundColor = getVisibleForegroundColor(colorCode);

  const toggleShowPicker = () => {
    setShowPicker((current) => !current);
  };

  const handleChangeColor = (newColor: string) => {
    onChangeVariantColor(id, newColor);
  };

  return (
    <div className="w-20">
      <p className="mb-2 text-center italic text-gray-300">{tag}</p>

      <div className="group relative">
        <RemoveButton
          size="small"
          className="absolute -right-2 -top-2 z-40 hidden text-gray-200 group-hover:flex"
          onClick={() => onRemoveVariant(id)}
          aria-label="Remove Variant"
        />

        <button
          className="relative mb-4 flex h-14 w-full items-center justify-center rounded-xl font-semibold"
          style={{ backgroundColor: colorCode, color: foregroundColor }}
          onClick={toggleShowPicker}
          aria-label="Edit Variant's Color"
        >
          {colorCode}
          <HexColorPicker
            color={colorCode}
            onChange={handleChangeColor}
            className={clsx('!absolute !bottom-full z-30 origin-bottom scale-y-100 transition-transform', {
              '!scale-y-0': !showPicker,
            })}
          />
        </button>
      </div>

      <HexColorInput
        color={colorCode}
        onChange={handleChangeColor}
        className="w-full rounded-lg border-2 border-gray-600 bg-transparent px-3 py-2 text-center outline-none focus:border-sky-600"
      />

      {showPicker && <div className="fixed left-0 top-0 z-20 h-screen w-screen" onClick={toggleShowPicker} />}
    </div>
  );
};

export default ColorVariantPreview;
