import { Pressable, View, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { Text } from "react-native-paper";
import { router } from "expo-router";

import { formatCurrency } from "@/utils/formatCurrency";

export const StockCard = ({
  ticker,
  image,
  companyName,
  price,
  priceChange,
  priceChangePercentage,
  isGridView,
}: {
  ticker: string;
  image: string;
  companyName: string;
  price: number;
  priceChange: number;
  priceChangePercentage: number;
  isGridView: boolean;
}) => {
  const { width } = useWindowDimensions();
  const cardWidth = isGridView ? (width / 2) - 15 : width - 20;

  return (
    <Pressable
      style={{
        flexDirection: isGridView ? "column" : "row",
        margin: 5,
        padding: 10,
        width: cardWidth,
        borderRadius: 8,
        elevation: 2,
        shadowColor: "#f2f2f2",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      }}
      onPress={() => router.push(`/${ticker}`)}
    >
      <Image
        source={image}
        style={{
          height: isGridView ? 100 : 50,
          width: isGridView ? "100%" : 50,
          marginBottom: isGridView ? 10 : 0,
          borderRadius: isGridView ? 8 : 0,
        }}
        contentFit="contain"
      />
      <View
        style={{
          flexDirection: isGridView ? "column" : "row",
          justifyContent: "space-between",
          flex: 1,
          paddingLeft: isGridView ? 0 : 15,
        }}
      >
        <View>
          <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
            {ticker}
          </Text>
          <Text variant="labelMedium">{companyName}</Text>
        </View>
        <View style={{ alignItems: isGridView ? "flex-start" : "flex-end" }}>
          <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
            {formatCurrency(price)}
          </Text>
          <Text
            variant="labelMedium"
            style={{
              color:
                priceChange < 0
                  ? "red"
                  : priceChange > 0
                  ? "lightgreen"
                  : "auto",
            }}
          >
            {formatCurrency(priceChange)} {priceChangePercentage.toFixed(2)}%
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
