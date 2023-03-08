import Cards from './PagesCards.js';

//инициализируем карторчки

const getCard = (card) => {
  const newCard = new Cards (card, '#linkCard__item');
  console.log(newCard)
  return newCard.createCard();
}

const appendCards = (card) => cardContainer.append(getCard(card));

measureCard.forEach((item) => {
  appendCards(item);
});
