import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList,ImageBackground } from 'react-native';
import BannerFilmes from './src/components/bannerFilmes';
import Filmes from './src/data/movies'
import Series from './src/data/series'
import Header from './src/components/header';
import SearchBar from './src/components/searchbar';
import CardFilmes from './src/components/cardFilmes';
import CardSeries from './src/components/cardSeries';
import titulo from './src/components/bannerFilmes/style'

export default function App() {
  return (
    <ImageBackground
    source={require('./src/Img/fundo.jpg')}
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
     <Header></Header>
     <SearchBar></SearchBar>
     <BannerFilmes></BannerFilmes>

     <Text style ={titulo.textBanner}>Gerais</Text> 


      <View style={{width:"90%"}}>
      <FlatList 
       horizontal ={true}
       data = {Filmes}
       keyExtractor = {(item) => item.id} 
       renderItem = {({item}) => (
      

        <CardFilmes 

      
        titulo = {item.nome}
        nota = {item.nota}
        imagem = {item.imagem}

        >
        </CardFilmes>

       )}
      />

      </View>
      <Text style ={titulo.textBanner}>Suplementos</Text>

      <View style={{width: '90%'}}>
        
        <FlatList 
        horizontal ={true}
        data = {Series}
        keyExtractor = {(item) => item.id} 
        renderItem = {({item}) => (

          <CardSeries 
          titulo = {item.nome}
          nota = {item.nota}
          imagem = {item.imagem}

          >
          </CardSeries>

        )}
        />
      
    </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // ou 'contain' se você preferir
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // opcional: define uma cor de sobreposição ao fundo
    alignItems: 'center',
  },
});
