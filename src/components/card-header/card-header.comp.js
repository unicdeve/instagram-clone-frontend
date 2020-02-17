import React from 'react';
import {
  CardHeaderWrapper,
  CardHeaderLogo,
  CardHeaderExtra
} from './card-header.styles';
import { Button, Icon } from 'semantic-ui-react';
import OrRuler from '../or-ruler/or-ruler.comp';

export default function CardHeader({ showExtra }) {
  return (
    <CardHeaderWrapper>
      <CardHeaderLogo as='h1' className='text-center'>
        InstaClone
      </CardHeaderLogo>
      {showExtra && (
        <CardHeaderExtra>
          Sign up to see photos and videos from your friends.
          <Button fluid primary className='my-4 py-2'>
            <Icon name='facebook' size='large' className='text-white' />
            Login with Facebook
          </Button>
          <OrRuler />
        </CardHeaderExtra>
      )}
    </CardHeaderWrapper>
  );
}
