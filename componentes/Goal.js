import {StyleSheet, view, Text, Pressable} from "react-native"

function GoatItem({itemData, onDeleteItem, id}){
    function deleteGoatHandeler(){
        onDeleteItem(id)
        console.log('Delete goal handeler')
    }

    return (
        <Pressable onPress={deleteGoatHandeler}>
            <View style = {StyleSheet.goalsItem}>
                <Text style={style.goalText}>{itemData.text}</Text>
            </View>
        </Pressable>
    )
}

export default goalsItem

const style = StyleSheet.create({
    goalsItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundcolor: '#8576FF',
        color: 'white'
        
    },
    goalText:{
        color: 'white',
    }
})
