import React, { FC, useEffect, useState } from "react";
import { VictoryLegend, VictoryPie } from "victory-native";
import { View } from "react-native";
import { Container } from "../components/ui/Container";
import { ReportScreenProps } from "../navigation/navigation";

const ReportPage: FC<ReportScreenProps> = ({ route }) => {
  const _votes = route.params.votes;

  const [votes, setVotes] = useState({
    pessimo: 1,
    ruim: 1,
    neutro: 1,
    bom: 1,
    excelente: 1,
  });

  useEffect(() => {
    if (_votes) {
      setVotes(_votes);
    }
  }, [_votes]);

  return (
    <View style={{ height: "100%" }}>
      <Container>
        <VictoryPie
          width={365}
          height={400}
          colorScale={["#F1CE7E", "#6994FE", "#5FCDA4", "#EA7288", "#53D8D8"]}
          data={[
            { x: "Excelente", y: votes.excelente },
            { x: "Bom", y: votes.bom },
            { x: "Neutro", y: votes.neutro },
            { x: "Ruim", y: votes.ruim },
            { x: "Péssimo", y: votes.pessimo },
          ]}
          style={{
            labels: { fill: "transparent" },
          }}
        />
        <VictoryLegend
          x={80}
          y={0}
          orientation="vertical"
          symbolSpacer={20}
          data={[
            {
              name: "Excelente",
              symbol: { fill: "#F1CE7E", type: "square", size: 20 },
            },
            {
              name: "Bom",
              symbol: { fill: "#6994FE", type: "square", size: 20 },
            },
            {
              name: "Neutro",
              symbol: { fill: "#5FCDA4", type: "square", size: 20 },
            },
            {
              name: "Ruim",
              symbol: { fill: "#EA7288", type: "square", size: 20 },
            },
            {
              name: "Péssimo",
              symbol: { fill: "#53D8D8", type: "square", size: 20 },
            },
          ]}
          style={{
            labels: {
              fill: "white",
              fontSize: 35,
              fontFamily: "AveriaLibre-Regular",
            },
          }}
        />
      </Container>
    </View>
  );
};

export default ReportPage;
