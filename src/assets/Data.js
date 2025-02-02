import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
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

export let passMode = true;

export const getMode = async () => {
    try {
        const mode = await AsyncStorage.getItem('mode');
        console.log('Mode:', mode);
        if (mode) {
            passMode = mode;
            return mode;
        } else {
            passMode = false;
            return false;
        }
    } catch (error) {
        console.error('Error retrieving mode:', error);
    }
};


export const useTheme = () => {
    const [theme, setTheme] = useState(null);  // Default state

    useEffect(() => {
        const fetchMode = async () => {
            const mode = await getMode();
            setTheme(mode);  // Update the state with the fetched mode
        };

        fetchMode();
    }, []);  // Empty dependency array to run only once on mount

    const toggleTheme = async () => {
        const newMode = theme === "dark" ? "light" : "dark";  // Toggle the mode
        setTheme(newMode);
        await AsyncStorage.setItem('mode', newMode);  // Save the new mode to AsyncStorage
    };

    return { theme, toggleTheme };
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
        image: require('../assets/images/bullish.png'),
        text: 'What are Candlestick Pattern',
        description: '(Indicate potential price increases)',
        tip: 'definition',
    },
    {
        id: 1,
        image: require('../assets/images/chart1.png'),
        text: 'Bullish Candlestick',
        list: [
            {
                id: 0,
                title: 'Hammer',
                icon: require('../assets/images/column.png'),
            },
            {
                id: 1,
                title: 'Inverse Hammer',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 2,
                title: 'Bullish Engulfing',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 3,
                title: 'Piercing Line',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 4,
                title: 'Morning Star',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 5,
                title: 'Three White Soldiers',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 6,
                title: 'Bullish Harami',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 7,
                title: 'Tweezer Bottom',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 8,
                title: 'Bullish Marubozu',
                icon: require('../assets/images/chart1.png'),
            }
        ]
    },
    {
        id: 2,
        image: require('../assets/images/bearish.png'),
        text: 'Bearish Candlestick',
        list: [
            {
                id: 9,
                title: 'Hanging Man',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 10,
                title: 'Shooting Star',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 11,
                title: 'Bearish Engulfing',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 12,
                title: 'Evening Star',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 13,
                title: 'Three Black Crows',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 14,
                title: 'Bearish Harami',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 15,
                title: 'Tweezer Top',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 16,
                title: 'Gravestone Doji',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 17,
                title: 'Bearish Marubozu',
                icon: require('../assets/images/chart1.png'),
            },
        ]
    },
    {
        id: 3,
        image: require('../assets/images/neutral.png'),
        text: 'Neutral Pattern',
        list: [
            {
                id: 18,
                title: 'Doji',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 19,
                title: 'Spinning Top',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 20,
                title: 'Long-Legged Doji',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 21,
                title: 'High Wave Candle',
                icon: require('../assets/images/chart1.png'),
            },
        ]
    },
    {
        id: 4,
        image: require('../assets/images/forex24.png'),
        text: 'Continuation',
        list: [
            {
                id: 22,
                title: 'Falling Three Methods (Bearish Continuation)',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 23,
                title: 'Rising Three Methods (Bullish Continuation)',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 24,
                title: 'Upside Tasuki Gap (Bullish Continuation)',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 25,
                title: 'Downside Tasuki Gap (Bearish Continuation)',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 26,
                title: 'Mat Hold (Bullish Continuation)',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 27,
                title: 'On-Neck Pattern (Bearish Continuation)',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 28,
                title: 'In-Neck Pattern (Bearish Continuation)',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 29,
                title: 'Thrusting Pattern (Bearish Continuation)',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 30,
                title: 'Separating Lines (Bullish or Bearish Continuation)',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 31,
                title: 'Side-by-Side White Lines (Bullish Continuation)',
                icon: require('../assets/images/chart1.png'),
            },
            {
                id: 32,
                title: 'Side-by-Side Black Lines (Bearish Continuation)',
                icon: require('../assets/images/chart1.png'),
            },
        ]
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