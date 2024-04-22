import React from "react";
import {
  TouchableOpacity,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Text } from "react-native-paper";
import { useAppTheme } from "../../theme/defaultTheme";

type ResearchActionProps = {
  onClick: () => void;
  imgSource: ImageSourcePropType;
  title: string;
};

export const ResearchAction = ({
  onClick,
  imgSource: imgSourcePath,
  title,
}: ResearchActionProps) => {
  const theme = useAppTheme();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.colors.primaryContainer,
        padding: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
        gap: theme.spacing(2),
        width: "70%",
      }}
      onPress={() => onClick()}
    >
      <Image
        source={imgSourcePath}
        style={{
          marginStart: "auto",
          marginEnd: "auto",
          width: 80,
          height: 80,
        }}
      />
      <Text
        variant="displaySmall"
        style={{ textAlign: "center", color: theme.colors.onPrimaryContainer }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
