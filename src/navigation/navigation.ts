import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Research } from "../components/research/research-types";
import { DrawerScreenProps } from "@react-navigation/drawer";

/**
 * Defines all navigations and params that can be passed.
 * ```Undefined``` means that the navigation doesn't take any params, but it's still defined.
 * @see {@link https://reactnavigation.org/docs/typescript/#type-checking-the-navigator}
 */
export type RootStackParamList = PreAuthParamList & AppParamList;

export type PreAuthParamList = {
  Login: undefined;
  "Create Account": undefined;
  "Recover Password": undefined;
  "Collect": undefined;
  "Thanks Participation": undefined;
  "Report Page": undefined;
  Root: undefined;
};

export type AppParamList = {
  Home: undefined;
  "Research Actions": { research: Research };
  "New Research": undefined;
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

/** Export types for each individual screens. */
export type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;
export type CreateAccountProps = NativeStackScreenProps<
  RootStackParamList,
  "Create Account"
>;
export type RecoverPasswordProps = NativeStackScreenProps<
  RootStackParamList,
  "Recover Password"
>;
export type RootProps = NativeStackScreenProps<RootStackParamList, "Root">;

export type HomeProps = DrawerScreenProps<AppParamList, "Home">;
export type ResearchActionsProps = DrawerScreenProps<
  AppParamList,
  "Research Actions"
>;

export type NewResearchProps = DrawerScreenProps<AppParamList, "New Research">;
export type ReportProps = NativeStackScreenProps<
  RootStackParamList,
  "Report Page"
>;
