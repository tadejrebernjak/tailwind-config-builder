import clsx from 'clsx';
import React, { useState } from 'react';
import { HexColorInput, HexColorPicker } from 'react-colorful';

import { ColorVariant } from '../../types/colorsTypes';
import { getTextColor } from '../../utils/colors';

interface IColorPicker extends ColorVariant {
  onChangeColor: (variantID: string, newColor: string) => void;
}

const ColorPicker: React.FC<IColorPicker> = ({ id, tag, colorCode, onChangeColor }: IColorPicker) => {
  const [showPicker, setShowPicker] = useState(false);
  const textColor = getTextColor(colorCode);

  const toggleShowPicker = () => {
    setShowPicker((current) => !current);
  };

  const handleChangeColor = (newColor: string) => {
    onChangeColor(id, newColor);
  };

  return (
    <div className="w-24">
      <p className="text-center">{tag}</p>

      <button
        className="relative my-4 flex h-14 w-full items-center justify-center rounded-2xl font-semibold"
        style={{ backgroundColor: colorCode, color: textColor }}
        onClick={toggleShowPicker}
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

      <HexColorInput
        color={colorCode}
        onChange={handleChangeColor}
        className="mb-5 w-full rounded-lg border-2 border-gray-600 bg-transparent px-3 py-2 text-center outline-none focus:border-sky-600"
      />

      {showPicker && <div className="fixed left-0 top-0 z-20 h-screen w-screen" onClick={toggleShowPicker} />}
    </div>
  );
};

export default ColorPicker;
