import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const translations = {
  en: {
    welcome: 'Welcome',
    helpText: 'How can we help you today?',
    features: {
      askMe: 'Ask Me',
      displaySchemes: 'Display All Schemes',
      applySchemes: 'Apply for Schemes',
      learning: 'Learning Modules',
      news: 'News Headlines',
      faq: 'FAQs',
      bank: 'Bank Details & Transactions',
    },
  },
  hi: {
    welcome: 'स्वागत है',
    helpText: 'हम आपकी कैसे मदद कर सकते हैं?',
    features: {
      askMe: 'मुझसे पूछें',
      displaySchemes: 'सभी योजनाएँ दिखाएँ',
      applySchemes: 'योजनाओं के लिए आवेदन करें',
      learning: 'शिक्षण मॉड्यूल',
      news: 'समाचार शीर्षक',
      faq: 'अक्सर पूछे गए प्रश्न',
      bank: 'बैंक विवरण और लेन-देन',
    },
  },
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('User');
  const [language, setLanguage] = useState('en');
  const t = translations[language];

  useEffect(() => {
    const fetchStoredData = async () => {
      try {
        const storedName = await AsyncStorage.getItem('userName');
        if (storedName) setName(storedName);

        const storedLang = await AsyncStorage.getItem('appLanguage');
        if (storedLang) setLanguage(storedLang);
      } catch (error) {
        console.error('Error fetching from AsyncStorage:', error);
      }
    };

    fetchStoredData();
  }, []);

  const toggleLanguage = async () => {
    const newLang = language === 'en' ? 'hi' : 'en';
    setLanguage(newLang);
    await AsyncStorage.setItem('appLanguage', newLang);
  };

  const features = [
    {
      name: t.features.askMe,
      icon: <Ionicons name="chatbubble-ellipses-outline" size={28} color="#007AFF" />,
      screen: 'ChatScreen',
    },
    {
      name: t.features.displaySchemes,
      icon: <MaterialIcons name="list-alt" size={28} color="#28A745" />,
      screen: 'DisplaySchemesScreen',
    },
    {
      name: t.features.applySchemes,
      icon: <FontAwesome5 name="file-signature" size={26} color="#F39C12" />,
      screen: 'ApplySchemesScreen',
    },
    {
      name: t.features.learning,
      icon: <Ionicons name="school-outline" size={28} color="#6F42C1" />,
      screen: 'LearningModulesScreen',
    },
    {
      name: t.features.news,
      icon: <MaterialCommunityIcons name="newspaper-variant-outline" size={28} color="#DC3545" />,
      screen: 'NewsScreen',
    },
    {
      name: t.features.faq,
      icon: <Entypo name="help-with-circle" size={28} color="#17A2B8" />,
      screen: 'FAQScreen',
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(item.screen)}>
      {item.icon}
      <Text style={styles.label}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Language switcher */}
      <TouchableOpacity style={styles.languageButton} onPress={toggleLanguage}>
        <Ionicons name="language-outline" size={24} color="#007AFF" />
      </TouchableOpacity>

      <Image
        source={{
          uri: 'https://www.ux4g.gov.in/assets/img/logos-page/Emblem_of_India%202.png',
        }}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.header}>{t.welcome}, {name}</Text>
      <Text style={styles.subtext}>{t.helpText}</Text>

      <FlatList
        data={features}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        ListFooterComponent={
          <TouchableOpacity
            style={styles.footerCard}
            onPress={() => navigation.navigate('BankDetailsScreen')}
          >
            <Ionicons name="wallet-outline" size={26} color="#007AFF" />
            <Text style={styles.footerCardText}>{t.features.bank}</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
    backgroundColor: '#F9FAFB',
  },
  languageButton: {
    position: 'absolute',
    top: 48,
    right: 16,
    zIndex: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    elevation: 3,
  },
  logo: {
    width: 100,
    height: 80,
    alignSelf: 'center',
    marginBottom: 8,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtext: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 40,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    width: '48%',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  label: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
  footerCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  footerCardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
  },
});
