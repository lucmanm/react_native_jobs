import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJoB, handleCardPress }) => {
    return (
        <TouchableOpacity
            style={styles.container(selectedJoB, item)}
            onPress={() => handleCardPress(item)}>
            <TouchableOpacity style={styles.logoContainer(selectedJoB, item)}>
                <Image
                    source={{ uri: item.employer_logo }}
                    resizedMode="contain"
                    style={styles.logoImage}
                />
            </TouchableOpacity>
            <Text>{item.employer_name}</Text>
        </TouchableOpacity>
    );
};

export default PopularJobCard;
