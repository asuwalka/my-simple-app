import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function SchemeScreen() {
  const [schemes, setSchemes] = useState([]);

  const fetchSchemes = async () => {
    const res = await fetch('http://172.26.58.68:5000/schemes');
    const data = await res.json();
    setSchemes(data.schemes || []);
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Fetch Schemes" onPress={fetchSchemes} />
      {schemes.map((scheme, index) => (
        <Text key={index}>• {scheme}</Text>
      ))}
    </View>
  );
}
