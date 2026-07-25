export type Variant = {
  id: string;
  name: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  comparePrice: number | null;
  badge: string | null;
  learnMore: string;
  variants: Variant[];
};

export type Step = {
  id: number;
  title: string;
  category: "cameras" | "plan" | "sensors" | "accessories";
  products: Product[];
};

export type Data = {
  steps: Step[];
};
