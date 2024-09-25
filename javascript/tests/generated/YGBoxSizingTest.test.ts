/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<befcbd2b382751363bbea7c8e9e8c5a2>>
 * generated by gentest/gentest-driver.ts from gentest/fixtures/YGBoxSizingTest.html
 */

import { instrinsicSizeMeasureFunc } from '../tools/utils.ts'
import Yoga from 'yoga-layout';
import {
  Align,
  BoxSizing,
  Direction,
  Display,
  Edge,
  Errata,
  ExperimentalFeature,
  FlexDirection,
  Gutter,
  Justify,
  MeasureMode,
  Overflow,
  PositionType,
  Unit,
  Wrap,
} from 'yoga-layout';

test.skip('box_sizing_content_box', () => {
  const config = Yoga.Config.create();
  let root;

  try {
    root = Yoga.Node.create(config);
    root.setPositionType(PositionType.Absolute);
    root.setPadding(Edge.Left, 5);
    root.setPadding(Edge.Top, 5);
    root.setPadding(Edge.Right, 5);
    root.setPadding(Edge.Bottom, 5);
    root.setBorder(Edge.Left, 10);
    root.setBorder(Edge.Top, 10);
    root.setBorder(Edge.Right, 10);
    root.setBorder(Edge.Bottom, 10);
    root.setWidth(100);
    root.setHeight(100);
    root.setBoxSizing(BoxSizing.ContentBox);
    root.calculateLayout(undefined, undefined, Direction.LTR);

    expect(root.getComputedLeft()).toBe(0);
    expect(root.getComputedTop()).toBe(0);
    expect(root.getComputedWidth()).toBe(130);
    expect(root.getComputedHeight()).toBe(130);

    root.calculateLayout(undefined, undefined, Direction.RTL);

    expect(root.getComputedLeft()).toBe(0);
    expect(root.getComputedTop()).toBe(0);
    expect(root.getComputedWidth()).toBe(130);
    expect(root.getComputedHeight()).toBe(130);
  } finally {
    if (typeof root !== 'undefined') {
      root.freeRecursive();
    }

    config.free();
  }
});