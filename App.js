import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
            <div class="ly-wrap">

            <a href="introduction.html">
            <section>
            <div class="ly-section-03">
            <h1><img src="img/logo.png" alt="" width="187"></h1>
            <p><span>Planetarhythm</span></p>
            <p class="md-note-01">※当コンテンツ『VOY∀GER』は<br>5/6までの限定公開です。</p>
            <p class="md-note-01">※スマートフォンに<br>最適化しています。</p>
            <p>（画面をタップして次へ）</p>
            <!--/.ly-section-03 --></div>
            </section>
            </a>

            <!--/.ly-wrap --></div>

            <div class="ly-foot">
            <p><small>&copy;Planetarhythm: Towards the Nature of Planets</small></p>
            <!--/.ly-foot --></div>

        <Text>Hello World!</Text>
        <Text>This is tacnoma`s Tranining React Native app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
