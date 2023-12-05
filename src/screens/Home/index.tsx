import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import {  useState } from 'react';
import { styles } from './styles'
import { Participant } from '../../components/Participant';

export function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState("");
    
    function handleParticipantAdd() {
        if(participants.includes(participantName)){
           return Alert.alert("Participante existe","Já existe um participante na lista");
        }
        
        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName("");
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Deseja remover o participante ${name}?`,[
            {
                text: "Sim",
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !==name))
            },
            {
                text: "Não",
                style: 'cancel'
            }
        ]);

    }

    return (
        <View style={styles.container}>
            <Text
                style={styles.eventName}
                key="1">
                Aniversário João
            </Text>
            <Text
                style={styles.eventDate}
                key="2"
            >
                Domingo, 17 de dezembro de 2023
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor="#6B6B6B"
                    value={participantName}
                    onChangeText={setParticipantName}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleParticipantAdd}
                >
                    <Text
                        style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={index => index}
                renderItem={({ item, index }) => (
                    <Participant 
                        key={index} 
                        name={item} 
                        onRemove={() => handleParticipantRemove(item)}
                />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda, adicione participantes a lista
                    </Text>
                )}
            />
        </View>
    )
}