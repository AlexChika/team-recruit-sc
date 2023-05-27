const AddCardNumber = "AddCardNumber";
const RemoveCardNumber = "RemoveCardNumber";

const AddCvvNumber = "AddCvvNumber";
const RemoveCvvNumber = "RemoveCvvNumber";

const AddPassword = "AddPassword";
const RemovePassword = "RemovePassword";

const AddExpiryMonth = "AddExpiryMonth";
const RemoveExpiryMonth = "RemoveExpiryMonth";

const AddExpiryYear = "AddExpiryYear";
const RemoveExpiryYear = "RemoveExpiryYear";

const AddCurrentCard = "AddCurrentCard";
const createNewCard = "createNewCard";

const types = {
  AddCardNumber,
  RemoveCardNumber,
  AddCvvNumber,
  RemoveCvvNumber,
  AddPassword,
  RemovePassword,
  AddExpiryMonth,
  RemoveExpiryMonth,
  AddExpiryYear,
  RemoveExpiryYear,
  AddCurrentCard,
  createNewCard,
};

function cardNumberAction(
  payload: string,
  valid: boolean,
  dispatch: React.Dispatch<ActionType>
) {
  if (valid) {
    dispatch({ type: types.AddCardNumber, payload });
  } else {
    dispatch({ type: types.RemoveCardNumber, payload });
  }
}

function expiryYearAction(
  payload: string,
  valid: boolean,
  dispatch: React.Dispatch<ActionType>
) {
  if (valid) {
    dispatch({ type: types.AddExpiryYear, payload });
  } else {
    dispatch({ type: types.RemoveExpiryYear, payload });
  }
}

function expiryMonthAction(
  payload: string,
  valid: boolean,
  dispatch: React.Dispatch<ActionType>
) {
  if (valid) {
    dispatch({ type: types.AddExpiryMonth, payload });
  } else {
    dispatch({ type: types.RemoveExpiryMonth, payload });
  }
}

function createCardAction(dispatch: React.Dispatch<ActionType>) {
  dispatch({ type: types.createNewCard, payload: "" });
}

function currentCardAction(id: string, dispatch: React.Dispatch<ActionType>) {
  dispatch({ type: types.AddCurrentCard, payload: id });
}

export {
  types,
  cardNumberAction,
  expiryMonthAction,
  expiryYearAction,
  currentCardAction,
  createCardAction,
};
