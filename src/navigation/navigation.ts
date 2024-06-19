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
  Root: undefined;
};

export type AppParamList = {
  Home: undefined;
  "Research Actions": { research: Research };
  Collect: undefined;
  "Thanks Participation": undefined;
  "Report Page": undefined;
  "Modified Research": undefined;
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
export type LoginScreenProps = NativeStackScreenProps<
  PreAuthParamList,
  "Login"
>;
export type CreateAccountScreenProps = NativeStackScreenProps<
  PreAuthParamList,
  "Create Account"
>;
export type RecoverPasswordScreenProps = NativeStackScreenProps<
  PreAuthParamList,
  "Recover Password"
>;
export type RootScreenProps = NativeStackScreenProps<PreAuthParamList, "Root">;
/** Post-auth screens */
export type HomeScreenProps = DrawerScreenProps<AppParamList, "Home">;
export type ResearchActionsScreenProps = DrawerScreenProps<
  AppParamList,
  "Research Actions"
>;
export type CollectScreenProps = NativeStackScreenProps<
  AppParamList,
  "Collect"
>;
export type ThanksParticipationScreenProps = NativeStackScreenProps<
  AppParamList,
  "Thanks Participation"
>;
export type ReportScreenProps = NativeStackScreenProps<
  AppParamList,
  "Report Page"
>;
export type ModifiedResearchScreenProps = NativeStackScreenProps<
  AppParamList,
  "Modified Research"
>;
export type NewResearchScreenProps = NativeStackScreenProps<
  AppParamList,
  "New Research"
>;
