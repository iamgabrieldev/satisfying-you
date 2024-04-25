import React from "react";
import {
  Image,
  ImageSourcePropType,
} from "react-native";
import { Text, Card } from "react-native-paper";
import { useAppTheme } from "../../theme/defaultTheme";

type CardActionProps = {
  onClick: () => void;
  imgSource: ImageSourcePropType;
  title: string;
  date: string;
};

export const CardAction = ({
  onClick,
  imgSource: imgSourcePath,
  title,
  date
}: CardActionProps) => {
  const theme = useAppTheme();

  return (
    <Card
      style={{
        backgroundColor: 'white',
        padding: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
        gap: theme.spacing(2),
        width: "100%",
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
        style={{ textAlign: "center", color: theme.colors.primary, fontSize: 36, marginTop: 20 }}
      >
        {title}
      </Text>
      <Text
        variant="displaySmall"
        style={{ textAlign: "center", color: "#8B8B8B", fontSize: 16 }}
      >
        {date}
      </Text>
    </Card>
  );
};
