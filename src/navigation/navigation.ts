/**
 * Defines all navigations and params that can be passed.
 * ```Undefined``` means that the navigation doesn't take any params, but it's still defined.
 * @see {@link https://reactnavigation.org/docs/typescript/#type-checking-the-navigator}
 */
export type RootStackParamList = RootParamList & AppParamList;

export type RootParamList = {
  Login: undefined;
  "Create Account": undefined;
  "Recover Password": undefined;
  "Search Actions": undefined;
  Root: undefined;
};

export type AppParamList = {
  Home: undefined;
};

/**
 * Specify a default type for ```useNavigation``` hook and other APIs.
 * @see {@link https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc}
 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
