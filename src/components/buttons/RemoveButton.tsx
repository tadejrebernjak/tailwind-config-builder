import { VariantProps, cva } from 'class-variance-authority';
import { FaX } from 'react-icons/fa6';

const removeButtonVariants = cva(
  ['flex justify-center items-center gap-5 rounded-full font-semibold bg-slate-950 hover:bg-sky-800 transition-colors'],
  {
    variants: {
      size: {
        large: 'w-10 h-10 text-lg',
        small: 'w-6 h-6 text-xs',
      },
    },
    defaultVariants: {
      size: 'large',
    },
  },
);

type RemoveButtonVariantProps = VariantProps<typeof removeButtonVariants>;

interface IPlusButton extends React.ButtonHTMLAttributes<HTMLButtonElement>, RemoveButtonVariantProps {}

const RemoveButton: React.FC<IPlusButton> = ({ className, size, ...props }: IPlusButton) => {
  return (
    <button className={removeButtonVariants({ size, className })} {...props}>
      <FaX />
    </button>
  );
};

export default RemoveButton;
