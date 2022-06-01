import React, { useState } from 'react';
//import {  View, View,TouchableOpacity } from 'react-native';
import {Image,TouchableOpacity} from "react-native"
export const Foco = () => {
    const [estatus,setEstatus]= useState(false)
  return (
      <TouchableOpacity onPress={
          () => setEstatus(!estatus)}> <Image
    
      source={
             estatus ? require("../../img/focoOn.png"): require("../../img/focoOff.png")

      }

     style={{width: 64, height: 64 }}

/></TouchableOpacity>
   
  )
}
export default Foco