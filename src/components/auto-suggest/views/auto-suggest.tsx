import * as React from 'react';
import { IAutoSuggest, IAutoSuggestListItem, } from '../../../types';
import Cross from '../assets/cross-out.svg';
import {
  AutoSuggestContainer,
  AutoSuggestListWrapper,
  AutoSuggestWrapper,
  Button,
  Input,
  Label,
} from '../styles/auto-suggest';
import { Loader } from '../styles/loader';
import AutoSuggestList from './auto-suggest-list';

const AutoSuggest: React.SFC<IAutoSuggest<IAutoSuggestListItem>> = ({
  placeHolder,
  onClear,
  items,
  onSelect,
  onInput,
  inputValue,
  showSuggestions,
  isLoading,
  label
}) => {
  return (
    <AutoSuggestContainer className="column">  
      {isLoading ? <Loader /> : null}
      <AutoSuggestWrapper>
        {inputValue.length > 0 ? <Label>{label}</Label> : null}
        <Input type="text"
          className={`auto-suggest-input ${inputValue.length > 0 ? 'label-visible' : ''}`}
          value={inputValue}
          onInput={onInput}
          placeholder={placeHolder}
        />
        {inputValue.length > 0 ? <Button className="auto-suggest-clear" onClick={onClear}><Cross /></Button> : null}
      </AutoSuggestWrapper>
      {showSuggestions ?
        <AutoSuggestListWrapper>
          <AutoSuggestList
            items={items}
            onSelect={onSelect}
          />
        </AutoSuggestListWrapper> : null}
    </AutoSuggestContainer>
  );
};


export default AutoSuggest;
