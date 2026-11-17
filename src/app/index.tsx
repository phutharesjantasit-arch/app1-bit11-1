//นำเข้า {วิว , ข้อความ} จาก ชื่อไลบารี่
import { Background } from 'expo-router/build/react-navigation/index.js';
import { Image, StyleSheet, Text, View } from 'react-native';


//(หน้าขาวๆ) exportส่งออก defaultเริ่มต้น functionฟังก์ชั่น Appชื่อฟังก์ชั่น 
export default function App(){
  return(
    <View style={homeStyle.container}>




    {/* ใส่ภาพจากไฟล์ */}
    <Image
     source={require('@/assets/pokemon.jpeg')}
     style={{
      width: 200, //กว้าง
      height: 200 , //สูง
      borderRadius: 400 , //โค้ง
      borderWidth: 10 , 
      borderColor: "black" ,
     }}
   />


      {/* ใส่ข้อความ */}
      <Text style={homeStyle.title}>Phuthares Jantasit</Text>
       <Text>ท้ายรักเมีย</Text>


  <View style={homeStyle.ga}>
     <Text style={{margin: 5}}> ห้อง BIT.1/1 เลขที่ 1 </Text>
     <Text style={{margin: 5}}> Email: phuthares.jantasit@e-tech.ac.th </Text>
     <Text style={{margin: 5}}> Phone: 0837725020 </Text>
     
      </View>


  <Text style={{fontSize: 25 , fontWeight: 700 , margin: 5}}>ภาพกิจกรรม</Text>


   <View style={{flexDirection: "row"}}>


   {/* ใส่รูปจากเว็ป */}
   <Image
    source={{uri:"https://i.pinimg.com/236x/0c/53/ce/0c53ce96f2e3b7c8628f5cafd154b615.jpg"}}
    style={{
      width: 120, //กว้าง
      height: 120 , //สูง
      borderRadius: 20 , //โค้ง
      margin: 5
     }}
   />


     <Image
    source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDt96w1LNhjx_mzFsmMLHVomvdEKIXnSTv2RvawelVYw&s=10https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDt96w1LNhjx_mzFsmMLHVomvdEKIXnSTv2RvawelVYw&s=10"}}
    style={{
      width: 120, //กว้าง
      height: 120 , //สูง
      borderRadius: 20 , //โค้ง
      margin: 5
     }}
   />


     <Image
    source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9kJPaHbJvZI74OEW1ye_YTu9Ufz1i2prCKecE3leBqa-QTCleIFpbXM&s=10"}}
    style={{
      width: 120, //กว้าง
      height: 120 , //สูง
      borderRadius: 20 , //โค้ง
      margin: 5
     }}
   />


   </View>


    </View>
  )
}


//สร้างสไตล์ตกแต่ง
  const homeStyle = StyleSheet.create({
    container:{
      backgroundColor: "white" ,
      flex:1 , //ขยายพื้รที่
      alignItems: "center" ,
      justifyContent: "center"
    },
    title:{
      color: "black" , // สีอักษร
      fontSize: 32 , //ขนาดอักษร
      fontWeight: 700 , // ความหนาอักษร 100-900
      fontStyle: "italic" , //เสียง
      textAlign: "center"
    },


    ga:{ 
    backgroundColor: "#d1d1d1" , 
    padding: 10 ,
    margin: 20,
    width: 400,
     borderRadius: 10 ,
    }
  })