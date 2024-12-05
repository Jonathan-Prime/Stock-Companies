import { View, FlatList, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { StockCard } from "@/components/StockCard";
import { stocks } from "@/data";
import { Picker } from "@react-native-picker/picker";

export default function HomeScreen() {
  const [isGridView, setIsGridView] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { filters, setFilters, filteredData, applyFilters, clearFilters } = useFilter(stocks);

  return (
    <View style={{ flex: 1, paddingTop: 30 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <Text variant="titleLarge" style={{ fontWeight: "bold", marginBottom: 5 }}>
          Available Stocks
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{
              marginHorizontal: 5,
              padding: 10,
              borderRadius: 8,
              backgroundColor: "black",
            }}
          >
            <Ionicons name="filter-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsGridView(false)}
            style={{
              marginHorizontal: 5,
              padding: 10,
              borderRadius: 8,
              backgroundColor: !isGridView ? "lightgray" : "black",
            }}
          >
            <Ionicons
              name="list-outline"
              size={24}
              color={!isGridView ? "white" : "gray"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsGridView(true)}
            style={{
              marginHorizontal: 5,
              padding: 10,
              borderRadius: 8,
              backgroundColor: isGridView ? "lightgray" : "black",
            }}
          >
            <Ionicons
              name="grid-outline"
              size={24}
              color={isGridView ? "white" : "gray"}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        key={isGridView ? "grid" : "list"}
        data={filteredData}
        numColumns={isGridView ? 2 : 1}
        keyExtractor={(item) => item.ticker}
        renderItem={({ item }) => (
          <StockCard
            companyName={item.companyName}
            image={item.image}
            price={item.price}
            priceChange={item.priceChange}
            priceChangePercentage={item.priceChangePercentage}
            ticker={item.ticker}
            isGridView={isGridView}
          />
        )}
        contentContainerStyle={{
          paddingHorizontal: isGridView ? 5 : 0,
        }}
      />
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text variant="titleLarge" style={{ fontWeight: "bold", color: '#282828' }}>
              Filter
            </Text>

            <Text style={{ color: '#282828', marginTop: 5 }}>Select to Ticker:</Text>
            <Picker
              selectedValue={filters.ticker}
              onValueChange={(itemValue) => setFilters({ ...filters, ticker: itemValue })}
              style={{ marginBottom: 5 }}
            >
              <Picker.Item label="Select to ticker" value="" />
              {stocks.map((stock) => (
                <Picker.Item key={stock.ticker} label={stock.ticker} value={stock.ticker} />
              ))}
            </Picker>

            <Text style={{ color: '#282828' }}>Select to range price:</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}>

              <TextInput
                label="Minimun price"
                value={String(filters.priceMin)}
                onChangeText={(text) => setFilters({ ...filters, priceMin: Number(text) })}
                style={{ width: "45%" }}
                keyboardType="numeric"
              />
              <TextInput
                label="Maximun price"
                value={String(filters.priceMax)}
                onChangeText={(text) => setFilters({ ...filters, priceMax: Number(text) })}
                style={{ width: "45%" }}
                keyboardType="numeric"
              />
            </View>

            <Text style={{ color: '#282828' }}>Select to sector:</Text>
            <Picker
              selectedValue={filters.sector}
              onValueChange={(itemValue) => setFilters({ ...filters, sector: itemValue })}
            >
              <Picker.Item label="Selecciona un sector" value="" />
              {stocks.map((stock) => (
                <Picker.Item key={stock.sector} label={stock.sector} value={stock.sector} />
              ))}
            </Picker>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Button
                mode="contained"
                onPress={() => {
                  applyFilters();
                  setModalVisible(false);
                }}
                style={{ marginRight: 10 }}
              >
                Applied Filters
              </Button>
              <Button
                mode="outlined"
                onPress={() => {
                  clearFilters();
                  setModalVisible(false);
                }}
              >
                Clear filters
              </Button>
            </View>
          </View>
        </View>≥
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    maxHeight: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },

});