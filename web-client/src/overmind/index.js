import { statechart } from "overmind-statechart";
import { createHook } from "overmind-react";
import { merge, namespaced } from "overmind/config";

import * as counter from "./counter";

const baseConfig = {
  state: {},
  actions: {},
};

export const config = merge(baseConfig, namespaced({ counter }));

export const configWithStatechart = statechart(config, {
  counter: counter.chart,
});

export const useOvermind = createHook();
