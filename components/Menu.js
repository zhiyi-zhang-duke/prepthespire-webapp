import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Link } from "react-router-dom";
import styles from '../common.style.js';


export default function Menu() {
    const book = require('../assets/book.png')
    const whale = require('../assets/whale.png')
    return (
        <View style={styles.container}>
          <ScrollView style={styles.menuWrapper}>
            <h2 style={styles.menuTitle}>Prep The Spire</h2>
            <nav style={styles.navStyle}>
              <Link to="/newrun" style={styles.linkStyle}><Text style={styles.menuOption}>New Run</Text></Link>
            </nav>
            <nav style={styles.navStyle}>
              <Link to="/runprep" style={styles.linkStyle}><Text style={styles.menuOption}>Run Prep</Text></Link>
            </nav>
            <nav style={styles.navStyle}>
              <Link to="/newcard" style={styles.linkStyle}><Text style={styles.menuOption}>New Card (test)</Text></Link>
            </nav>
            <nav style={styles.navStyle}>
              <Link to="/settings" style={styles.linkStyle}><Text style={styles.menuOption}>Settings</Text></Link>
            </nav>
          </ScrollView>
          {/* The 2 icons are meant to represent neow studying */}
          <View style={styles.menuFooter}>
              <Image style={styles.menuImage} source={book}></Image>
              <Image style={styles.menuImage} source={whale}></Image>
          </View>          
        </View>
      );
}