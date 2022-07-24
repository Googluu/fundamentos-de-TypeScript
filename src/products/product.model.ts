export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Porduct= {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}
