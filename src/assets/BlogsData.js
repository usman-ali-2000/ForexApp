import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import theme from "../Theme/GlobalTheme"
import Bullet from "../components/Bullet"

const { height, width } = Dimensions.get('window');


export const Hammer = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            height: height,
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Hammer Candlestick Pattern</Text>
            <Text style={styles.subHeading}>What is a Hammer Candlestick Pattern?</Text>
            <Text style={styles.text}>A Hammer is a bullish reversal candlestick pattern that forms after a downtrend. It signals that selling pressure is weakening, and buyers may take control, potentially reversing the price direction to the upside.</Text>
            <Text style={styles.heading}>Hammer Candlestick</Text>
            <Image source={require('../assets/images/forex1.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.subHeading}>Key Characteristics:</Text>
            <Bullet mode={mode} dot={true} heading="Small body:" text="Near the top of the candlestick range." />
            <Bullet mode={mode} dot={true} heading="Long lower shadow:" text="At least twice the size of the body, indicating strong rejection of lower prices." />
            <Bullet mode={mode} dot={true} heading="Little to no upper shadow: " text="Shows limited upward movement during the session." />
            <Bullet mode={mode} dot={true} heading="Color:" text="Can be bullish (green) or bearish (red), but a green hammer is slightly stronger as it shows buyers closed near the high." />
            <Text style={styles.subHeading}>Hammers typically appear:</Text>
            <Bullet mode={mode} heading="1. At the bottom of a downtrend:" text={`\n ○	The pattern suggests that the selling pressure has diminished.`} />
            <Bullet mode={mode} text={`○	Buyers stepped in during the session, pushing prices higher after a significant drop.`} />
            <Bullet mode={mode} heading="2.	At key support levels:" text={`\n ○	Near historical price levels where demand has previously been strong.`} />
            <Bullet mode={mode} heading="3.	After large bearish moves:" text={`\n ○	Especially when oversold conditions exist (e.g., RSI is below 30).`} />
        </View>
    )
}

export const InvertedHammer = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Inverse Hammer</Text>
            <Text style={styles.subHeading}>What is an Inverted Hammer Candlestick Pattern?</Text>
            <Text style={styles.text}>The Inverted Hammer is a bullish reversal candlestick pattern that forms after a downtrend. It suggests that the selling pressure may be losing strength and buyers are preparing to take control, potentially reversing the price trend upward.</Text>
            <Text style={styles.heading}>Inverted Hammer Candlestick</Text>
            <Image source={require('../assets/images/forex2.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.subHeading}>Key Characteristics:</Text>
            <Bullet mode={mode} dot={true} text="Near the bottom of the candlestick range." />
            <Bullet mode={mode} dot={true} text="Long upper shadow: At least twice the size of the body, showing that buyers attempted to push the price higher during the session." />
            <Bullet mode={mode} dot={true} text="Little to no lower shadow: Indicates limited downward movement" />
            <Bullet mode={mode} dot={true} text="Color: Can be either green (bullish) or red (bearish), but a green Inverted Hammer is considered slightly stronger." />
        </View>
    )
}

export const BullishEngulfing = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Bullish Double Candlestick Patterns:</Text>
            <Text style={styles.subHeading}>Bullish Engulfing Candlestick</Text>
            <Text style={styles.text}>The Bullish Engulfing is a two-candlestick bullish reversal pattern that appears after a downtrend. It indicates that buyer momentum has taken over, signaling a potential reversal to the upside.</Text>
            <Text style={styles.heading}>Bullish Engulfing</Text>
            <Image source={require('../assets/images/forex3.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.subHeading}>Key Characteristics:</Text>
            <Bullet mode={mode} heading="1.	First Candle:" text={`\n ○	A small bearish (red) candlestick representing continued selling pressure. \n ○	Closes lower than its opening price.`} />
            <Bullet mode={mode} heading="2.	Second Candle:" text={`\n ○	A larger bullish (green) candlestick that completely engulfs the body of the first candle. \n ○	Opens lower than the first candle's close and closes above the first candle's open.`} />
            <Bullet mode={mode} heading="3.	Trend Context:" text={`\n ○	Must appear after a downtrend or at a support level to be considered valid.`} />
            <Text style={styles.heading}>Example: Bullish Engulfing</Text>
            <Image source={require('../assets/images/forex4.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.subHeading}>Trading Strategy</Text>
            <Bullet mode={mode} dot={true} text="Identify a Bullish Engulfing pattern after a downtrend." />
            <Bullet mode={mode} dot={true} text="Ensure the second candle fully engulfs the first candle's body." />
            <Bullet mode={mode} dot={true} text="Wait for the next candle to close above the engulfing pattern's high." />
            <Bullet mode={mode} dot={true} text="Enter a buy order above the high of the second candle." />
            <Bullet mode={mode} dot={true} text="Place a stop loss below the low of the second candle." />
            <Bullet mode={mode} dot={true} text="Set a profit target based on resistance levels or a risk-reward ratio." />
            <Bullet mode={mode} dot={true} text="Confirm with volume or indicators like RSI or MACD." />
        </View>
    )
}

export const PiercingLine = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Piercing Line</Text>
            <Text style={styles.text}>The Piercing Line is a bullish reversal candlestick pattern that appears after a downtrend. It signals a potential shift from selling pressure to buying interest, suggesting a possible upward reversal. {'\n \n'} A piercing candlestick consists of two candles, where the first candle is a long red/bearish candle, followed by a long green/bullish candle that opens below the previous day’s low. The green candle then closes above the midpoint of the previous day’s red candle, piercing it.</Text>
            <Image source={require('../assets/images/forex5.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>Trading Strategy</Text>
            <Bullet mode={mode} dot={true} heading="Identify the pattern during a downtrend." />
            <Bullet mode={mode} dot={true} heading="Confirm the second candle closes above the midpoint of the first candle." />
            <Bullet mode={mode} dot={true} heading="Wait for a confirmation candle to close higher than the Piercing Line pattern." />
            <Bullet mode={mode} dot={true} heading="Enter a buy order above the second candle's high." />
            <Bullet mode={mode} dot={true} heading="Enter a buy order above the second candle's high." />
            <Text style={styles.subHeading}>Three-Candlestick Patterns:</Text>
        </View>
    )
}

export const MorningStar = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={[styles.heading, { paddingLeft: '5%' }]}>Morning Star</Text>
            <Text style={styles.text}>A Morning Star is a three-candlestick bullish reversal pattern that forms after a downtrend, signaling a potential reversal to the upside. It consists . {'\n'}
                1.	A long bearish candle. {'\n'}
                2.	A small indecisive candle (spinning top or doji).{'\n'}
                3.	A long bullish candle closing above the midpoint of the first candle.
            </Text>
            <Text style={styles.heading}>Morning Star</Text>
            <Image source={require('../assets/images/forex6.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>Psychology Behind the Morning Star</Text>
            <Bullet mode={mode} dot={true} text="The first bearish candle shows strong selling pressure." />
            <Bullet mode={mode} dot={true} text="The second indecisive candle indicates a loss of momentum by the bears." />
            <Bullet mode={mode} dot={true} text="The third bullish candle confirms buyers have taken control, suggesting a reversal." />
            <Text style={styles.subHeading}>Morning Star Trading Strategy</Text>
            <Bullet mode={mode} dot={true} text="Identify the pattern at the end of a downtrend." />
            <Bullet mode={mode} dot={true} text="Wait for the third candle to close above the midpoint of the first candle." />
            <Bullet mode={mode} dot={true} text="Place a buy order above the third candle's high." />
            <Bullet mode={mode} dot={true} text="Set a stop loss below the low of the second candle." />
            <Bullet mode={mode} dot={true} text="Take profit at the next resistance or use a 1:2 risk-reward ratio" />
        </View>
    )
}

export const ThreeWhiteSoldier = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Three White Soldier</Text>
            <Text style={styles.text}>The Three White Soldiers is a bullish reversal pattern consisting of three consecutive long bullish candles. It appears after a downtrend or consolidation, signaling a strong shift from bearish to bullish sentiment.</Text>
            <Text style={styles.heading}>Three White Soldier</Text>
            <Image source={require('../assets/images/forex7.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.subHeading}>Psychology Behind Three White Soldiers:</Text>
            <Bullet mode={mode} dot={true} text="The first candle shows buyers stepping in after a downtrend." />
            <Bullet mode={mode} dot={true} text="The second candle confirms the momentum shift as buyers dominate." />
            <Bullet mode={mode} dot={true} text="The third candle reinforces the bullish trend, signaling strong upward potential." />
            <Text style={styles.subHeading}>Three White Soldiers Trading Strategy:</Text>
            <Bullet mode={mode} dot={true} text="Identify the pattern after a downtrend or near a support level." />
            <Bullet mode={mode} dot={true} text="Wait for the third candle to close for confirmation of the pattern." />
            <Bullet mode={mode} dot={true} text="Enter a buy order above the third candle's high." />
            <Bullet mode={mode} dot={true} text="Place a stop loss below the low of the first candle." />
        </View>
    )
}

export const BullishHarami = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.subHeading}>Bullish Harami</Text>
            <Text style={styles.text}>A bullish harami candlestick is a price chart formation that signals bullish trend reversals. A bullish harami candlestick comprises two candlesticks including a long bearish candlestick and a short bullish candlestick. The name ‘harami’ traces its origin to the Japanese language where ‘harami’ means ‘pregnant.</Text>
            <Text style={styles.heading}>Bullish Harami</Text>
            <Image source={require('../assets/images/forex8.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>First Candle (Bearish):</Text>
            <Bullet mode={mode} dot={true} text="Strong selling pressure, continuation of downtrend." />
            <Bullet mode={mode} dot={true} text="Bears have control, pushing prices lower." />
            <Text style={styles.subHeading}>Second Candle (Small Bullish or Neutral):</Text>
            <Bullet mode={mode} dot={true} text="Forms within the body of the first candle, showing reduced bearish momentum." />
            <Bullet mode={mode} dot={true} text="Indecision between buyers and sellers, bears losing strength." />
        </View>
    )
}


export const SingleBearish = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Bearish Single Candlestick Pattern</Text>
            <Text style={styles.text}>A <Text style={styles.boldText}>bearish single candlestick pattern</Text> is a standalone candlestick that signals potential bearish (downward) momentum in the market. These patterns are formed when the price action suggests a shift from buying pressure to selling pressure, typically indicating a reversal or continuation of a downtrend.</Text>
            <Text style={styles.subHeading}>Marubozu is a candlestick</Text>
            <Text style={styles.text}>The Marubozu is a candlestick pattern that shows the market’s determination to move primarily in one direction without encountering significant opposition from the other side. A Marubozu pattern often forces a conclusion at the high or low of the session.
                The term Marubozu  “close-cropped” or “shaved,” refers to the fact that the candlestick has no upper or lower shadow. A marubozu is a strong indication of a bullish or bearish trend, depending on whether it is a white or black candlestick.
            </Text>
            <Image source={require('../assets/images/forex9.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>How is a Marubozu Candlestick Pattern created?</Text>
            <Text style={styles.text}>A marubozu candle is created in a price chart when the opening price of a stock is equal to the current low or the closing price is equal to the current high. A red marubozu candle is created when opening price and current low are equal. It is called a bearish marubozu</Text>
        </View>
    )
}

export const HanginMan = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.subHeading}>Hanging Man Candlestick Pattern.</Text>
            <Text>The <Text style={styles.boldText}>Hanging Man candlestick pattern</Text> is a bearish reversal pattern used in technical analysis to identify potential market trend reversals from an uptrend to a downtrend. This pattern typically forms at the top of an uptrend and signals the possibility of a shift from bullish to bearish sentiment.</Text>
            <Image source={require('../assets/images/forex12.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>Key Characteristics of a Hanging Man:</Text>
            <Bullet mode={mode} dot={true} heading="Structure:" />
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	A small <Text style={styles.boldText}>real body</Text> located near the top of the candlestick.</Text>
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	A <Text style={styles.boldText}>long lower shadow</Text> (at least twice the size of the real body).</Text>
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	Little to no <Text style={styles.boldText}>upper shadow.</Text></Text>
            <Bullet mode={mode} dot={true} heading="Meaning:" />
            <Text style={[styles.text, { marginLeft: '5%' }]}>The long lower shadow shows that sellers drove the price down significantly during the session, but buyers regained control, pushing the price back near the opening level. Despite the recovery, the pattern suggests weakening bullish momentum.</Text>
            <Text style={styles.subHeading}>Does the Color of the Hanging Man Matter?</Text>
            <Bullet mode={mode} dot={true} heading="The color of the candlestick " text="(green or red) is not critical in recognizing a Hanging Man pattern." />
            <Bullet mode={mode} dot={true} heading="Importance:" text="The pattern’s structure and its position at the top of an uptrend are far more significant." />
            <Bullet mode={mode} dot={true} heading="Additional Insight:" text="A red Hanging Man may be a slightly stronger bearish signal than a green one, as it indicates the price closed below the opening level." />
            <Text style={styles.text}>In summary, the Hanging Man pattern serves as a warning sign of a potential bearish reversal, but traders should wait for confirmation (e.g., a bearish candlestick following the Hanging Man) before making trading decisions.</Text>
        </View>
    )
}

export const ShootingStar = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Shooting Star Candlestick</Text>
            <Text style={styles.text}>A <Text style={styles.boldText}>Shooting Star Candlestick</Text> is a price chart pattern that forms when a security's price rises after the market opens but then falls significantly, closing near its opening price by the end of the session. This pattern is characterized by:</Text>
            <Image source={require('../assets/images/forex10.png')} style={styles.image} resizeMode="contain" />
            <Bullet mode={mode} dot={true} heading="A small real body " text="near the lower end of the candlestick" />
            <Bullet mode={mode} dot={true} heading="A long upper wick " text="or shadow, indicating a price surge and strong buying pressure during the session." />
            <Bullet mode={mode} dot={true} heading="A short or no lower wick," text="showing minimal downward movement before closing." />
            <Text style={styles.text}>For a candlestick to qualify as a shooting star, the <Text style={styles.boldText}>upper wick must be at least twice the size of the real body.</Text> The structure represents a shift in market sentiment, where sellers gain control, driving the price down toward the close.</Text>
            <Text style={styles.subHeading}>What Does a Red Shooting Star Indicate?</Text>
            <Text style={styles.text}>A <Text style={styles.boldText}>red shooting star</Text> forms when the closing price is <Text style={styles.boldText}>below the opening price,</Text> represented by a red body.</Text>
            <Bullet mode={mode} dot={true} heading="Significance:" text="This pattern is a strong bearish signal, as it shows the price was pushed down sharply by sellers." />
            <Bullet mode={mode} dot={true} heading="Implication:" text=": It is a more reliable indicator of an upcoming downward trend compared to a green shooting star." />
            <Image source={require('../assets/images/forex11.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>What Does a Green Shooting Star Indicate?</Text>
            <Text style={styles.text}>A <Text style={styles.boldText}>green shooting star</Text> occurs when the closing price is <Text style={styles.boldText}>above the opening price,</Text> represented by a green body.</Text>
            <Bullet mode={mode} dot={true} heading="Significance:" text="While the price ends slightly higher than the opening, the small range between the opening and closing prices shows limited bullish strength." />
            <Bullet mode={mode} dot={true} heading="Implication:" text="Green shooting stars still suggest a bearish reversal but are considered less strong compared to red shooting stars." />
        </View>
    )
}

export const GravestoneDoji = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Gravestone Doji</Text>
            <Text style={styles.text}>The <Text style={styles.boldText}> Gravestone Doji</Text> is a bearish candlestick pattern used in technical analysis to identify potential trend reversals. This pattern forms when the <Text style={styles.boldText}>opening price</Text> and <Text style={styles.boldText}>closing price</Text> of an asset are equal, occurring at the <Text style={styles.boldText}>lowest point</Text> of the session. The candlestick has a <Text style={styles.boldText}>long upper shadow</Text> but no lower shadow, resembling a gravestone.</Text>
            <Image source={require('../assets/images/forex12.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>What Does a Gravestone Doji Mean?</Text>
            <Bullet mode={mode} dot={true} heading="Meaning:" />
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	The opening and closing prices are at the bottom of the candlestick.</Text>
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	<Text style={styles.boldText}>A long upper shadow</Text> indicates the price rose significantly during the session but then fell back to the opening level.</Text>
            <Bullet mode={mode} dot={true} heading="Significance:" />
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	It often forms after an uptrend and signals that the buying pressure is weakening, with sellers regaining control.</Text>
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	This pattern can indicate a <Text style={styles.boldText}>potential bearish reversal</Text> in the market.</Text>
            <Text style={styles.subHeading}>What Does Red Gravestone Doji?</Text>
            <Text style={styles.text}>A <Text style={styles.boldText}>Red Gravestone Doji</Text> is a variation of the Gravestone Doji pattern frequently seen in technical analysis.</Text>
            <Bullet mode={mode} dot={true} heading="Characteristics:" />
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	The <Text style={styles.boldText}>long upper shadow</Text> is at least twice the size of the candlestick’s tiny body.</Text>
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	The small body is positioned near the lower end, creating the appearance of a gravestone.</Text>
            <Bullet mode={mode} dot={true} heading="Implications:" />
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	The red body indicates that the closing price was slightly below the opening price, reinforcing bearish sentiment.</Text>
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	This pattern is often used to predict trend reversals or confirm the weakening of an existing bullish trend.</Text>
            <Text style={styles.text}>In summary, the <Text style={styles.boldText}>Gravestone Doji</Text> is a warning sign of potential downward movement in prices, especially when confirmed by subsequent bearish candlesticks or other technical indicators.</Text>
        </View>
    )
}

export const DoubleDoji = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Double Candlestick Pattern</Text>
            <Text style={styles.subHeading}>Bearish Engulfing Candlestick: </Text>
            <Text style={styles.text}>The Bearish Engulfing Candlestick is a technical chart pattern that signals a potential reversal of an existing uptrend. It forms when a small bullish candlestick is followed by a larger bearish candlestick that completely engulfs the prior candlestick, including its shadows. </Text>
            <Image source={require('../assets/images/forex14.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.text}>This pattern indicates that sellers (bears) have overtaken buyers (bulls), suggesting the likelihood of a downward price movement.</Text>
            <Text style={[styles.boldText, { marginTop: '5%', width: '100%' }]}>Key Characteristics of the Bearish Engulfing Pattern</Text>
            <Text style={styles.text}>1. Formation:</Text>
            <Text style={styles.text}>○	The pattern consists of two candlesticks:</Text>
            <Text style={[styles.text, { marginLeft: '5%' }]}>■	The first candlestick is smaller and bullish (green/white), representing the continuation of the uptrend. {'\n\n'} ■	The second candlestick is larger and bearish (red/black), completely engulfing the first candlestick, including its shadows.</Text>
            <Text style={styles.text}>1. Color: {'\n'} ○	The first candlestick is green or white, showing a bullish sentiment. {'\n\n'} ○	The second candlestick is red or black, indicating bearish dominance.</Text>
            <Text style={styles.text}>3. Size: {'\n'} ○	The second candlestick is significantly larger than the first, highlighting the strong selling pressure.</Text>
            <Text style={styles.text}>4. Trend: {'\n'}○	The pattern appears during an uptrend, serving as a signal that the market may reverse and move downward.</Text>
            <Text style={styles.text}>5.	Volume: {'\n'} ○	A high trading volume often accompanies the pattern, indicating strong conviction from traders and enhancing its reliability.</Text>
            <Text style={styles.text}>6.	Confirmation:{'\n'}○	Traders typically use additional technical analysis tools like trendlines, moving averages, support and resistance levels, or indicators like RSI to confirm the pattern's validity.</Text>
            <Text style={[styles.boldText, { width: '100%', marginTop: '5%' }]}>Implications of the Bearish Engulfing Pattern</Text>
            <Bullet mode={mode} dot={true} text="The Bearish Engulfing Candlestick is a bearish reversal signal that suggests sellers are gaining control, increasing the probability of a price decline." />
            <Bullet mode={mode} dot={true} text="It helps traders identify potential trend reversals, allowing them to adjust their strategies and seize new market opportunities." />
        </View>
    )
}

export const EveningStar = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Triple Candlestick Pattern</Text>
            <Text style={styles.subHeading}>Evening Star Pattern: </Text>
            <Text style={styles.text}>The <Text style={styles.boldText}>Evening Star pattern</Text> is a <Text style={styles.boldText}>bearish reversal candlestick pattern</Text> that signals a shift from bullish to bearish momentum during an uptrend. Although it does not occur frequently, it is considered a <Text style={styles.boldText}>highly reliable indicator</Text> of an impending trend reversal.</Text>
            <Image source={require('../assets/images/forex15.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>Structure of the Evening Star Pattern</Text>
            <Text style={styles.text}>The pattern is made up of <Text style={styles.boldText}>three candlesticks:</Text></Text>
            <Text style={[styles.boldText, { width: '100%', marginTop: '5%' }]}>1. First Candlestick (Bullish):</Text>
            <Text style={styles.text}>○	A long bullish candle forms as the price continues to rise in an uptrend.</Text>
            <Text style={styles.text}>○	This reflects strong buying momentum and market confidence.</Text>
            <Text style={[styles.boldText, { width: '100%', marginTop: '5%' }]}>2.	Second Candlestick (Indecision):</Text>
            <Text style={styles.text}>○	A smaller candle, such as a Doji or spinning top, forms after a gap up. {'\n\n'} ○	This indicates <Text style={styles.boldText}>indecision</Text> in the market as bulls lose momentum and selling pressure starts to emerge.</Text>
            <Text style={[styles.boldText, { width: '100%', marginTop: '5%' }]}>3.	Third Candlestick (Bearish):</Text>
            <Text style={styles.text}>○	A long bearish candle forms after a gap down. {'\n\n'} ○	This confirms that bears have taken control, signaling a potential trend reversal.</Text>
            <Text style={[styles.boldText, { width: '100%', marginTop: '5%' }]}>Psychology Behind the Pattern</Text>
            <Text style={styles.text}>●	The bullish sentiment in the market pushes prices to higher highs, leading to the formation of the first candlestick. {'\n\n'}●	The second candlestick represents a slowdown in bullish momentum as traders begin to take profits. {'\n\n'}●	The third candlestick shows that selling pressure has intensified, confirming that the bears have gained control and the uptrend is likely to reverse.</Text>
            <Text style={styles.subHeading}>When Do Evening Star Patterns Occur?</Text>
            <Text style={styles.text}>The <Text style={styles.boldText}>Evening Star pattern</Text> typically forms at the <Text style={styles.boldText}>peak of an uptrend,</Text> where prices have been making <Text style={styles.boldText}>higher swing lows and higher swing highs.</Text> Its appearance indicates that the upward momentum has weakened and a <Text style={styles.boldText}>downtrend</Text> may follow.</Text>
            <Text style={[styles.boldText, { width: '100%', marginTop: '5%' }]}>Key Points to Remember</Text>
            <Bullet mode={mode} dot={true} heading="Reliability:" text="The Evening Star is a strong bearish reversal pattern when combined with other technical indicators like resistance levels, RSI, or moving averages." />
            <Bullet mode={mode} dot={true} heading="Confirmation:" text="Look for additional confirmation through increased volume on the third bearish candle or other bearish signals." />
            <Bullet mode={mode} dot={true} heading="Application:" text="The pattern is most effective in identifying potential selling opportunities at the top of an uptrend." />
            <Text style={styles.text}>By recognizing the Evening Star, traders can anticipate <Text style={styles.boldText}>trend reversals</Text> and adjust their strategies accordingly.</Text>
        </View>
    )
}

export const TripleDoji = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={[styles.boldText, { width: '100%', marginTop: '5%' }]}>Three Black Crows Candlestick Pattern: The Three Black Crows candlestick pattern is a bearish reversal pattern that signals a strong shift in market sentiment from bullish to bearish. This pattern typically forms after an uptrend, indicating the start of a potential downtrend.</Text>
            <Image source={require('../assets/images/forex16.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>Characteristics of the Three Black Crows Pattern</Text>
            <Text style={[styles.boldText, { width: '100%', marginTop: '5%' }]}>1. Formation:</Text>
            <Text style={[styles.boldText, { width: '100%', marginTop: '5%' }]}>○	The pattern consists of three consecutive bearish candlesticks with long bodies. {'\n\n'} ○	Each candle opens near the previous candle's high and closes near its low, showing consistent selling pressure.</Text>
            <Text style={[styles.boldText, { width: '100%', marginTop: '5%' }]}>2.	Market Sentiment:</Text>
            <Text style={[styles.boldText, { width: '100%', marginTop: '5%' }]}>○	The pattern reflects a gradual loss of confidence among bulls, while bears steadily gain control. {'\n\n'} ○	The downward movement in price demonstrates growing bearish momentum.</Text>
            <Text style={[styles.boldText, { width: '100%', marginTop: '5%' }]}>3.	Consistency:</Text>
            <Text style={[styles.boldText, { width: '100%', marginTop: '5%' }]}>○	Each candle progressively makes lower highs and lower lows, confirming the reversal. {'\n\n'} Is the Three Black Crows a Triple Candlestick Pattern? {'\n\n'} Yes, the Three Black Crows is a classic triple candlestick pattern.</Text>
            <Text style={[styles.boldText, { width: '100%', marginTop: '5%' }]}>●	It comprises three distinct candles that together signal a bearish trend reversal. {'\n\n'} ●	The consistency in their structure (lower highs and lows) reinforces their reliability as an indicator of a market downturn.</Text>
            <Text style={[styles.boldText, { width: '100%', marginTop: '5%' }]}>Key Points to Consider {'\n\n'}●	Reliability: The pattern is considered a strong bearish signal, especially when it occurs after a prolonged uptrend.{'\n\n'}
                ●	Volume Confirmation: Higher trading volume during the formation of the three candles strengthens the signal.{'\n\n'}
                ●	Additional Indicators: Traders often pair this pattern with other technical tools, such as resistance levels, moving averages, or RSI, to confirm the trend reversal.
            </Text>
            <Text style={[styles.boldText, { width: '100%', marginTop: '5%' }]}>The Three Black Crows pattern is a critical signal for traders, helping them identify opportunities to adjust their positions in anticipation of a market decline.</Text>
            <Text style={styles.text}>The Bearish Abandoned Baby is a rare yet potent three-candlestick pattern that signals a potential reversal from an uptrend to a downtrend. Its distinctive formation and the psychology it represents make it a valuable tool for traders aiming to anticipate market shifts.</Text>
            <Image source={require('../assets/images/forex17.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.text}>Formation of the Bearish Abandoned Baby Pattern:</Text>
            <Text style={styles.text}>1.	First Candlestick (Bullish): {'\n\n'}
                ○	A long bullish candle emerges, indicating strong upward momentum.
            </Text>
            <Text style={styles.text}>2.	Second Candlestick (Doji): {'\n\n'}
                ○	A Doji forms after a gap up, where the opening and closing prices are nearly identical, reflecting market indecision.
            </Text>
            <Text style={styles.text}>3.	Third Candlestick (Bearish): {'\n\n'}
                ○	A long bearish candle appears after a gap down, closing well into the body of the first candle, signifying a shift to selling pressure.
            </Text>
            <Text style={styles.text}>Key Characteristics: {'\n\n'}
                ●	Gaps: The pattern features two gaps: the first between the bullish candle and the Doji, and the second between the Doji and the bearish candle. These gaps underscore the abrupt transition from bullishness to bearishness. {'\n\n'}
                ●	Doji's Position: The Doji is "abandoned," sitting above the gaps, highlighting a moment of indecision before the market reverses direction.
            </Text>
            <Text style={styles.text}>Psychological Interpretation:{'\n\n'}
                ●	Bullish Control: The initial bullish candle reflects strong buying interest and market optimism.{'\n\n'}
                ●	Indecision: The subsequent Doji indicates hesitation, as the forces of supply and demand reach equilibrium.{'\n\n'}
                ●	Bearish Takeover: The final bearish candle demonstrates that sellers have seized control, leading to a potential downward trend.
            </Text>
            <Text style={styles.text}>Trading Considerations:{'\n\n'}
                ●	Rarity: Due to its specific formation requirements, the Bearish Abandoned Baby pattern is uncommon, enhancing its significance when it does appear.{'\n\n'}
                ●	Confirmation: Traders often seek additional validation, such as increased trading volume during the bearish candle or corroborating signals from other technical indicators, before making trading decisions.{'\n\n'}
                By recognizing the Bearish Abandoned Baby pattern, traders can gain insights into potential market reversals and adjust their strategies accordingly.
            </Text>
        </View>
    )
}

export const HeadnShoulder = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Head and Shoulders pattern</Text>
            <Text style={styles.subHeading}>What is Head and Shoulders pattern?</Text>
            <Text style={styles.text}>The head and shoulders pattern is a prominent formation in technical analysis, indicating a potential reversal in market trends. It typically signals a transition from a bullish to a bearish trend, making it a crucial tool for traders.</Text>
            <Image source={require('../assets/images/forex18.png')} style={styles.image} resizeMode="contain" />
            <Text style={[styles.boldText, { width: '100%', marginTop: '5%' }]}>Components of the Pattern</Text>
            <Text style={styles.text}>The head and shoulders pattern consists of four main components: {'\n\n'}1.	Left Shoulder: This is the initial peak that forms after a significant bullish trend, followed by a decline to create a trough.{'\n\n'}
                2.	Head: The price rises again to form a higher peak than the left shoulder, followed by another decline.{'\n\n'}
                3.	Right Shoulder: The price rises again but only reaches the height of the left shoulder before declining once more.{'\n\n'}
                4.	Neckline: This is drawn by connecting the troughs formed after the left shoulder and head. It can be horizontal, ascending, or descending
            </Text>
            <Text style={[styles.boldText, { width: '100%', marginTop: '5%' }]}>Types of Head and Shoulders Patterns</Text>
            <Text style={styles.text}>There are two main types of head and shoulders patterns:{'\n\n'}
                1.	Head and Shoulders Top: This occurs at market tops and indicates a bearish reversal. It typically completes within weeks.{'\n\n'}
                2.	Inverse Head and Shoulders: This formation occurs at market bottoms, suggesting a bullish reversal. It may take longer to complete, sometimes extending over months
            </Text>
        </View>
    )
}

export const DoubleTopChart = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={[styles.heading]}>Double Top chart pattern</Text>
            <Text style={styles.text}>The double top pattern is a significant bearish reversal formation in technical analysis, typically indicating that an asset's price may decline after reaching two peaks at approximately the same level. This pattern is crucial for traders looking to identify potential trend reversals.</Text>
            <Image source={require('../assets/images/forex19.png')} style={styles.image} resizeMode="contain" />
            <Text style={[styles.boldText, { width: "100%", marginTop: '5%' }]}>Characteristics of the Double Top Pattern</Text>
            <Text style={styles.text}>1.	Formation: The pattern consists of two distinct peaks (or tops) that are roughly equal in height, separated by a trough (the lowest point between the two peaks). The formation resembles the letter "M".{'\n\n'}
                2.	Trend Preceding the Pattern: A clear uptrend precedes the double top, indicating that the asset has been experiencing higher highs and higher lows.{'\n\n'}
                3.	Neckline: The trough between the two peaks is connected to form a neckline, which serves as a support level. The pattern is confirmed when the price breaks below this neckline.
            </Text>
            <Text style={[styles.boldText, { width: "100%", marginTop: '5%' }]}>Double Bottom</Text>
            <Text style={styles.text}>The double bottom pattern is a significant bullish reversal formation in technical analysis, indicating a potential change in trend from a downtrend to an uptrend. This pattern is characterized by two distinct lows at approximately the same price level, separated by a moderate peak, resembling the letter "W".</Text>
            <Image source={require('../assets/images/forex20.png')} style={styles.image} resizeMode="contain" />
            <Text style={[styles.boldText, { width: "100%", marginTop: '5%' }]}>Key Characteristics</Text>
            <Text style={styles.text}>1.	Formation: The double bottom consists of two troughs (lows) that are roughly equal, with a peak (intermediate high) between them. The formation signals that the price has tested a support level twice before rebounding.{'\n\n'}
                2.	Trend Preceding the Pattern: This pattern typically follows a downtrend, suggesting that sellers have lost control and buyers are beginning to take over.{'\n\n'}
                3.	Neckline: The peak between the two lows forms the neckline. A breakout above this neckline confirms the pattern and indicates potential upward movement.
            </Text>
            <Text style={[styles.boldText, { width: "100%", marginTop: '5%' }]}>Cup and Handle Chart Pattern</Text>
            <Text style={styles.text}>The cup and handle pattern is a well-known bullish continuation formation in technical analysis, indicating a period of consolidation followed by a potential breakout to higher prices. This pattern resembles the shape of a teacup, consisting of two main components: the cup and the handle.</Text>
            <Image source={require('../assets/images/forex21.png')} style={styles.image} resizeMode="contain" />
            <Text style={[styles.boldText, { width: "100%", marginTop: '5%' }]}>Components of the Cup and Handle Pattern</Text>
            <Text style={styles.text}>1. Cup:</Text>
            <Bullet mode={mode} dot={true} text="The cup forms after a downtrend and typically has a rounded bottom, resembling a U shape." />
            <Bullet mode={mode} dot={true} text="Ideal cups should have equal highs on both sides, but variations can occur." />
            <Bullet mode={mode} dot={true} text="The depth of the cup is generally between 10% to 30% of the total height of the pattern126." />
            <Text style={styles.text}>2. Handle:</Text>
            <Bullet mode={mode} dot={true} text="Following the formation of the cup, a smaller pullback occurs, creating the handle." />
            <Bullet mode={mode} dot={true} text="The handle should not drop below the midpoint of the cup and ideally stays within the upper third of the cup12." />
            <Bullet mode={mode} dot={true} text="This part usually lasts from 1 to 4 weeks" />
            <Text style={[styles.boldText, { width: "100%", marginTop: '5%' }]}>Ascending Triangle</Text>
            <Text style={styles.text}>The ascending triangle is a bullish chart pattern commonly observed in technical analysis, characterized by a series of higher lows and a horizontal resistance level. This pattern typically indicates that the price is consolidating before a potential breakout to the upside.</Text>
            <Image source={require('../assets/images/forex22.png')} style={styles.image} resizeMode="contain" />
            <Text style={[styles.boldText, { width: "100%", marginTop: '5%' }]}>Key Features of the Ascending Triangle</Text>
            <Text style={styles.text}>1. Formation:</Text>
            <Bullet mode={mode} dot={true} text="The pattern consists of two trendlines:A " />
            <Bullet mode={mode} dot={true} text="This creates a triangular shape where the price oscillates between these two lines." />
            <Text style={styles.text}>2. Bullish Bias:</Text>
            <Bullet mode={mode} dot={true} text="The ascending triangle is generally considered a continuation pattern, suggesting that the price will continue in the direction of the prevailing trend (upward) after a breakout occurs123." />
            <Text style={styles.text}>3. Volume Considerations:</Text>
            <Bullet mode={mode} dot={true} text="As the pattern develops, trading volume often decreases, but a breakout is typically accompanied by an increase in volume, signifying strong buying interes" />
            <Text style={[styles.boldText, { width: "100%", marginTop: '5%' }]}>Descending triangle</Text>
            <Text style={styles.text}>The descending triangle is a bearish chart pattern commonly used in technical analysis. It typically appears during a downtrend and indicates a potential continuation of that trend. This pattern is characterized by a series of lower highs and a horizontal support level.</Text>
            <Image source={require('../assets/images/forex23.png')} style={styles.image} resizeMode="contain" />
            <Text style={[styles.boldText, { width: "100%", marginTop: '5%' }]}>Key Features of the Descending Triangle</Text>
            <Text style={styles.text}>1. Formation:</Text>
            <Bullet mode={mode} dot={true} text="The pattern consists of two trendlines:A " />
            <Bullet mode={mode} dot={true} text="This creates a triangular shape that narrows over time, reflecting increasing selling pressure." />
            <Text style={styles.text}>2. Market Context:</Text>
            <Bullet mode={mode} dot={true} text="The descending triangle often forms in a downtrend, signaling that sellers are gaining control and pushing prices lower." />
            <Bullet mode={mode} dot={true} text="It can also appear at the end of an uptrend, indicating a potential reversal." />
            <Text style={styles.text}>3. Volume Trend:</Text>
            <Bullet mode={mode} dot={true} text="Volume typically decreases as the pattern develops, indicating waning buying interest." />
            <Bullet mode={mode} dot={true} text="A significant increase in volume during the breakout below the support level confirms the bearish signal" />
        </View>
    )
}


export const BearishHarami = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Bearish Harami</Text>
            <Text style={styles.subHeading}>What is a Bearish Harami Pattern?</Text>
            <Text style={styles.text}>A Bearish Harami candlestick forms when a large bullish candle appears on Day 1, followed by a smaller bearish candle on Day 2. The key feature of the bearish Harami is that the price gaps down on Day 2 and fails to rise back to the close of Day 1. This pattern indicates uncertainty regarding the continuation of the ongoing trend.</Text>
            <Text style={styles.subHeading}>Formation of Bullish Harami:</Text>
            <Bullet mode={mode} heading="1. Day1:" text=" A large bearish (red) candle appears, indicating a continuation of the downtrend." />
            <Bullet mode={mode} heading="2. Day2:" text=" A smaller bearish (red) candle forms within the body of the first day's candle. This smaller candle should ideally gap up, and the price does not fall back to the closing level of the first candle." />
            <Bullet mode={mode} heading="3." text=" This pattern suggests that despite the ongoing downtrend, buying pressure is beginning to form, and a reversal may be imminent." />
        </View>
    )
}

export const TweezerTop = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Tweezer Top</Text>
            <Text style={styles.text}>The Tweezer Top is a bearish reversal candlestick pattern that forms at the end of an <Text style={styles.boldText}>uptrend</Text>, signaling a potential shift to a downtrend.</Text>
            <Image source={require('../assets/images/forex25.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.text}>
                This pattern consists of two candlesticks:{'\n\n'}
                1.	The first candlestick is <Text style={styles.boldText}>bullish</Text>, indicating the continuation of the uptrend.{'\n'}
                2.	The second candlestick is <Text style={styles.boldText}>bearish</Text>, and both candlesticks typically have similar or nearly identical heights.{'\n\n'}
                The <Text style={styles.boldText}>Tweezer Top</Text> forms when:
            </Text>
            <Bullet mode={mode} dot={true} text="The prior trend is an uptrend, and the first candle appears to be in line with the continuation of that trend." />
            <Bullet mode={mode} dot={true} text="On the second day, a bearish candlestick forms, but its high is almost identical to the high of the first candlestick, creating a resistance level." />
            <Bullet mode={mode} dot={true} text="This suggests that the bulls (buyers) tried to push prices higher, but they were unsuccessful. The inability of the bulls to drive the price higher indicates that the market is losing upward momentum, and sellers are beginning to take control." />
            <Text style={styles.text}>Traders often interpret the Tweezer Top as a signal that the upward trend may be over and that a bearish reversal could follow. It’s a warning that the resistance level has been reached, and the price may soon start to decline.</Text>
        </View>
    )
}

export const TweezerBottom = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Tweezer Bottom</Text>
            <Text style={styles.subHeading}>What is the Tweezer Bottom pattern?</Text>
            <Text style={styles.text}>The Tweezer Bottom pattern is a <Text style={styles.boldText}>bearish reversal</Text> candlestick pattern that typically appears at the end of an uptrend. It consists of two candlesticks:</Text>
            <Image source={require('../assets/images/forex26.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.text}>
                1.	The first candlestick is <Text style={styles.boldText}>bearish</Text>, indicating that the downtrend is still in place.{'\n'}
                2.	The second candlestick is <Text style={styles.boldText}>bullish</Text>, suggesting a change in market sentiment.{'\n\n'}
                Both candlesticks in the Tweezer Bottom pattern make almost or the same low, indicating that the sellers were unable to push the price lower, and the buyers are starting to regain control. This pattern suggests a potential reversal from the downtrend to an uptrend.
            </Text>
        </View>
    )
}

export const BullishMarubozu = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            flex: height,
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Bullish Marubozu</Text>
            <Text style={styles.text}>The White Marubozu is a single candlestick pattern that forms after a downtrend, signaling a potential bullish reversal.{'\n\n'}
                This candlestick features a long bullish body with no upper or lower shadows, indicating that buyers are in full control, exerting strong upward pressure. This suggests that the market may be on the verge of turning bullish.
            </Text>
            <Image source={require('../assets/images/forex27.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.text}>The <Text style={styles.boldText}>White Marubozu</Text> candlestick pattern is a clear sign of strong buying activity and a possible shift in market sentiment.</Text>
        </View>
    )
}


export const BearishMarubozu = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Bearish Marubozu</Text>
            <Text style={styles.text}>The <Text style={styles.boldText}>Black Marubozu</Text> is a single candlestick pattern that signals a <Text style={styles.boldText}>bearish reversal</Text> after an uptrend. This pattern is characterized by a <Text style={styles.boldText}>long bearish body</Text>, with no <Text style={styles.boldText}>upper or lower shadows</Text>, indicating a strong move to the downside throughout the entire trading session. The absence of shadows suggests that the price opened at the highest point of the session and closed at the lowest point, with consistent selling pressure exerted by the bears during the entire period.</Text>
            <Image source={require('../assets/images/forex28.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.text}>The <Text style={styles.boldText}>Black Marubozu</Text> indicates that the bears are in full control, overpowering the bulls and driving the price lower without any retracement or resistance from buyers. The formation of this candlestick suggests that market sentiment has shifted, and there is potential for further downside movement.{'\n\n'}
                When traders observe the Black Marubozu pattern, especially after an uptrend, it serves as a strong signal to <Text style={styles.boldText}>exercise caution</Text>. Buyers should consider <Text style={styles.boldText}>closing their long positions</Text> or avoiding new buy entries as the market may be on the brink of a bearish reversal. This pattern often signals a change in momentum, where the bullish trend is weakening, and sellers are taking control of the market.{'\n\n'}
                Therefore, the Black Marubozu is a useful indicator for identifying the potential start of a downtrend, making it important for traders to adjust their positions accordingly.
            </Text>
        </View>
    )
}

export const Doji = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Doji</Text>
            <Text style={styles.subHeading}>Doji Candlestick Pattern</Text>
            <Text style={styles.text}>The Doji is a price action candlestick pattern that signals market indecision. It forms when the opening and closing prices of an asset are nearly identical, resulting in a very small or nonexistent real body. This pattern indicates a tug-of-war between buyers (bulls) and sellers (bears), where neither side gains control, leading to a stalemate.</Text>
            <Text style={styles.subHeading}>Appearance</Text>
            <Text style={styles.text}>The Doji resembles a cross or plus sign, characterized by its tiny real body and long upper and lower shadows (wicks). These shadows reflect the high and low prices reached during the trading session, highlighting the intense battle between bulls and bears.</Text>
            <Image source={require('../assets/images/forex29.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.subHeading}>Implications</Text>
            <Text style={styles.text}>The Doji is often interpreted as a potential reversal or continuation signal, depending on its location within the broader trend. For example:{'\n'}
                ●	In an uptrend, a Doji may suggest weakening bullish momentum and a possible trend reversal.{'\n'}
                ●	In a downtrend, it could indicate that selling pressure is fading, potentially leading to a reversal upward.{'\n'}
                Traders often use the Doji in conjunction with other technical indicators or patterns to confirm its significance and make informed trading decisions.
            </Text>
        </View>
    )
}

export const SpinningTop = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Spinning Top</Text>
            <Text style={styles.text}>The Spinning Top is a candlestick pattern that indicates indecision in the market, much like the Doji pattern, but with a slightly different characteristic. It consists of a candlestick with a small real body and relatively long shadows (upper and lower). This pattern signifies that there is a struggle between the bulls and bears, but neither side is able to gain complete control during the trading session.</Text>
            <Image source={require('../assets/images/forex30.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.subHeading}>Key Features of the Spinning Top Candlestick:</Text>
            <Text style={styles.text}>1.	<Text style={styles.boldText}>Small Real Body:</Text> The real body (the area between the open and close prices) is small, indicating that there is little net movement during the session. The market opens and closes near the same level, but there is significant price movement in both directions within the trading period.{'\n\n'}
                2.	<Text style={styles.boldText}>Long Shadows:</Text> The candlestick has long upper and lower shadows, indicating that the price fluctuated significantly during the session before settling close to the opening price.{'\n\n'}
                3.	<Text style={styles.boldText}>Appearance:</Text> The Spinning Top resembles a small body in the middle of long shadows, which looks similar to a top that spins.{'\n'}
            </Text>
            <Text style={styles.subHeading}>Interpretation of the Spinning Top:</Text>
            <Text style={styles.text}>●	<Text style={styles.boldText}>Indecision:</Text> A Spinning Top suggests indecision in the market, meaning that neither the bulls nor the bears were able to control the price action. Both sides exerted pressure, but neither side could secure a strong direction by the end of the trading session.{'\n\n'}
                ●	<Text style={styles.boldText}>Possible Trend Reversal or Continuation:</Text> The Spinning Top can be seen as a potential sign of a reversal or continuation, depending on its position in the context of the overall trend.{'\n\n'}
                {'\t'}○	After a strong uptrend, a Spinning Top may suggest a potential reversal to the downside.{'\n'}
                {'\t'}○	After a strong downtrend, a Spinning Top may indicate a possible reversal to the upside.{'\n'}
                {'\t'}○	If the Spinning Top appears in the middle of a trend, it can indicate a pause or consolidation, with the trend possibly continuing after the pattern.
            </Text>
            <Text style={styles.subHeading}>How to Trade with Spinning Top Candlestick Patterns:</Text>
            <Text style={styles.text}>
                1.	<Text style={styles.boldText}>Confirmation:</Text> Like the Doji, a Spinning Top by itself is not a strong signal for reversal. Traders typically wait for confirmation from the next candlestick or additional indicators before acting on the pattern.
                {'\n\n'} 2.	<Text style={styles.boldText}>Preceding Trend:</Text> The significance of the Spinning Top pattern is enhanced when it occurs after a strong trend. For example, a Spinning Top after an uptrend could indicate the possibility of a bearish reversal, while a Spinning Top after a downtrend could signal a bullish reversal.
                {'\n\n'} 3.	<Text style={styles.boldText}>Support and Resistance:</Text> The pattern can have more weight if it occurs at a significant support or resistance level, indicating that the market is unsure about breaking through these levels.
            </Text>
        </View>
    )
}


export const LongLeggedDoji = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Long-Legged Doji</Text>
            <Text style={styles.subHeading}>What is Long-Legged Doji?</Text>
            <Text style={styles.text}>A Long-Legged Doji is a type of candlestick pattern in technical analysis that indicates market indecision. It forms when a stock, cryptocurrency, or other asset's opening and closing prices are nearly the same, but there are long upper and lower wicks (shadows), showing significant price movement in both directions within the time period.</Text>
            <Image source={require('../assets/images/forex32.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>Key Features of a Long-Legged Doji:</Text>
            <Text style={styles.text}>
                ● Small or nearly equal opening and closing price → Represents indecision.{'\n'}
                ● Long upper and lower shadows (wicks) → Shows high volatility.{'\n'}
                ● Can appear in both uptrends and downtrends → Potential reversal signal.
            </Text>
        </View>
    )
}


export const Highwave = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>High Wave Candlestick</Text>
            <Text style={styles.subHeading}>High Wave Candlestick pattern:</Text>
            <Text style={styles.text}>The <Text style={styles.boldText}>High Wave Candlestick pattern</Text> is a <Text style={styles.boldText}>neutral</Text> or <Text style={styles.boldText}>indecision</Text> pattern that reflects a balance between buying and selling pressure, indicating that neither the bulls nor the bears are in full control. It often appears at key levels of support or resistance, suggesting a potential <Text style={styles.boldText}>reversal</Text> or a <Text style={styles.boldText}>continuation</Text> depending on the context in which it forms.</Text>
            <Image source={require('../assets/images/forex31.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.subHeading}>High Wave Candlestick Pattern Characteristics:</Text>
            <Text style={styles.text}>
                1.	<Text style={styles.boldText}>Long Upper and Lower Shadows:</Text> The most prominent feature of the High Wave candlestick is the long upper shadow and the long lower shadow, which represent significant price movement within the trading session. These long wicks indicate that both the buyers and the sellers were active in trying to push the price in their respective directions, but ultimately, neither side succeeded in gaining control.
                {'\n'} 2.	<Text style={styles.boldText}>Small Real Body:</Text> The real body of the High Wave candle is relatively small, meaning that the opening and closing prices are very close to each other. This small body indicates indecision because the price was pushed significantly higher or lower during the session, but closed near where it opened, showing no clear winner in the battle between bulls and bears.
                {'\n'}3.	<Text style={styles.boldText}>Indecision:</Text> The small body coupled with the long shadows is a classic sign of market indecision. This means that, while there was a strong attempt from both sides to control the price, neither the bulls nor the bears were able to maintain control by the end of the session.
            </Text>
            <Text style={styles.subHeading}>Interpretation of the High Wave Candlestick:</Text>
            <Text style={styles.text}>
                1.	<Text style={styles.boldText}>Market Indecision:</Text> The pattern suggests that there is uncertainty in the market. Both buyers and sellers are equally active, but neither is able to dominate the price action. This leads to a close near the open price, indicating that the market is unsure of which direction to take next.
                {'\n'} 2.	<Text style={styles.boldText}>Support and Resistance:</Text> The High Wave candlestick often forms near support or resistance levels. This indicates that the price may be at a key juncture, where bulls and bears are both attempting to influence the price. The presence of long shadows shows that significant movement occurred, but ultimately, the market could not break through these levels.
                {'\n'} 3.	<Text style={styles.boldText}>Reversal or Continuation:</Text> The High Wave pattern is neutral, so it can signal either a potential reversal or continuation, depending on the context:
                {'\n\n'}  ○	If it forms after an <Text style={styles.boldText}>uptrend</Text>, it could signal a <Text style={styles.boldText}>possible reversal</Text>, as the lack of momentum might suggest that the bulls are losing control.
                {'\n'}  ○	If it forms after a <Text style={styles.boldText}>downtrend</Text>, it could indicate that the downtrend may pause or reverse, signaling indecision before a potential upward move.
                {'\n'}  ○	If the pattern occurs during a period of <Text style={styles.boldText}>sideways movement</Text>, it could simply represent continued indecision and a lack of direction.
            </Text>
        </View>
    )
}


export const FallingThree = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>The Falling Three Methods</Text>
            <Text style={styles.subHeading}>What is The Falling Three Methods?</Text>
            <Text style={styles.text}>The Falling Three Methods is a bullish continuation candlestick pattern that indicates a brief consolidation or pullback in a downtrend before the downtrend resumes. It consists of five candlesticks: a long bearish candlestick followed by three small bullish candlesticks that stay within the range of the first bearish candlestick, and finally, a long bearish candlestick that confirms the continuation of the downtrend.</Text>
            <Image source={require('../assets/images/forex33.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.subHeading}>Key Features of the Falling Three Methods:</Text>
            <Text style={styles.text}>1. <Text style={styles.boldText}>First Candlestick:</Text> A long bearish candlestick, which shows a strong downtrend. This candlestick sets the tone for the pattern, indicating that bears are in control.{'\n\n'}
                2.	<Text style={styles.boldText}>Three Small Bullish Candlesticks:</Text> These three candlesticks are relatively small and should be contained within the range of the first bearish candlestick. They show some upward movement but lack the momentum to reverse the trend. The small size of these candles reflects a period of consolidation or a pause in the downtrend.{'\n\n'}
                3.	<Text style={styles.boldText}>Fifth Candlestick:</Text> A long bearish candlestick that closes lower than the first candlestick. This candlestick confirms the continuation of the downtrend and signals that the bears are resuming control of the market.
            </Text>
            <Text style={styles.subHeading}>Interpretation of the Falling Three Methods:</Text>
            <Text style={styles.text}>
                ●	<Text style={styles.boldText}>Bullish Continuation:</Text> Although it occurs during a downtrend, the Falling Three Methods is a bullish continuation pattern. The market is expected to pause for a brief moment (as shown by the three small bullish candles) before the original downtrend resumes.
                {'\n\n'}●	<Text style={styles.boldText}>Market Pause:</Text> The three small bullish candles represent a temporary consolidation in the market, where the bears lose some of their momentum. This pause does not signal a trend reversal, but rather a breather before the bearish trend resumes.
                {'\n\n'}●	<Text style={styles.boldText}>Psychology:</Text> The pattern reflects that after a strong downtrend (the first bearish candle), there is a brief recovery or counter-trend movement (the small bullish candles), but the bears quickly regain control and push the market lower again, indicating that the downtrend is likely to continue.
            </Text>
            <Text style={styles.subHeading}>How to Trade with the Falling Three Methods:</Text>
            <Text style={styles.text}>
                1.	<Text style={styles.boldText}>Confirmation:</Text> The pattern requires confirmation from the fifth candlestick. The bearish candlestick at the end should close lower than the opening of the first candlestick, indicating that the downtrend is resuming.
                {'\n\n'}2.	<Text style={styles.boldText}>Positioning:</Text> Traders would typically look to enter short positions after the completion of the pattern, especially after the confirmation candle (the fifth candlestick) closes lower than the first bearish candlestick.
                {'\n\n'}3.	<Text style={styles.boldText}>Volume:</Text> Volume can play a significant role in confirming the pattern. A higher volume during the fifth candlestick may suggest stronger bearish momentum and more confirmation that the downtrend is resuming.
                {'\n\n'}4.	<Text style={styles.boldText}>Risk Management:</Text> Because this is a continuation pattern, the risk of the trend reversing is lower than in reversal patterns, but it's still important to set stop-loss levels above the highest point of the three small bullish candles or at a level of previous resistance.
            </Text>
        </View>
    )
}


export const RisingThree = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Rising Three Methods</Text>
            <Text style={styles.subHeading}>What is Rising Three Methods?</Text>
            <Text style={styles.text}>he Rising Three Methods is a bullish continuation candlestick pattern that occurs during an uptrend, signaling a temporary pause or consolidation before the uptrend resumes. This pattern consists of five candlesticks and reflects that despite a brief counter-trend movement, the bulls are still in control and the uptrend is likely to continue.</Text>
            <Image source={require('../assets/images/forex34.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.subHeading}>Key Features of the Rising Three Methods:</Text>
            <Text style={styles.text}>
                1.	<Text style={styles.boldText}>First Candlestick:</Text> A long bullish candlestick that indicates the ongoing uptrend. It shows that the bulls are in control and the market is rising.{'\n'}
                2.	<Text style={styles.boldText}>Three Small Bearish Candlesticks:</Text> These three candlesticks are small and move counter to the prevailing trend. They stay within the range of the first bullish candlestick. This shows a temporary pullback or consolidation, where the bears try to exert some control but fail to reverse the overall uptrend.{'\n'}
                3.	<Text style={styles.boldText}>Fifth Candlestick:</Text> A long bullish candlestick that closes higher than the first candlestick, confirming the resumption of the uptrend. This candlestick shows that the bulls are regaining strength and pushing prices higher once again.
            </Text>
            <Text style={styles.subHeading}>Interpretation of the Rising Three Methods:</Text>
            <Text style={styles.text}>
                ●	<Text style={styles.boldText}>Bullish Continuation:</Text> The Rising Three Methods pattern indicates that the market is likely to continue its upward movement after a brief consolidation or retracement. The presence of three smaller bearish candles signals a temporary counter-trend movement, but the bulls are still in control, as demonstrated by the fifth candlestick.{'\n'}
                ●	<Text style={styles.boldText}>Market Pause:</Text> The three small bearish candles represent a pause in the uptrend, where the market consolidates. This is a period of indecision, but the market is not reversing; instead, it’s gathering momentum for the next leg of the uptrend.{'\n'}
                ●	<Text style={styles.boldText}>Psychology:</Text> The pattern shows that although the bears momentarily take control (during the three small bearish candles), they do not have enough strength to reverse the overall trend. The bulls quickly regain control, as demonstrated by the strong bullish candlestick at the end of the pattern.
            </Text>
            <Text style={styles.subHeading}>How to Trade with the Rising Three Methods:</Text>
            <Text style={styles.text}>
                1.	<Text style={styles.boldText}>Confirmation:</Text> The pattern requires confirmation from the fifth candlestick. The fifth candlestick should be a long bullish candle that closes higher than the first candlestick, signaling that the uptrend is resuming.{'\n'}
                2.	<Text style={styles.boldText}>Positioning:</Text> Traders typically look to enter long positions after the completion of the pattern, particularly after the confirmation candlestick (the fifth candlestick) shows strong upward movement.{'\n'}
                3.	<Text style={styles.boldText}>Volume:</Text> Volume can be important in confirming the pattern. Higher volume on the fifth candlestick can indicate that the bullish momentum is strong and that the uptrend will continue.{'\n'}
                4.	<Text style={styles.boldText}>Risk Management:</Text> Because the Rising Three Methods is a continuation pattern, the risk of trend reversal is relatively low, but it's still important to use stop-loss orders below the lowest point of the three small bearish candles or at a level of previous support.
            </Text>
        </View>
    )
}


export const UpsideTasuki = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Upside Tasuki Gap</Text>
            <Text style={styles.subHeading}>What is Upside Tasuki Gap?</Text>
            <Text style={styles.text}>The pattern you're describing is known as the Rising Window or Bullish Window. It's a bullish continuation candlestick pattern that occurs during an uptrend, signaling that the uptrend is likely to continue despite a brief pullback.</Text>
            <Image source={require('../assets/images/forex35.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>Key Features of the Rising Window (Bullish Window):</Text>
            <Text style={styles.text}>
                1.	<Text style={styles.boldText}>First Candlestick:</Text> A long-bodied bullish candlestick that signifies the strong ongoing uptrend. This candlestick shows that the bulls are in control of the market and the price is moving higher.{'\n'}
                2.	<Text style={styles.boldText}>Second Candlestick:</Text> A second bullish candlestick that opens higher than the first one, creating a gap up. This shows continued buying pressure and indicates that the market is still in an uptrend, as the bulls manage to push prices even higher.{'\n'}
                3.	<Text style={styles.boldText}>Third Candlestick:</Text> A bearish candlestick that closes within the gap formed by the first two bullish candlesticks. Although this candlestick is bearish, it does not close the gap, leaving the gap still visible on the chart. This candlestick shows a brief pullback or correction, but because the gap remains intact, it suggests that the bulls are still in control, and the uptrend will likely continue.
            </Text>
            <Text style={styles.subHeading}>Interpretation of the Rising Window:</Text>
            <Text style={styles.text}>
                ●	<Text style={styles.boldText}>Bullish Continuation:</Text> The Rising Window pattern is seen as a confirmation of the bullish trend. The gap between the first and second candlesticks indicates strong buying momentum, while the bearish third candlestick represents a brief period of selling pressure. However, since the gap is not filled, it suggests that the bullish trend will likely resume after this brief correction.{'\n\n'}
                ●	<Text style={styles.boldText}>Temporary Pause:</Text> The third bearish candlestick is a temporary pause in the uptrend. It shows that the bears have attempted to take control, but they have not been strong enough to close the gap. The gap itself is a key indication that the market is still strongly bullish
            </Text>
        </View>
    )
}

export const DownsideTasuki = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Downside Tasuki Gap</Text>
            <Text style={styles.subHeading}>What is Downside Tasuki Gap?</Text>
            <Text style={styles.text}>The pattern you're describing is known as the <Text style={styles.boldText}>Falling Window or Bearish Window</Text>. It is a <Text style={styles.boldText}>bearish continuation candlestick pattern</Text> that appears during a downtrend, indicating that the downtrend is likely to persist after a brief pause or correction.</Text>
            <Image source={require('../assets/images/forex36.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.subHeading}>Key Features of the Falling Window (Bearish Window):</Text>
            <Text style={styles.text}>
                1.	<Text style={styles.boldText}>First Candlestick:</Text> A long-bodied bearish candlestick that indicates strong selling pressure and the continuation of the downtrend. It reflects the bears being in control and the price moving lower.{'\n\n'}
                2.	<Text style={styles.boldText}>Second Candlestick:</Text> A second bearish candlestick that opens lower than the first one, creating a gap down. This shows that the selling momentum is continuing, and the market remains strongly bearish.{'\n\n'}
                3.	<Text style={styles.boldText}>Third Candlestick:</Text> A bullish candlestick that closes within the gap formed by the first two bearish candlesticks. This candlestick suggests that there is a brief pullback or correction in the downtrend, but since the gap remains unfilled, it indicates that the downtrend will likely continue.
            </Text>
            <Text style={styles.subHeading}>Interpretation of the Falling Window:</Text>
            <Text style={styles.text}>
                ●	<Text style={styles.boldText}>Bearish Continuation:</Text> The Falling Window pattern is a sign of the continuation of the downtrend. The gap between the first and second bearish candlesticks indicates strong selling pressure. The third bullish candlestick shows a temporary reversal or a brief pause in the trend, but the gap remaining open suggests that the bearish trend will likely resume.{'\n\n'}
                ●	<Text style={styles.boldText}>Temporary Reversal:</Text> The third bullish candlestick represents a pullback or retracement in the price, but it does not fill the gap formed by the previous two bearish candles. This reinforces the idea that the selling pressure remains strong and the overall downtrend will continue.
            </Text>
            <Text style={styles.subHeading}>How to Trade with the Falling Window:</Text>
            <Text style={styles.text}>
                1.	<Text style={styles.boldText}>Confirmation:</Text> After the third bullish candlestick, traders should wait for confirmation that the downtrend is continuing. Confirmation may come in the form of a bearish candlestick or an increase in selling volume.{'\n'}
                2.	<Text style={styles.boldText}>Positioning:</Text> Traders may consider entering short positions after the pattern is completed, particularly if the price starts moving lower again after the brief pullback.{'\n'}
                3.	<Text style={styles.boldText}>Stop-Loss Placement:</Text> A common strategy is to place a stop-loss order just above the highest point of the third candlestick (the bullish candle), as this level may act as resistance.{'\n'}
                4.	<Text style={styles.boldText}>Volume:</Text> Higher volume during the gap-down (second candlestick) can strengthen the bearish signal, confirming that the downtrend is likely to continue. If the price resumes lower after the third candlestick, it should ideally be accompanied by higher selling volume.
            </Text>
        </View>
    )
}

export const MatHold = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Mat Hold</Text>
            <Text style={styles.subHeading}>What is Mat Hold Pattern?</Text>
            <Text style={styles.text}>The <Text style={styles.boldText}>Mat Hold pattern</Text> is a continuation candlestick formation that signals the continuation of a prior trend, typically after a brief consolidation or retracement. It can either be <Text style={styles.boldText}>bullish or bearish</Text>, depending on the direction of the trend prior to its formation. Let's break down both the bullish and bearish Mat Hold patterns:</Text>
            <Image source={require('../assets/images/forex37.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.subHeading}>Bullish Mat Hold Pattern:</Text>
            <Text style={styles.text}>
                1.	<Text style={styles.boldText}>First Candlestick (Bullish):</Text> The pattern begins with a large bullish candlestick, indicating strong buying interest and an ongoing uptrend. This first candle sets the tone for the pattern, confirming the continuation of the bullish trend.ٗ{'\n'}
                2.	<Text style={styles.boldText}>Second Candlestick (Gap Up):</Text> After the first large bullish candle, the next candlestick opens higher than the close of the previous candle, creating a gap up. This indicates that the buying pressure is still strong, and there is no immediate selling pressure to reverse the trend.{'\n'}
                3.	<Text style={styles.boldText}>Middle Three Candlesticks (Smaller, Bearish Candles):</Text> These three candles are smaller in size and typically bearish or neutral. They often show slight downward movement, indicating a brief pause or consolidation in the uptrend. The range of these three candles should be contained within the body of the first large bullish candle, suggesting that the uptrend is still intact.{'\n'}
                4.	<Text style={styles.boldText}>Fifth Candlestick (Bullish):</Text> The pattern concludes with another large bullish candle, which closes higher than the previous candle. This signals the continuation of the upward trend, confirming that the market remains bullish.
            </Text>
        </View>
    )
}


export const OnNeck = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>On-Neck Pattern</Text>
            <Text style={styles.subHeading}>What is On-Neck Pattern?</Text>
            <Text style={styles.text}>The <Text style={styles.boldText}>On-Neck Candlestick</Text> Pattern consists of two candlesticks: a large bearish candle followed by a smaller bullish candle. The key feature of the pattern is that the second candlestick <Text style={styles.boldText}>gaps down at the open</Text> but closes at or near the close of the previous candle.{'\n\n'}
                The pattern is named <Text style={styles.boldText}>“On Neck”</Text> because the two closing prices (the close of the first candle and the close of the second) are almost identical or form a <Text style={styles.boldText}>horizontal neckline,</Text> resembling a "neck."{'\n\n'}
                This pattern is considered a <Text style={styles.boldText}>continuation pattern</Text>, suggesting that the downward trend is likely to persist. However, in reality, it only continues the trend about half of the time, and the pattern can sometimes signal a <Text style={styles.boldText}>short-term reversal</Text>.
            </Text>
            <Image source={require('../assets/images/forex38.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.subHeading}>Formation of the On-Neck Pattern:</Text>
            <Text style={styles.text}>
                1.	The market must first be in a <Text style={styles.boldText}>downtrend</Text>.{'\n'}
                2.	The first candlestick is a <Text style={styles.boldText}>long bearish candle</Text> (black or red), indicating strong selling pressure.{'\n'}
                3.	The second candlestick is a <Text style={styles.boldText}>smaller bullish candle</Text> (white or green) that gaps down at the open but closes near the close of the first candlestick. The close of the second candlestick should be almost identical to the low of the first candlestick.{'\n'}
                4.	The <Text style={styles.boldText}>neckline</Text> is formed when the closing prices of both candlesticks are the same or nearly the same, creating a horizontal line.
            </Text>
            <Text style={styles.subHeading}>Implication of the Pattern:</Text>
            <Text style={styles.text}>
                ●	In theory, the On-Neck pattern is seen as a continuation of the downtrend, suggesting that prices will continue to fall.{'\n'}
                ●	In practice, this doesn’t always happen, and the pattern may indicate a potential short-term upward reversal instead.{'\n'}
                ●	To confirm the continuation of the downward trend, traders look for a black candle on the next day to continue the pattern, with a gap between the second and third days.{'\n\n'}
                In summary, the On-Neck pattern indicates a potential continuation of the bearish trend, but its effectiveness may depend on the overall market context and additional indicators for confirmation.
            </Text>
        </View>
    )
}


export const InNeck = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>In-Neck Pattern</Text>
            <Text style={styles.subHeading}>What is In-Neck Pattern (Bearish Continuation)?</Text>
            <Text style={styles.text}>The <Text style={styles.boldText}>In-Neck Pattern</Text> is a bearish continuation candlestick pattern that typically appears in a downtrend. It signals a temporary pause before the price continues to decline. It is considered a weaker bearish continuation pattern compared to others like the On-Neck or Thrusting pattern.</Text>
            <Image source={require('../assets/images/forex39.jpg')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>Characteristics of the In-Neck Pattern:</Text>
            <Text style={styles.text}>
                1. <Text style={styles.boldText}>First Candle (Bearish):</Text> A strong red (bearish) candle that aligns with the prevailing downtrend.{'\n'}
                2. <Text style={styles.boldText}>Second Candle (Bullish, Small Body):</Text> A small green (bullish) candle that opens below the previous candle’s close but closes near or slightly above the prior close.{'\n'}
                3. <Text style={styles.boldText}>Gap Down Open:</Text> The second candle opens lower than the first candle’s close, indicating bearish sentiment.{'\n'}
                4. <Text style={styles.boldText}>Close Near Previous Candle:</Text> The second candle does not cover much of the previous bearish candle, showing weak buying pressure.
            </Text>
        </View>
    )
}
export const ThrustingPattern = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Thrusting Pattern</Text>
            <Text style={styles.subHeading}>What is Thrusting Pattern (Bearish Continuation)?</Text>
            <Text style={styles.text}>The <Text style={styles.boldText}>Thrusting Pattern</Text> is a bearish continuation candlestick pattern that appears in a downtrend, indicating a temporary pause before the price resumes its downward movement. It is stronger than the In-Neck Pattern but weaker than the Piercing Pattern (which signals a reversal).</Text>
            <Image source={require('../assets/images/forex40.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>Characteristics of the Thrusting Pattern</Text>
            <Text style={styles.text}>
                1. <Text style={styles.boldText}>First Candle (Bearish):</Text> A strong red (bearish) candle reflecting dominant selling pressure.{'\n'}
                2. <Text style={styles.boldText}>Second Candle (Bullish, Small Body):</Text> A green (bullish) candle that opens below the previous close but closes within the lower half of the first candle’s body.{'\n'}
                3. <Text style={styles.boldText}>Gap Down Open:</Text> The second candle opens below the first candle’s close, showing continued bearish sentiment.{'\n'}
                4. <Text style={styles.boldText}>Failure to Close Above the Midpoint:</Text> The second candle makes an attempt to recover but fails to cross the 50% level of the first candle’s body, indicating weak buying strength.
            </Text>
        </View>
    )
}

export const SeparatingLine = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Separating Lines</Text>
            <Text style={styles.subHeading}>What is Separating Lines (Bullish & Bearish Continuation)?</Text>
            <Text style={styles.text}>The <Text style={styles.boldText}>Separating Lines pattern</Text> is a continuation candlestick pattern that signals the resumption of the prevailing trend. It can be bullish or bearish, depending on the market trend.</Text>
            <Image source={require('../assets/images/forex41.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>Characteristics</Text>
            <Text style={styles.text}>
                1. <Text style={styles.boldText}>First Candle:</Text> A strong bearish (red) candle, indicating a temporary retracement in an uptrend.{'\n'}
                2. <Text style={styles.boldText}>Second Candle:</Text> A strong bullish (green) candle that opens at the same price as the first candle’s open and continues the upward move.{'\n'}
                3. <Text style={styles.boldText}>No Upper Wick on the Second Candle:</Text> The second candle opens at the same price as the previous candle’s open and closes higher, showing a decisive move by buyers.{'\n'}
            </Text>
        </View>
    )
}

export const SideBySideWhite = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Side-by-Side White Lines</Text>
            <Text style={styles.subHeading}>What is Side-by-Side White Lines (Bullish Continuation)?</Text>
            <Text style={styles.text}>The <Text style={styles.boldText}>Side-by-Side White Lines pattern</Text> is a bullish continuation candlestick pattern that appears in an uptrend. It signals the continuation of the prevailing bullish momentum.</Text>
            <Image source={require('../assets/images/forex42.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>Characteristics</Text>
            <Text style={styles.text}>
                1. <Text style={styles.boldText}>First Candle:</Text> A strong bullish (green/white) candle, confirming the existing uptrend.{'\n\n'}
                2. <Text style={styles.boldText}>Second Candle:</Text>  Another bullish candle that opens near the previous candle’s close and has a similar size.{'\n\n'}
                3. <Text style={styles.boldText}>Third Candle (Optional, but strengthens confirmation):</Text> Another bullish candle, reinforcing the pattern.{'\n\n'}
                4. <Text style={styles.boldText}>All Candles Have Similar Lengths</Text>, indicating steady buying pressure.{'\n'}
            </Text>
        </View>
    )
}

export const SideBySideBlack = (props) => {
    const { mode } = props; // Get mode from props

    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Side-by-Side Black Lines</Text>
            <Text style={styles.subHeading}>What is Side-by-Side Black Lines (Bearish Continuation)?</Text>
            <Text style={styles.text}>The <Text style={styles.boldText}>Side-by-Side Black Lines pattern</Text> is a bearish continuation candlestick pattern that appears in a downtrend, signaling the continuation of selling pressure.</Text>
            <Image source={require('../assets/images/forex43.jpg')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>Characteristics</Text>
            <Text style={styles.text}>
                1. <Text style={styles.boldText}>First Candle:</Text> A strong bearish (black/red) candle, confirming the existing downtrend.{'\n\n'}
                2. <Text style={styles.boldText}>Second Candle:</Text> Another bearish candle that opens near the previous candle’s close and has a similar size.{'\n\n'}
                3. <Text style={styles.boldText}>Third Candle (Optional, but strengthens confirmation):</Text> Another bearish candle, reinforcing the pattern.{'\n\n'}
                4. <Text style={styles.boldText}>All Candles Have Similar Lengths</Text>, showing steady selling pressure.{'\n'}
            </Text>
        </View>
    )
}


export const Definition = (props) => {
    const { mode } = props; // Get mode from props
    const styles = StyleSheet.create({
        container: {
            width: '90%',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? theme.colors.black : theme.colors.white,
        },
        heading: {
            color: theme.colors.green,
            fontSize: 26,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'center',
            width: '100%',
            marginTop: '5%'
        },
        subHeading: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 22,
            fontFamily: 'Gilroy-Bold',
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        text: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            textAlign: 'left',
            width: '100%',
            marginTop: '5%'
        },
        boldText: {
            color: mode === 'dark' ? theme.colors.white : theme.colors.black,
            fontSize: 16,
            fontFamily: 'Gilroy-Bold'
        },
        image: {
            width: "100%",
            height: 200,
            marginTop: '5%',
        }
    });
    return (
        <ScrollView style={{ width: '90%', flex: 1 }} contentContainerStyle={[{ alignItems: 'center' }]} showsVerticalScrollIndicator={false}>
            <Text style={styles.heading}>Candlestick Pattern</Text>
            <Text style={styles.subHeading}>📈 Candlestick Patterns in Trading</Text>
            <Text style={styles.text}><Text style={styles.boldText}>Candlestick patterns are visual representations of price movements</Text> in financial markets, commonly used in stock, forex, and crypto trading. They help traders analyze market sentiment and predict future price movements.</Text>
            <Image source={require('../assets/images/forex2.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.subHeading}>Understanding a Candlestick</Text>
            <Text style={styles.text}>
                Each candlestick represents a specific time period (e.g., 1 minute, 1 hour, 1 day) and consists of:{'\n\n'}
                1. <Text style={styles.boldText}>Body:</Text>The difference between the opening and closing price.{'\n\n'}
                2. <Text style={styles.boldText}>Wicks (Shadows):</Text>The highest and lowest prices during the time period.{'\n\n'}
                3. <Text style={styles.boldText}>Color:</Text> {'\n\t'}🟩 <Text style={styles.boldText}>Green (Bullish)</Text> → Closing price is higher than the opening price. {'\n\t'}🟥 <Text style={styles.boldText}>Red (Bearish)</Text> → Closing price is lower than the opening price.
            </Text>
            <Text style={styles.subHeading}>Types of Candlestick Patterns {'\n\n'}Single Candlestick Patterns</Text>
            <Text style={styles.text}>
                1.<Text style={styles.boldText}> Doji</Text> → Market indecision, possible trend reversal.{'\n'}
                2. <Text style={styles.boldText}>Hammer (Bullish)</Text> → Strong buying pressure after a downtrend.{'\n'}
                3. <Text style={styles.boldText}>Shooting Star (Bearish)</Text> → Strong selling pressure after an uptrend.{'\n'}
                4. <Text style={styles.boldText}>Spinning Top</Text> → Weak momentum, potential trend reversal.
            </Text>
            <Text style={styles.subHeading}>Multiple Candlestick Patterns</Text>
            <Text style={styles.text}>
                <Text style={styles.boldText}>Bullish Patterns (📈 Uptrend)</Text>
                1. <Text style={styles.boldText}>Engulfing (Bullish)</Text> → Green candle completely engulfs previous red candle.{'\n'}
                2. <Text style={styles.boldText}>Morning Star</Text> → Three-candle pattern signaling a reversal from downtrend to uptrend.{'\n'}
                3. <Text style={styles.boldText}>Piercing Line</Text> → Green candle opens lower but closes above half of the previous red candle.{'\n'}
                <Text style={styles.boldText}>Bearish Patterns (📉 Downtrend)</Text>
                1. <Text style={styles.boldText}>Engulfing (Bearish)</Text> → Red candle completely engulfs previous green candle.{'\n'}
                2. <Text style={styles.boldText}>Evening Star</Text> → Three-candle pattern signaling a reversal from uptrend to downtrend.{'\n'}
                3. <Text style={styles.boldText}>Dark Cloud Cover</Text> → Red candle opens higher but closes below half of the previous green candle.
            </Text>
        </ScrollView>
    )
}
