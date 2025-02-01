import View from './View.js';
import previewView from './previewView.js';
import icons from '../../img/icons.svg';
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipe found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
    console.log(this._data);
  }
}

export default new ResultsView();
