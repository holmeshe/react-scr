/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactWithAddonsUMDEntry
 */

'use strict';

var ReactWithAddons = require('ReactWithAddons');

// `version` will be added here by the React module.
var ReactWithAddonsUMDEntry = Object.assign(ReactWithAddons, {
  __SECRET_INJECTED_REACT_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: null, // Will be injected by ReactDOM UMD build.
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: require('ReactCurrentOwner'),
  },
});

if (__DEV__) {
  Object.assign(
    ReactWithAddonsUMDEntry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    {
      // ReactComponentTreeHook should not be included in production.
      ReactComponentTreeHook: require('ReactComponentTreeHook'),
      getNextDebugID: require('getNextDebugID'),
    },
  );
}

module.exports = ReactWithAddonsUMDEntry;
