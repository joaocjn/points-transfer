import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createServer } from "miragejs"

import Header from './components/Header';
import Main from './components/Main'

if (window.server) {
  server.shutdown()
}

window.server = createServer({
  routes() {
    this.get("/api/users", () => {
      return {
        users: [
          { id: 1, 
            name: "João Cândido", 
            image: "https://instagram.fudi1-1.fna.fbcdn.net/v/t51.2885-19/285178350_433631628596007_4104435985546135755_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fudi1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=M1LVo_5cX-0AX9XxakA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9PGocb7ziWY3sKGAQ3LzbH0CvRjGFYpgqH3VCZlLKxhg&oe=632039A9&_nc_sid=8fd12b", 
            matricula: '2011321', 
            curso: 'Engenharia de Software', 
            saldo: 4000},
          { id: 2, 
            name: "Cedric Arnaud", 
            image: 'https://instagram.fudi1-1.fna.fbcdn.net/v/t51.2885-19/299029985_380677594141010_1921732930092649854_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fudi1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=tG9LLCtLfwwAX9xVrCV&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT9nTDq7mouM2yw1S_GwHzkkWjnuaC3dTjucM0le1l_ukg&oe=6320CB5C&_nc_sid=5cbaad', 
            matricula: '2011138', 
            curso: 'Medicina', 
            saldo: 2000},
          { id: 3, 
            name: "Sergio Glésio",
            image: 'https://scontent.cdninstagram.com/v/t51.2885-19/305498183_461739475837555_8321309138888060636_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=PnaQFT8KHKUAX84uoeI&edm=APs17CUBAAAA&ccb=7-5&oh=00_AT91zyP2RnV7k6xmlV5-ZdYRD2Btx6ojKNjV6YynaM3liA&oe=632047C6&_nc_sid=978cb9', 
            matricula: '2011671', 
            curso: 'Odontologia', 
            saldo: 3500},
        ],
      }
    })
  },
})

const App = () => {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(json => setUsers(json.users))
  }, [])

  const user = users.filter(user => {
    if(user.id === 1) 
    return user
  })
  return (
    <View style={styles.container}>
      <Header usersApi={user}/>
      <Main usersApi={user}/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  }
});

export default App
