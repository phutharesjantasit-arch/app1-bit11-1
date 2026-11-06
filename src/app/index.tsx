//นำเข้า  วิว   ข้อความ  จาก   ชื่อไลบรารี่
import {View, Text, StyleSheet, Image} from 'react-native';

//ส่งออก  เริ่มต้น  ฟังก์ชั่น   ชื่อฟังก์ชั่น
export default function App(){
  return(
    <View style={homeStyle.container}>
      <Text>Phuthares</Text>
      <Text style={homeStyle.title}>Phuthares</Text>

      {/* ใส่ภาพไฟล์ */}
      <Image
        source={require('@/assets/pokemon.jpeg')}
        style={{
          width: 200, // กว้าง
          height: 200, // สูง
          borderRadius: 100, // มุมโค้ง
          borderWidth: 10, // ขอบหนา
          borderColor: "ligthblue", // สีขอบ
        }}
        ></Image>

        {/* ใส่รูปจากเว็บ */}
        <Image
        
        ></Image>
    </View>
  )
}

//สร้างสไตล์ตกแต่ง
const homeStyle = StyleSheet.create({
  container:{
    backgroundColor: "pink", // พื้นหลัง
    flex:1, // ขยายเต็มพื้นที่
    alignItems: "center"
  },
  title:{
    color: "white", // สีตัวอักษร
    fontSize: 32, // ขนาดอักษร
    fontWeight: 500, // ความหนาตัวอักษร 100-900
    fontStyle: "italic", // เอียง
    textAlign: "center"
  }
})