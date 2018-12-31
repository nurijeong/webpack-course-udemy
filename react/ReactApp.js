import React from 'react';
import { render } from 'react-dom';
import MainComponet from './MainComponent';

const mountNode = document.getElementById('mountNode');
render(<MainComponet/>, mountNode);