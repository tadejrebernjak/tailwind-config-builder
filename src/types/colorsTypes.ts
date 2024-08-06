export interface ColorVariant {
  id: string;
  colorCode: string;
  tag?: string;
}

export interface Color {
  id: string;
  createdAt: Date;
  name: string;
  variants: ColorVariant[];
}
