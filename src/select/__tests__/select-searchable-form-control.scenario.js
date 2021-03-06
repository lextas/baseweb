/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import {FormControl} from '../../form-control/index.js';
import {Select} from '../index.js';

const options = [
  {label: 'AliceBlue', id: '#F0F8FF'},
  {label: 'AntiqueWhite', id: '#FAEBD7'},
  {label: 'Aqua', id: '#00FFFF'},
  {label: 'Aquamarine', id: '#7FFFD4'},
  {label: 'Azure', id: '#F0FFFF'},
  {label: 'Beige', id: '#F5F5DC'},
];

export default function Scenario() {
  const [notSearchable, setNotSearchable] = React.useState([]);
  const [searchable, setSearchable] = React.useState([]);

  return (
    <div>
      <FormControl label="not searchable">
        <Select
          id="colors-not-searchable"
          clearable={false}
          searchable={false}
          placeholder="Select color"
          value={notSearchable}
          options={options}
          onChange={params => setNotSearchable(params.value)}
        />
      </FormControl>

      <FormControl label="searchable">
        <Select
          id="colors-searchable"
          clearable={false}
          placeholder="Select color"
          value={searchable}
          options={options}
          onChange={params => setSearchable(params.value)}
        />
      </FormControl>
    </div>
  );
}
