var expect = require('chai').expect;

// $('~password').setValue('1234567');
// $('~login').click();

describe('Todo SUT ', () => {
  beforeEach(() => {
    $('~app-root').waitForDisplayed(11000, false);
  });

  it('Should render and find HUE text', (async) => {
    $('~todo_container').waitForDisplayed(11000);
    const hue = $('~hue').getText();
    expect(hue).to.equal('HUE');
  });

  // it('Should render', () => {
  //   render(<Todo />);
  // });

  // it('Should render with placeholder "Escreva algo !!!"', () => {
  //   const { getByPlaceholderText } = render(
  //     <Todo placeholder="Escreva algo !!!" />
  //   );
  //   expect(getByPlaceholderText('Escreva algo !!!')).toBeTruthy();
  // });

  // it('Should render with title "Simples Botão"', () => {
  //   const { getByTestId } = render(<Todo />);
  //   const sut = getByTestId('clearButton');
  //   expect(sut).toBeTruthy();
  // });

  // it('Should render with title "Adicionar à lista"', () => {
  //   const { getByText } = render(<Todo />);
  //   const sut = getByText('Adicionar à lista');
  //   expect(sut).toBeTruthy();
  //   expect(sut).toHaveStyleRule('color', '#fff');
  // });

  // it('Should should add items to the list after the press event', async () => {
  //   const INITIAL_TEXT = 'changed_text';
  //   const sut = render(<Todo placeholder="Escreva algo !!!" />);
  //   const inputSut = sut.getByPlaceholderText('Escreva algo !!!');

  //   fireEvent.changeText(inputSut, INITIAL_TEXT);

  //   const addSut = sut.getByText('Adicionar à lista');
  //   fireEvent.press(addSut);

  //   const first = sut.getByText(INITIAL_TEXT);

  //   fireEvent.changeText(inputSut, 'mais um');
  //   fireEvent.press(addSut);

  //   const second = sut.getByText('mais um');

  //   expect(first).toBeTruthy();
  //   expect(second).toBeTruthy();
  // });
});
