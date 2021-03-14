import React from 'react';
import {View, ScrollView} from 'react-native';
import {Card} from 'react-native-paper';

import AppBar from '../../components/common/AppBar';
import TitleComponent from '../../components/common/TitleComponent';
import SubtitleComponent from '../../components/common/SubtitleComponent';
import TileComponent from '../../components/common/TileComponent';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <AppBar />
      <Card>
        <TitleComponent title="Mau beli apa hari ini, Rakha?" />
        <SubtitleComponent subtitle="Pilih berdasarkan kategori berikut" />
      </Card>
      <Card>
        <ScrollView horizontal={true} style={{paddingVertical: 20}}>
          <TileComponent />
          <TileComponent />
          <TileComponent />
          <TileComponent />
        </ScrollView>
      </Card>
    </View>
  );
};

export default HomeScreen;
