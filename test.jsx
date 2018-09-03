import process from 'process';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Hello from './Hello.jsx';

const page = <html><Hello/></html>;

var d = ReactDOMServer.renderToStaticMarkup(page);

process.stdout.write(d.toString());

process.stdout.write("\ntest.jsx ran\n");

