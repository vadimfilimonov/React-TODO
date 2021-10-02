import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {ReactScreenshotTest} from 'react-screenshot-test';
import TaskAdd from './TaskAdd';

describe('screenshots', () => {
  ReactScreenshotTest.create('App')
    .viewport('Desktop', {
      width: 1024,
      height: 768,
    })
    .shoot('TaskAdd', <TaskAdd />)
    .run();
});
