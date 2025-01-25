import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Image, Linking } from "react-native";

export const BaseUrl = "https://book-shop-api-sage.vercel.app";
// export const BaseUrl = "http://192.168.100.47:8000";

export const getCurrentDate = () => {
    const date = new Date();

    const day = date.getDate();           // Day of the month (1-31)
    const month = date.getMonth() + 1;     // Month (0-11, add 1 to get 1-12)
    const year = date.getFullYear();       // Year (e.g., 2024)

    return { day, month, year };
};


export const addCoins = async (additionalCoins) => {
    const id = await AsyncStorage.getItem("id");
    try {
        const response = await fetch(`${BaseUrl}/register/${id}/add-coins`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ additionalCoins })
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Coins added successfully:", data);
        } else {
            const errorData = await response.json();
            console.error("Failed to add coins:", errorData);
        }
    } catch (error) {
        console.error("An error occurred while adding coins:", error);
    }
};

export const addReferCoins = async (referCoins) => {
    const userId = await AsyncStorage.getItem("userId");
    if (userId) {
        console.log("userId", userId);
        try {
            const response = await fetch(`${BaseUrl}/register/generated/${userId}/refer-coins`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ referCoins })
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Refer coins added successfully:", data);
            } else {
                const errorData = await response.json();
                console.error("Failed to add refer coins:", errorData);
            }
        } catch (error) {
            console.error("An error occurred while adding refer coins:", error);
        }
    }
};


export const addAttempt = async (attempt, date) => {
    const id = await AsyncStorage.getItem("id");
    try {
        const response = await fetch(`${BaseUrl}/attempts/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ attempt, date })
        });

        const data = await response.json();
        console.log('response:', data);
        if (response.ok) {
            console.log("Attempt added successfully:", data);
        } else {
            const errorData = await response.json();
            console.error("Failed to add attempt:", errorData);
        }
    } catch (error) {
        console.error("An error occurred while adding attempt:", error);
    }
};

export const offerData = [
    require('../assets/images/offer1.png'),
    require('../assets/images/offer2.png'),
    require('../assets/images/offer2.png'),
    require('../assets/images/offer1.png'),
    require('../assets/images/offer1.png'),
]

export const homeData = [
    {
        id: 0,
        image: require('../assets/images/candleStick.png'),
        text: 'Candlestick Pattern',
        list: [
            {
                id: 0,
                title: 'Bullish Pattern',
                icon: require('../assets/images/bullish.png'),
                content: [
                    {
                        id: 1,
                        text: "Single-Candlestick Patterns"
                    },
                    {
                        id: 2,
                        text: "Double Candlestick Pattern"
                    }
                ],
            },
            {
                id: 1,
                title: 'Bearish Pattern',
                icon: require('../assets/images/bearish.png'),
                content: [
                    {
                        id: 3,
                        text: "Bearish Single Candlestick Patterns"
                    },
                    {
                        id: 4,
                        text: "Shooting Star Candlestick",
                    }
                ]
            },
            {
                id: 2,
                title: 'Doji',
                icon: require('../assets/images/neutral.png'),
                content: [
                    {
                        id: 5,
                        text: "Gravestone Doji"
                    },
                    {
                        id:6,
                        text:"Double Candlestick Pattern"
                    },
                    {
                        id:7,
                        text:"Triple Candlestick Pattern"
                    }
                ]
            }
        ],
    },
    {
        id: 1,
        image: require('../assets/images/chart.png'),
        text: 'Chart Pattern'
    },
    {
        id: 2,
        image: require('../assets/images/money.png'),
        text: 'Smart Money Concept'
    },
    {
        id: 3,
        image: require('../assets/images/volume.png'),
        text: 'Volume Spread Analysis'
    },
    {
        id: 4,
        image: require('../assets/images/stock.png'),
        text: 'Stock'
    },
    {
        id: 5,
        image: require('../assets/images/crypto.png'),
        text: 'Crypto'
    }
]


export const formatNumber = (num) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
};


export const openLink = async (webUrl) => {
    try {
        await Linking.openURL(webUrl); // Open the app URL if available, otherwise the web URL
    } catch (error) {
        Alert.alert('Failed to open link', error.message);
    }
};

// ca-app-pub-1125964563702406~7565257761
// ca-app-pub-1125964563702406/6295444098