import React from 'react';
import { Text } from 'react-native';

import i18n from 'i18n';

// import { waterMelon } from 'utils/theme';
import { LoadingContainer } from './styled';

export default function Loading({ data, children }) {
  if (!data || !data.length) {
    return (
      <LoadingContainer>
        <Text>{i18n.t('noResults')}</Text>
      </LoadingContainer>
    );
  }

  return children;
}
