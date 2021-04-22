/* eslint-disable no-undef */

const firstButton = '1 - um item na lista';
const secondButton = '2 - um outro item na lista';
const thirdButton = '3 - mais um outro item na lista';
const todoInput = 'todo_input';
const addButton = 'todo_add_button';
const clearButton = 'todo_clear_button';

describe('Todo SUT ', () => {
  beforeEach(() => {
    $('~todo_container').waitForDisplayed(11000, false);
    $(`~${clearButton}`).click();
  });

  it('Should add an item to the list', () => {
    $('~todo_container').waitForDisplayed(11000);
    $(`~${todoInput}`).setValue(firstButton);
    $(`~${addButton}`).click();
  });

  it('Should remove the second item list', () => {
    $('~todo_container').waitForDisplayed(11000);
    $(`~${todoInput}`).setValue(firstButton);
    $(`~${addButton}`).click();
    $(`~${todoInput}`).setValue(secondButton);
    $(`~${addButton}`).click();
    $(`~${todoInput}`).setValue(thirdButton);
    $(`~${addButton}`).click();

    $('~remove_item_2').waitForDisplayed(11000);
    $(`~remove_item_1`).click();
  });

  it('Should clear the list', () => {
    $('~todo_container').waitForDisplayed(11000);
    $(`~${todoInput}`).setValue(firstButton);
    $(`~${addButton}`).click();
    $(`~${todoInput}`).setValue(secondButton);
    $(`~${addButton}`).click();
    $(`~${todoInput}`).setValue(thirdButton);
    $(`~${addButton}`).click();

    $('~remove_item_2').waitForDisplayed(11000);
    $(`~${clearButton}`).click();
  });
});
