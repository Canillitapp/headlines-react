import React from 'react';
import { Text } from 'react-native';

// import { waterMelon } from 'utils/theme';
import { LoadingContainer } from './styled';

export default function Loading({ data, children }) {
  if (!data || !data.length) {
    return (
      <LoadingContainer>
        <Text>Sin resultados.</Text>
      </LoadingContainer>
    );
  }

  return children;
}
