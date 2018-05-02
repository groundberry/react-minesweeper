import React from 'react';
import { shallow } from 'enzyme';
import Cell from './Cell';

describe('Cell', () => {
  let onClickMine;
  let onClickCell;
  let wrapper;

  beforeEach(() => {
    onClickMine = jest.fn();
    onClickCell = jest.fn();
  });

  describe('when the game is not over', () => {
    describe('with a normal cell', () => {
      beforeEach(() => {
        wrapper = shallow(<Cell
          content="1"
          coordinates={[0, 1]}
          gameOver={false}
          onClickMine={onClickMine}
          onClickCell={onClickCell}
          showContent={false}
        />);
      });

      it('renders one cell component', () => {
        expect(wrapper).toMatchSnapshot();
      });

      describe('when clicking', () => {
        it('calls the onClickCell callback', () => {
          wrapper.find('.Cell--button').simulate('click');
          expect(onClickCell).toHaveBeenCalled();
        });

        it('does not call the onClickMine callback', () => {
          wrapper.find('.Cell--button').simulate('click');
          expect(onClickMine).not.toHaveBeenCalled();
        });
      });
    });

    describe('with a mine', () => {
      beforeEach(() => {
        wrapper = shallow(<Cell
          content="*"
          coordinates={[0, 1]}
          gameOver={false}
          onClickMine={onClickMine}
          onClickCell={onClickCell}
          showContent={false}
        />);
      });

      describe('when clicking', () => {
        it('calls the onClickCell callback', () => {
          wrapper.find('.Cell--button').simulate('click');
          expect(onClickCell).toHaveBeenCalled();
        });

        it('calls the onClickMine callback', () => {
          wrapper.find('.Cell--button').simulate('click');
          expect(onClickMine).toHaveBeenCalled();
        });
      });
    });

    describe('when a cell is flagged', () => {
      beforeEach(() => {
        wrapper = shallow(<Cell
          content="*"
          coordinates={[0, 1]}
          gameOver={false}
          onClickMine={onClickMine}
          onClickCell={onClickCell}
          showContent={false}
        />);
      });

      it('does not call the onClickCell callback', () => {
        wrapper.setState({ flagged: true });
        wrapper.find('.Cell--button').simulate('click');
        expect(onClickCell).not.toHaveBeenCalled();
      });

      it('does not call the onClickMine callback when a mine is clicked', () => {
        expect(onClickMine).not.toHaveBeenCalled();
      });
    });
  });
});
