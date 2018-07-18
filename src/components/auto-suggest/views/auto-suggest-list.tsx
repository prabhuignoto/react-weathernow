import * as React from 'react';
import * as uuid from 'uniqid';
import { IAutoSuggestList, IAutoSuggestListItem  } from '../../../types';
import { AutoSuggestListWrapper } from '../styled-components/autosuggest-list';
import { AutoSuggestListItem } from './autosuggest-list-item';

const AutoSuggestList: React.SFC<IAutoSuggestList> = ({
  items,
  onSelect
}): React.ReactElement<any> => {
  return (
    <AutoSuggestListWrapper>
      {
        items.map((x: IAutoSuggestListItem) => {
          return <AutoSuggestListItem
                    displayName={x.displayName}
                    value={x.value}
                    key={uuid()}
                    onSelect={onSelect}
                  />;
        })
      }
    </AutoSuggestListWrapper>
  );
};

export default AutoSuggestList;
