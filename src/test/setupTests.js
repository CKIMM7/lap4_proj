import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';

global.React = React;
global.render = render;
global.userEvent = userEvent;