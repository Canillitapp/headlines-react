import React from 'react';
import { ActivityIndicator } from 'react-native';

import { waterMelon } from 'utils/theme';
import { LoadingContainer } from './styled';

export default function Loading({ loading, children }) {
  if (loading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size={50} color={waterMelon} />
      </LoadingContainer>
    );
  }

  return children;
}
