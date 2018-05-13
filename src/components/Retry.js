import React from 'react';

import { LoadingContainer, RetryButton } from './styled';

export default function Retry({ error, retryFn, children }) {
  if (error) {
    return (
      <LoadingContainer>
        <RetryButton title="Retry" onPress={retryFn} />
      </LoadingContainer>
    );
  }

  return children;
}
