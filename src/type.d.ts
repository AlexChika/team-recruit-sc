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
  currentCard: null | CardType;
};

type ActionType = {
  type: string;
  payload: string;
};
