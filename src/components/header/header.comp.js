import React, { useEffect, useCallback, useState } from 'react';
import {
  HeaderWrapper,
  LogoContainer,
  RightRule,
  IconLinkOptionWrapper,
  LinkOption
} from './header.styles';
import { Icon } from 'semantic-ui-react';
import CardHeader from '../card-header/card-header.comp';

export default function Header() {
  const [isTop, setIsTop] = useState(false);

  const handleScroll = useCallback(() => {
    const top = window.scrollY < 100;
    if (top !== isTop) setIsTop(top);
  }, [isTop]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <HeaderWrapper className={`${isTop ? '' : 'custom-nav'}`}>
      <LogoContainer>
        <Icon name='instagram' size='big' />
        <RightRule />
        <CardHeader />
      </LogoContainer>

      <IconLinkOptionWrapper>
        <LinkOption to='/explore'>
          <Icon size='big' name='compass outline' color='black' />
        </LinkOption>

        <LinkOption to='/notifications'>
          <Icon size='big' name='heart outline' color='black' />
        </LinkOption>

        <LinkOption to='/notifications'>
          <Icon size='big' name='user outline' color='black' />
        </LinkOption>
      </IconLinkOptionWrapper>
    </HeaderWrapper>
  );
}
