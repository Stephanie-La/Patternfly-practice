import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { Title, TitleSizes } from '@patternfly/react-core';
import { BackToTop } from '@patternfly/react-core';
import { Brand } from '@patternfly/react-core';
import pfLogo from '@patternfly\react-core\src\components\Card\examples/pfLogo.svg';



import {
  Button,
  Card,
  CardActions,
  CardHeaderMain,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Split,
  SplitItem,
  Text,
  TextContent,
  TextVariants
} from '@patternfly/react-core';
import {
  TimesIcon
} from '@patternfly/react-icons';



function App() {
  return (
    <>
    {/*this below is not working. */}
<Brand src={pfLogo} alt="Patternfly Logo" />    
<React.Fragment>
      <Title headingLevel="h1" size={TitleSizes['4xl']}>
        The Example Website!
        </Title>
    </React.Fragment><Card>
        <CardHeader>
          <CardHeaderMain>
            <Brand src="https://pf4.patternfly.org/assets/images/pf-logo-small.svg" alt="Patternfly Logo" />
          </CardHeaderMain>
          <CardActions>
            <Button variant="plain">
              <TimesIcon />
            </Button>
          </CardActions>
        </CardHeader>
        <CardTitle>
          <Text component={TextVariants.p}>
            PatternFly
            <TextContent>
              <Text component={TextVariants.small}>
                Provided by Red Hat
              </Text>
            </TextContent>
          </Text>
        </CardTitle>
        <CardBody>
          PatternFly is an open source design system created to enable consistency and usability across a wide range of applications and use cases. PatternFly provides clear standards, guidance, and tools that help designers and developers work together more efficiently and build better user experiences.
        </CardBody>
        <CardFooter>
          <Split hasGutter>
            <SplitItem>
              <Button variant="link" isInline>Link to PatternFly</Button>

            </SplitItem>
            <SplitItem>
              <Button variant="link" isInline>Link to home</Button>
            </SplitItem>
          </Split>
        </CardFooter>
      </Card>
      <BackToTop isAlwaysVisible/></>
  );
}

export default App;





