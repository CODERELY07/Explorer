import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import styles from './../styles';

function HomeScreen() {
  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <Text style={styles.headerText}>Sorsogon Explorer.</Text>
        <Text style={styles.welcomeText}>Welcome!</Text>
      </View>
      <View>
        <Text style={styles.descriptionText}>
          Discover the hidden gems of Sorsogon, a province brimming with natural beauty, rich history, and warm hospitality. Let Sorsogon Explorer be your guide to unforgettable adventures in this paradise.
        </Text>
      </View>
      <View>
        <Text style={styles.sectionTitle}>Featured Attractions</Text>
        <View style={styles.attractionsContainer}>
          <View style={styles.boxContainer}>
            <View style={styles.boxImageHolder}>
              <Image source={require('./../assets/Tikling.jpg')} style={styles.placeImage} />
            </View>
            <Text style={styles.attractionText}>Tikling Island</Text>
          </View>
          <View style={styles.boxContainer}>
            <View style={styles.boxImageHolder}>
              <Image source={require('./../assets/Bulusan.jpg')} style={styles.placeImage} />
            </View>
            <Text style={styles.attractionText}>Bulusan Lake</Text>
          </View>
          <View style={styles.boxContainer}>
            <View style={styles.boxImageHolder}>
              <Image source={require('./../assets/Paguriran.jpg')} style={styles.placeImage} />
            </View>
            <Text style={styles.attractionText}>Pagurian Island</Text>
          </View>
          <View style={styles.boxContainer}>
            <View style={styles.boxImageHolder}>
              <Image source={require('./../assets/Complex.jpg')} style={styles.placeImage} />
            </View>
            <Text style={styles.attractionText}>Sorsogon Sports Complex</Text>
          </View>
        </View>
        <View style={styles.updatesContainer}>
          <Text style={styles.sectionTitle}>Recent Updates</Text>
          <Text style={styles.updateText}>
            <Text style={styles.highlight}>Sorsogon's "Bicol Express" Train: </Text>
            The Bicol Express train route has been extended to Sorsogon, providing a convenient and scenic way to travel to the province.{"\n"}{"\n"}
            <Text style={styles.highlight}>New Eco-Tourism Park: </Text>
            A new eco-tourism park is being developed in Sorsogon, featuring a variety of activities like ziplining, kayaking, and nature trails.{"\n"}{"\n"}
            <Text style={styles.highlight}>Sorsogon's "Taste of Bicol" Festival: </Text>
            The annual "Taste of Bicol" festival in Sorsogon will feature a variety of culinary delights from the region, including fresh seafood, spicy dishes, and traditional desserts.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
