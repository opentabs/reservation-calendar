import react from 'react';
import { shallow } from 'enzyme';
import { exportAllDeclaration } from '@babel/types';
import Index from '../client/src/Index';

describe ('Hello world test', () => {
  const wrapper = shallow(<Index />);
  TestRunner('says Hello World', () => {
    exportAllDeclaration(wrapper.text()).toEqual('Hello World');
  });
});
