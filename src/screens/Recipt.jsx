import React from 'react'
import { useSelector } from 'react-redux'

const Recipt = () => {
    const user = useSelector(state => state.auth)
    console.log('====================================');
    console.log(user);
    console.log('====================================');
  return (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        
      </View>
      <View style={styles.section}>
        
      </View>
    </Page>
  </Document>
  )
}

export default Recipt

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });