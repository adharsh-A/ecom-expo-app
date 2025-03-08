import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter for navigation

export default function Home() {
    const router = useRouter();
    return (
        <View style={styles.main}>
            {/* Background Image */}
            <ImageBackground 
                source={{ uri: 'https://i.pinimg.com/736x/0a/1b/e2/0a1be2b731cc427e9e9122605901dbbc.jpg' }} 
                // source={{ uri: 'https://i.pinimg.com/736x/89/8b/ae/898baea3e6b9e261358d71018bdfdda2.jpg' }} 
                style={styles.image}
                resizeMode="cover"
                // blurRadius={3}
                offset={[0, 0]}
            >
                <View style={styles.overlay}>
                    <TypewriterText style={styles.text} text="Hello, Adharsh!" />
                    
                    {/* Main Button */}
                    
                </View>
                <TouchableOpacity style={styles.button} onPress={() => router.push("./list")}>
                <Text style={styles.buttonText}>Let's Start</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}



const TypewriterText = ({ text, style }) => {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, 150);
            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => {
                setDisplayText("");
                setIndex(0);
            }, 2000);
        }
    }, [index, text]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <Text style={style}>
            {displayText}
            {showCursor && "|"}
        </Text>
    );
};


const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: "100%",
        height: "100%",
        padding: 20,
    },
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    text: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center", // Center the text
    },
    button: {
        height: 60,
        textAlign: "center",
        backgroundColor: "lime",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 50,
        marginTop: 20,
        justifyContent: "center", // Ensures vertical centering
        alignItems: "center", // 
    },
    buttonText: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
    },
});
