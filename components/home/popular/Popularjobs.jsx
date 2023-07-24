import { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
} from "react-native";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import styles from "./popularjobs.style";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
    const router = useRouter();
    const { data, isLoading, error } = useFetch("search", {
        query: "React Developer",
        num_pages: 1,
    });

    const [selectedJoB, setSelectedJoB] = useState();
    const handleCardPress = () => {
        router.push(`/job-details/${item.job_id}`);
        selectedJoB(item.job_id);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular Jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" colors={COLORS.primary} />
                ) : error ? (
                    <Text>Something went Wrong</Text>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <PopularJobCard
                                item={item}
                                selectedJoB={selectedJoB}
                                handleCardPress={handleCardPress}
                            />
                        )}
                        keyExtractor={(item) => item?.job_id}
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                        horizontal
                    />
                )}
            </View>
        </View>
    );
};

export default Popularjobs;
