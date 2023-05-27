type CardType = {
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
};

type StateType = {
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cards: CardType[];
};

type ActionType = {
  type: string;
  payload: string | CardType;
};
