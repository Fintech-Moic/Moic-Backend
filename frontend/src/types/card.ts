export interface Card {
  id: string;
  company: string;
  type: string;
  name: string;
  cardImage: string;
  mine: boolean;
}

export interface CardBenefit {
  category: string;
  shopName: string;
  content: string;
  discount: string;
  point: string;
  cashBack: string;
}

export interface CardDetail {
  company: string;
  type: string;
  name: string;
  cardImage: string;
  cardBenefit: Array<CardBenefit>;
}
