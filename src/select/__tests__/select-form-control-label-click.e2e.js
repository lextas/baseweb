/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-env node */
/* eslint-disable flowtype/require-valid-file-annotation */

const {mount} = require('../../../e2e/helpers');

describe('select unmount blur', () => {
  it('opens non-searchable listbox when label is clicked', async () => {
    await mount(page, 'select--searchable-form-control');
    const labels = await page.$$('label');

    const label = await page.evaluate(el => el.textContent, labels[0]);
    expect(label).toBe('not searchable');

    await labels[0].click();
    await page.waitForSelector('[role="listbox"]');
  });

  it('opens searchable listbox when label is clicked', async () => {
    await mount(page, 'select--searchable-form-control');
    const labels = await page.$$('label');

    const label = await page.evaluate(el => el.textContent, labels[1]);
    expect(label).toBe('searchable');

    await labels[1].click();
    await page.waitForSelector('[role="listbox"]');
  });
});
