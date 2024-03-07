import React from 'react';

import { Text, Form, Title } from '@patternfly/react-core';

import Packages from './Packages';

const PackagesStep = () => {
  return (
    <Form>
      <Title headingLevel="h1" size="xl">
        Additional packages
      </Title>
      <Text>
        Images built with Image Builder include all required packages.
      </Text>
      <Packages />
    </Form>
  );
};

export default PackagesStep;
