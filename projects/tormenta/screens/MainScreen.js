import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Image, Text,  StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const characterClasses = [
  { name: 'Inventor', screen: '/InventorMain', image: require('../assets/a.png') },
  { name: 'Bard', screen: '/BardMain', image: require('../assets/b.png') },
  { name: 'Mage', screen: '/BardMain', image: require('../assets/c.png') },
  { name: 'Cleric', screen: '/BardMain', image: require('../assets/d.png') },
  { name: 'Barbarian', screen: '/BardMain', image: require('../assets/a1.png') },
  { name: 'Druid', screen: '/BardMain', image: require('../assets/b1.png') },
  { name: 'Hunter', screen: '/BardMain', image: require('../assets/c1.png') },
  { name: 'Knight', screen: '/BardMain', image: require('../assets/d1.png') },
  { name: 'Rogue', screen: '/BardMain', image: require('../assets/a2.png') },
  { name: 'Swashbuckler', screen: '/BardMain', image: require('../assets/b2.png') },
  { name: 'Noble', screen: '/BardMain', image: require('../assets/c2.png') },
  { name: 'Fighter', screen: '/BardMain', image: require('../assets/d2.png') },
  // Add more character classes here...
];

const ITEMS_PER_PAGE = 4; // Change the ITEMS_PER_PAGE to 4 for a 2x2 grid

const MainScreen = () => {
  const totalGroups = Math.ceil(characterClasses.length / ITEMS_PER_PAGE);
  const scrollViewRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();

  const handleNavigate = (screenName) => {
    router.replace(screenName);
  };

  const handleSwipeLeft = () => {
    if (currentPage < totalGroups - 1) {
      scrollViewRef.current.scrollTo({
        x: (currentPage + 1) * scrollViewRef.current.clientWidth,
        y: 0,
        animated: true,
      });
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentPage > 0) {
      scrollViewRef.current.scrollTo({
        x: (currentPage - 1) * scrollViewRef.current.clientWidth,
        y: 0,
        animated: true,
      });
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const scrollOffset = event.nativeEvent.contentOffset.x;
          const newPage = Math.floor(scrollOffset / scrollViewRef.current.clientWidth);
          if (newPage !== currentPage) {
            setCurrentPage(newPage);
          }
        }}
      >
        {/* Render each row of buttons */}
        {Array.from({ length: totalGroups }, (_, index) => (
          <View key={index} style={styles.rowContainer}>
            {/* Render two buttons in each row */}
            {characterClasses.slice(index * ITEMS_PER_PAGE, (index + 1) * ITEMS_PER_PAGE).map((character) => (
              <TouchableOpacity key={character.name} style={styles.button} onPress={() => handleNavigate(character.screen)}>
                <Image style={styles.buttonImage} source={character.image} />
                <Text style={styles.buttonLabel}>{character.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 1,
    marginVertical: 1,
  },
  lineBreak: {
    flexBasis: '100%', // Use 'flexBasis' to create a line break
    height: 10, // Set the height for the line break
  },
  button: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  buttonImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  swipeIndicators: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20,
  },
  indicatorImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default MainScreen;
