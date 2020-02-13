import React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {StyleSheet, View, Text } from 'react-native';

export default function Repository({ data }){
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.descripton}>{data.description}</Text>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Ionicons name="ios-calendar" size={16} color="#333" />
            <Text style={styles.statCount}>{data.stars}</Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="ios-cash" size={16} color="#333" />
            <Text style={styles.statCount}>{data.forks}</Text>
          </View>
        </View>
      </View>

         /* <View style={styles.container}>
         <Text style={styles.name}>
             {data.name}
         </Text>
         <Text style={styles.descripton}>
             {data.descripton}
         </Text>
        
         <View style={styles.stats}>
             <View style={styles.stat}>
                 <Ionicons name="ios-star" size={16} color="#333" />
                 <Text style={styles.statCount}>{data.stars}</Text>
             </View>
         </View>
         <View style={styles.stats}>
             <View style={styles.stat}>
                 <Ionicons name="ios-airplane" size={16} color="#333" />
                 <Text style={styles.statCount}>{data.forks}</Text>
             </View>
         </View>
       </View> */



  /* <Refresh onPress={onRefresh}>
    <Icon name="refresh" color="#7159c1" size={16} />
    <RefreshText>ATUALIZAR</RefreshText>
  </Refresh> */

  
    )
  }

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      borderRadius: 4,
      backgroundColor: "#FFF",
      marginBottom: 15,
    },
  
    name: {
      fontSize: 18,
      color: '#333',
      fontWeight: "bold",
  
    },
  
    descripton: {
      color: '#666',
      marginTop: 5,
      lineHeight: 20
    },
  
    stats: {
      flexDirection: 'row',
      marginTop: 15
    },

    stat: {
        flexDirection: "row",
        marginRight: 15,
        alignItems: 'center'
    },

    statCount: {
        marginLeft: 6
    }
  
    
  });