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
  dispatch: React.Dispatch<ActionType> | any;
};

type ActionType = {
  type: string;
  payload: string;
};
