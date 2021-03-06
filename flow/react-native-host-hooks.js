/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-disable */

declare module 'deepDiffer' {
  declare function exports(one: any, two: any): bool;
}
declare module 'deepFreezeAndThrowOnMutationInDev' {
  declare function exports<T>(obj : T) : T;
}
declare module 'flattenStyle' { }
declare module 'InitializeJavaScriptAppEngine' { }
declare module 'RCTEventEmitter' {
  declare function register() : void;
}
declare module 'TextInputState' {
  declare function blurTextInput(object : any) : void;
  declare function focusTextInput(object : any) : void;
}
declare module 'UIManager' {
  declare var customBubblingEventTypes : Object;
  declare var customDirectEventTypes : Object;
  declare function createView() : void;
  declare function manageChildren() : void;
  declare function measure() : void;
  declare function measureInWindow() : void;
  declare function measureLayout() : void;
  declare function removeRootView() : void;
  declare function removeSubviewsFromContainerWithID() : void;
  declare function replaceExistingNonRootView() : void;
  declare function setChildren() : void;
  declare function updateView() : void;
}
declare module 'View' {
  declare var exports : typeof ReactComponent;
}
