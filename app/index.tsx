import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import React, { useState } from "react";
import { ScrollView } from "react-native";
export default function HomeScreen() {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstValue, setFirstValue] = useState('');
  const [opertor, setOperator] = useState(null);
 
  const handleNumberInput = (num: number) => {
    if (displayValue === '0') {
        setDisplayValue(num.toString());
    } else {
        setDisplayValue(displayValue + num);
    }
  };
    const handleOperator = (operator: any) => {
setOperator(operator)
setFirstValue(displayValue)
setDisplayValue('0')

    };

    const handleEqual = () => {
      const num1 = parseFloat(firstValue);
      const num2 = parseFloat(displayValue);
      if(opertor === '+') {
        setDisplayValue((num1 + num2).toString());}
        else if(opertor === '-') {
          setDisplayValue((num1 - num2).toString());
        } else if(opertor === 'X') {  
          setDisplayValue((num1 * num2).toString());
        } else if(opertor === '÷') {
          setDisplayValue((num1 / num2).toString());
      }
      else if(opertor === '%') {
        setDisplayValue((num1 % num2).toString());
      }
      
      setOperator(null);
      setFirstValue('');
    };

    const handleDelete = () => {
      if (displayValue.length > 1) {
        setDisplayValue(displayValue.slice(0, -1));
      } else {
        setDisplayValue('0'); 
      }
    };

    const handleClear = () => {
      setDisplayValue('0');
      setOperator(null);
      setFirstValue('');  
  };


 return(

  <View className="flex-1 bg-customBabyBlue items-center justify-center">
    <View style={{ flex: 2 }} className="flex justify-end items-end p-20">
      <Text className="text-customBlue text-[48px]">{displayValue}</Text>
    </View>

    <View style={{ flex: 3 }} className="w-[90%] ">
      <View className="flex flex-row justify-between mb-3">
        <TouchableOpacity className="w-[20%] h-[80px] bg-customBlue items-center justify-center rounded-full" onPress={handleClear}>
          <Text className="text-[30px]">C</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[20%] h-[80px] bg-customBlue items-center justify-center rounded-full">
          <Text className="text-[30px]">.</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[20%] h-[80px] bg-customBlue items-center justify-center rounded-full"
        onPress={() => handleOperator('%')}>
          <Text className="text-[25px]">%</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[20%] h-[80px] bg-customBlue items-center justify-center rounded-full"
         onPress={() => handleOperator('÷')}>
          <Text className="text-[30px]">÷</Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-row justify-between mb-3">
        <TouchableOpacity className="w-[20%] h-[80px] bg-customYelGreen items-center justify-center rounded-full"
        onPress={() => handleNumberInput(1)}>
          <Text className="text-[30px]">1</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[20%] h-[80px] bg-customYelGreen items-center justify-center rounded-full"
        onPress={() => handleNumberInput(2)}>
          <Text className="text-[30px]">2</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[20%] h-[80px] bg-customYelGreen items-center justify-center rounded-full"
        onPress={() => handleNumberInput(3)}>
          <Text className="text-[30px]">3</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[20%] h-[80px] bg-customBlue items-center justify-center rounded-full"
        onPress={() => handleOperator('X')}>
          <Text className="text-[25px]">X</Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-row justify-between mb-3">
        <TouchableOpacity className="w-[20%] h-[80px] bg-customYelGreen items-center justify-center rounded-full"
        onPress={() => handleNumberInput(4)}>
          <Text className="text-[30px]">4</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[20%] h-[80px] bg-customYelGreen items-center justify-center rounded-full"
        onPress={() => handleNumberInput(5)}>
          <Text className="text-[30px]">5</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[20%] h-[80px] bg-customYelGreen items-center justify-center rounded-full"
        onPress={() => handleNumberInput(6)}>
          <Text className="text-[30px]">6</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[20%] h-[80px] bg-customBlue items-center justify-center rounded-full"
        onPress={() => handleOperator('-')}>
          <Text className="text-[30px]">-</Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-row justify-between mb-3">
        <TouchableOpacity className="w-[20%] h-[80px] bg-customYelGreen items-center justify-center rounded-full"
        onPress={() => handleNumberInput(7)}>
          <Text className="text-[30px]">7</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[20%] h-[80px] bg-customYelGreen items-center justify-center rounded-full"
        onPress={() => handleNumberInput(8)}>
          <Text className="text-[30px]">8</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[20%] h-[80px] bg-customYelGreen items-center justify-center rounded-full"
        onPress={() => handleNumberInput(9)}>
          <Text className="text-[30px]">9</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[20%] h-[80px] bg-customBlue items-center justify-center rounded-full"
        onPress={() => handleOperator('+')}>
          <Text className="text-[30px]">+</Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-row justify-between mb-3">
        <TouchableOpacity className="w-[20%] h-[80px] bg-customYelGreen items-center justify-center rounded-full"
        onPress={() => handleNumberInput(0)}>
          <Text className="text-[30px]">0</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[20%] h-[80px] bg-customYelGreen items-center justify-center rounded-full">
          <Text className="text-[30px]">.</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[20%] h-[80px] bg-customYelGreen items-center justify-center rounded-full"
        onPress={handleDelete}>
          <Text className="text-[27px]">Del</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[20%] h-[80px] bg-customBlue items-center justify-center rounded-full" onPress={handleEqual}>
          <Text className="text-[30px]">=</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>

 )
}

