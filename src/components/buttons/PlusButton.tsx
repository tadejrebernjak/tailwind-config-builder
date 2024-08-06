import { VariantProps, cva } from 'class-variance-authority';
import { FaPlus } from 'react-icons/fa';

const plusButtonVariants = cva(
  [
    'flex justify-center items-center gap-5 rounded-full font-semibold bg-black bg-opacity-30 hover:bg-opacity-50 transition-colors',
  ],
  {
    variants: {
      intent: {
        variant: 'w-16 h-16',
        color: 'w-full py-6 text-lg',
      },
    },
    defaultVariants: {
      intent: 'variant',
    },
  },
);

type PlusButtonVariantProps = VariantProps<typeof plusButtonVariants>;

interface IPlusButton extends React.ButtonHTMLAttributes<HTMLButtonElement>, PlusButtonVariantProps {}

const PlusButton: React.FC<IPlusButton> = ({ className, intent, ...props }: IPlusButton) => {
  return (
    <button className={plusButtonVariants({ intent, className })} {...props}>
      <FaPlus />
      {intent === 'color' && <span>Add Color</span>}
    </button>
  );
};

export default PlusButton;
