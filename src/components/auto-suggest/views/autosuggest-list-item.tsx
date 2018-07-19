import * as React from 'react';
import { IAutoSuggestListItem } from '../../../types';
import { AutoSuggestListItemWrapper, AutoSuggestName } from '../styles/autosuggest-list-item'

const AutoSuggestListItem: React.SFC<IAutoSuggestListItem> = ({
    value,
    displayName,
    onSelect,
    code
  }): React.ReactElement<any> => {
  const handleKeyUp: (event: React.KeyboardEvent) => void = function _handleKeyUp(event) {
    if (event.keyCode === 13) {
      onSelect(displayName, value);
    }
  };
  const handleClick: (event: React.MouseEvent) => void = function _handleClick(event) {
    onSelect(displayName, value);
  };
  return (
    <AutoSuggestListItemWrapper
      className="auto-suggest-result"
      tabIndex={0}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
    >

      <AutoSuggestName
        className="auto-suggest-name"
      >
        {
          code ? <img src={`https://www.countryflags.io/${code!.toLowerCase()}/flat/32.png`} /> : null
        }
        <span>{displayName}</span>
      </AutoSuggestName>
    </AutoSuggestListItemWrapper>
  );
};

export { AutoSuggestListItem };
