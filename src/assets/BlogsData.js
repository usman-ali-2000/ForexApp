import { Image, StyleSheet, Text, View } from "react-native"
import theme from "../Theme/GlobalTheme"
import Bullet from "../components/Bullet"

export const SingleBullish = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Bullish Single-Candlestick Patterns:</Text>
            <Text style={styles.subHeading}>What is a Hammer Candlestick Pattern?</Text>
            <Text style={styles.text}>A Hammer is a bullish reversal candlestick pattern that forms after a downtrend. It signals that selling pressure is weakening, and buyers may take control, potentially reversing the price direction to the upside.</Text>
            <Text style={styles.heading}>Hammer Candlestick</Text>
            <Image source={require('../assets/images/forex1.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.subHeading}>Key Characteristics:</Text>
            <Bullet dot={true} heading="Small body:" text="Near the top of the candlestick range." />
            <Bullet dot={true} heading="Long lower shadow:" text="At least twice the size of the body, indicating strong rejection of lower prices." />
            <Bullet dot={true} heading="Little to no upper shadow: " text="Shows limited upward movement during the session." />
            <Bullet dot={true} heading="Color:" text="Can be bullish (green) or bearish (red), but a green hammer is slightly stronger as it shows buyers closed near the high." />
            <Text style={styles.subHeading}>Hammers typically appear:</Text>
            <Bullet heading="1. At the bottom of a downtrend:" text={`\n ○	The pattern suggests that the selling pressure has diminished.`} />
            <Bullet text={`○	Buyers stepped in during the session, pushing prices higher after a significant drop.`} />
            <Bullet heading="2.	At key support levels:" text={`\n ○	Near historical price levels where demand has previously been strong.`} />
            <Bullet heading="3.	After large bearish moves:" text={`\n ○	Especially when oversold conditions exist (e.g., RSI is below 30).`} />
            <Text style={styles.subHeading}>What is an Inverted Hammer Candlestick Pattern?</Text>
            <Text style={styles.text}>The Inverted Hammer is a bullish reversal candlestick pattern that forms after a downtrend. It suggests that the selling pressure may be losing strength and buyers are preparing to take control, potentially reversing the price trend upward.</Text>
            <Text style={styles.heading}>Inverted Hammer Candlestick</Text>
            <Image source={require('../assets/images/forex2.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.subHeading}>Key Characteristics:</Text>
            <Bullet dot={true} text="Near the bottom of the candlestick range." />
            <Bullet dot={true} text="Long upper shadow: At least twice the size of the body, showing that buyers attempted to push the price higher during the session." />
            <Bullet dot={true} text="Little to no lower shadow: Indicates limited downward movement" />
            <Bullet dot={true} text="Color: Can be either green (bullish) or red (bearish), but a green Inverted Hammer is considered slightly stronger." />
        </View>
    )
}


export const DoubleBullish = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Bullish Double Candlestick Patterns:</Text>
            <Text style={styles.subHeading}>Bullish Engulfing Candlestick</Text>
            <Text style={styles.text}>The Bullish Engulfing is a two-candlestick bullish reversal pattern that appears after a downtrend. It indicates that buyer momentum has taken over, signaling a potential reversal to the upside.</Text>
            <Text style={styles.heading}>Bullish Engulfing</Text>
            <Image source={require('../assets/images/forex3.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.subHeading}>Key Characteristics:</Text>
            <Bullet heading="1.	First Candle:" text={`\n ○	A small bearish (red) candlestick representing continued selling pressure. \n ○	Closes lower than its opening price.`} />
            <Bullet heading="2.	Second Candle:" text={`\n ○	A larger bullish (green) candlestick that completely engulfs the body of the first candle. \n ○	Opens lower than the first candle's close and closes above the first candle's open.`} />
            <Bullet heading="3.	Trend Context:" text={`\n ○	Must appear after a downtrend or at a support level to be considered valid.`} />
            <Text style={styles.heading}>Example: Bullish Engulfing</Text>
            <Image source={require('../assets/images/forex4.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.subHeading}>Trading Strategy</Text>
            <Bullet dot={true} text="Identify a Bullish Engulfing pattern after a downtrend." />
            <Bullet dot={true} text="Ensure the second candle fully engulfs the first candle's body." />
            <Bullet dot={true} text="Wait for the next candle to close above the engulfing pattern's high." />
            <Bullet dot={true} text="Enter a buy order above the high of the second candle." />
            <Bullet dot={true} text="Place a stop loss below the low of the second candle." />
            <Bullet dot={true} text="Set a profit target based on resistance levels or a risk-reward ratio." />
            <Bullet dot={true} text="Confirm with volume or indicators like RSI or MACD." />
            <Text style={styles.subHeading}>Piercing Line</Text>
            <Text style={styles.text}>The Piercing Line is a bullish reversal candlestick pattern that appears after a downtrend. It signals a potential shift from selling pressure to buying interest, suggesting a possible upward reversal. {'\n \n'} A piercing candlestick consists of two candles, where the first candle is a long red/bearish candle, followed by a long green/bullish candle that opens below the previous day’s low. The green candle then closes above the midpoint of the previous day’s red candle, piercing it.</Text>
            <Image source={require('../assets/images/forex5.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>Trading Strategy</Text>
            <Bullet dot={true} heading="Identify the pattern during a downtrend." />
            <Bullet dot={true} heading="Confirm the second candle closes above the midpoint of the first candle." />
            <Bullet dot={true} heading="Wait for a confirmation candle to close higher than the Piercing Line pattern." />
            <Bullet dot={true} heading="Enter a buy order above the second candle's high." />
            <Bullet dot={true} heading="Enter a buy order above the second candle's high." />
            <Text style={styles.subHeading}>Three-Candlestick Patterns:</Text>
            <Text style={[styles.subHeading, { paddingLeft: '5%' }]}>Morning Star</Text>
            <Text style={styles.text}>A Morning Star is a three-candlestick bullish reversal pattern that forms after a downtrend, signaling a potential reversal to the upside. It consists . {'\n'}
                1.	A long bearish candle. {'\n'}
                2.	A small indecisive candle (spinning top or doji).{'\n'}
                3.	A long bullish candle closing above the midpoint of the first candle.
            </Text>
            <Text style={styles.heading}>Morning Star</Text>
            <Image source={require('../assets/images/forex6.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>Psychology Behind the Morning Star</Text>
            <Bullet dot={true} text="The first bearish candle shows strong selling pressure." />
            <Bullet dot={true} text="The second indecisive candle indicates a loss of momentum by the bears." />
            <Bullet dot={true} text="The third bullish candle confirms buyers have taken control, suggesting a reversal." />
            <Text style={styles.subHeading}>Morning Star Trading Strategy</Text>
            <Bullet dot={true} text="Identify the pattern at the end of a downtrend." />
            <Bullet dot={true} text="Wait for the third candle to close above the midpoint of the first candle." />
            <Bullet dot={true} text="Place a buy order above the third candle's high." />
            <Bullet dot={true} text="Set a stop loss below the low of the second candle." />
            <Bullet dot={true} text="Take profit at the next resistance or use a 1:2 risk-reward ratio" />
            <Text style={styles.subHeading}>Three White Soldier</Text>
            <Text style={styles.text}>The Three White Soldiers is a bullish reversal pattern consisting of three consecutive long bullish candles. It appears after a downtrend or consolidation, signaling a strong shift from bearish to bullish sentiment.</Text>
            <Text style={styles.heading}>Three White Soldier</Text>
            <Image source={require('../assets/images/forex7.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.subHeading}>Psychology Behind Three White Soldiers:</Text>
            <Bullet dot={true} text="The first candle shows buyers stepping in after a downtrend." />
            <Bullet dot={true} text="The second candle confirms the momentum shift as buyers dominate." />
            <Bullet dot={true} text="The third candle reinforces the bullish trend, signaling strong upward potential." />
            <Text style={styles.subHeading}>Three White Soldiers Trading Strategy:</Text>
            <Bullet dot={true} text="Identify the pattern after a downtrend or near a support level." />
            <Bullet dot={true} text="Wait for the third candle to close for confirmation of the pattern." />
            <Bullet dot={true} text="Enter a buy order above the third candle's high." />
            <Bullet dot={true} text="Place a stop loss below the low of the first candle." />
            <Text style={styles.subHeading}>Bullish Harami</Text>
            <Text style={styles.text}>A bullish harami candlestick is a price chart formation that signals bullish trend reversals. A bullish harami candlestick comprises two candlesticks including a long bearish candlestick and a short bullish candlestick. The name ‘harami’ traces its origin to the Japanese language where ‘harami’ means ‘pregnant.</Text>
            <Text style={styles.heading}>Bullish Harami</Text>
            <Image source={require('../assets/images/forex8.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>First Candle (Bearish):</Text>
            <Bullet dot={true} text="Strong selling pressure, continuation of downtrend." />
            <Bullet dot={true} text="Bears have control, pushing prices lower." />
            <Text style={styles.subHeading}>Second Candle (Small Bullish or Neutral):</Text>
            <Bullet dot={true} text="Forms within the body of the first candle, showing reduced bearish momentum." />
            <Bullet dot={true} text="Indecision between buyers and sellers, bears losing strength." />
        </View>
    )
}


export const SingleBearish = () => {
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

export const ShootingStar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Shooting Star Candlestick</Text>
            <Text style={styles.text}>A <Text style={styles.boldText}>Shooting Star Candlestick</Text> is a price chart pattern that forms when a security's price rises after the market opens but then falls significantly, closing near its opening price by the end of the session. This pattern is characterized by:</Text>
            <Image source={require('../assets/images/forex10.png')} style={styles.image} resizeMode="contain" />
            <Bullet dot={true} heading="A small real body " text="near the lower end of the candlestick" />
            <Bullet dot={true} heading="A long upper wick " text="or shadow, indicating a price surge and strong buying pressure during the session." />
            <Bullet dot={true} heading="A short or no lower wick," text="showing minimal downward movement before closing." />
            <Text style={styles.text}>For a candlestick to qualify as a shooting star, the <Text style={styles.boldText}>upper wick must be at least twice the size of the real body.</Text> The structure represents a shift in market sentiment, where sellers gain control, driving the price down toward the close.</Text>
            <Text style={styles.subHeading}>What Does a Red Shooting Star Indicate?</Text>
            <Text style={styles.text}>A <Text style={styles.boldText}>red shooting star</Text> forms when the closing price is <Text style={styles.boldText}>below the opening price,</Text> represented by a red body.</Text>
            <Bullet dot={true} heading="Significance:" text="This pattern is a strong bearish signal, as it shows the price was pushed down sharply by sellers." />
            <Bullet dot={true} heading="Implication:" text=": It is a more reliable indicator of an upcoming downward trend compared to a green shooting star." />
            <Image source={require('../assets/images/forex11.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>What Does a Green Shooting Star Indicate?</Text>
            <Text style={styles.text}>A <Text style={styles.boldText}>green shooting star</Text> occurs when the closing price is <Text style={styles.boldText}>above the opening price,</Text> represented by a green body.</Text>
            <Bullet dot={true} heading="Significance:" text="While the price ends slightly higher than the opening, the small range between the opening and closing prices shows limited bullish strength." />
            <Bullet dot={true} heading="Implication:" text="Green shooting stars still suggest a bearish reversal but are considered less strong compared to red shooting stars." />
            <Text style={styles.subHeading}>Hanging Man Candlestick Pattern.</Text>
            <Text>The <Text style={styles.boldText}>Hanging Man candlestick pattern</Text> is a bearish reversal pattern used in technical analysis to identify potential market trend reversals from an uptrend to a downtrend. This pattern typically forms at the top of an uptrend and signals the possibility of a shift from bullish to bearish sentiment.</Text>
            <Image source={require('../assets/images/forex12.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>Key Characteristics of a Hanging Man:</Text>
            <Bullet dot={true} heading="Structure:" />
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	A small <Text style={styles.boldText}>real body</Text> located near the top of the candlestick.</Text>
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	A <Text style={styles.boldText}>long lower shadow</Text> (at least twice the size of the real body).</Text>
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	Little to no <Text style={styles.boldText}>upper shadow.</Text></Text>
            <Bullet dot={true} heading="Meaning:" />
            <Text style={[styles.text, { marginLeft: '5%' }]}>The long lower shadow shows that sellers drove the price down significantly during the session, but buyers regained control, pushing the price back near the opening level. Despite the recovery, the pattern suggests weakening bullish momentum.</Text>
            <Text style={styles.subHeading}>Does the Color of the Hanging Man Matter?</Text>
            <Bullet dot={true} heading="The color of the candlestick " text="(green or red) is not critical in recognizing a Hanging Man pattern." />
            <Bullet dot={true} heading="Importance:" text="The pattern’s structure and its position at the top of an uptrend are far more significant." />
            <Bullet dot={true} heading="Additional Insight:" text="A red Hanging Man may be a slightly stronger bearish signal than a green one, as it indicates the price closed below the opening level." />
            <Text style={styles.text}>In summary, the Hanging Man pattern serves as a warning sign of a potential bearish reversal, but traders should wait for confirmation (e.g., a bearish candlestick following the Hanging Man) before making trading decisions.</Text>
        </View>
    )
}

export const GravestoneDoji = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Gravestone Doji</Text>
            <Text style={styles.text}>The <Text style={styles.boldText}> Gravestone Doji</Text> is a bearish candlestick pattern used in technical analysis to identify potential trend reversals. This pattern forms when the <Text style={styles.boldText}>opening price</Text> and <Text style={styles.boldText}>closing price</Text> of an asset are equal, occurring at the <Text style={styles.boldText}>lowest point</Text> of the session. The candlestick has a <Text style={styles.boldText}>long upper shadow</Text> but no lower shadow, resembling a gravestone.</Text>
            <Image source={require('../assets/images/forex12.png')} style={styles.image} resizeMode="contain" />
            <Text style={styles.subHeading}>What Does a Gravestone Doji Mean?</Text>
            <Bullet dot={true} heading="Meaning:" />
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	The opening and closing prices are at the bottom of the candlestick.</Text>
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	<Text style={styles.boldText}>A long upper shadow</Text> indicates the price rose significantly during the session but then fell back to the opening level.</Text>
            <Bullet dot={true} heading="Significance:" />
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	It often forms after an uptrend and signals that the buying pressure is weakening, with sellers regaining control.</Text>
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	This pattern can indicate a <Text style={styles.boldText}>potential bearish reversal</Text> in the market.</Text>
            <Text style={styles.subHeading}>What Does Red Gravestone Doji?</Text>
            <Text style={styles.text}>A <Text style={styles.boldText}>Red Gravestone Doji</Text> is a variation of the Gravestone Doji pattern frequently seen in technical analysis.</Text>
            <Bullet dot={true} heading="Characteristics:" />
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	The <Text style={styles.boldText}>long upper shadow</Text> is at least twice the size of the candlestick’s tiny body.</Text>
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	The small body is positioned near the lower end, creating the appearance of a gravestone.</Text>
            <Bullet dot={true} heading="Implications:" />
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	The red body indicates that the closing price was slightly below the opening price, reinforcing bearish sentiment.</Text>
            <Text style={[styles.text, { marginLeft: '5%' }]}>○	This pattern is often used to predict trend reversals or confirm the weakening of an existing bullish trend.</Text>
            <Text style={styles.text}>In summary, the <Text style={styles.boldText}>Gravestone Doji</Text> is a warning sign of potential downward movement in prices, especially when confirmed by subsequent bearish candlesticks or other technical indicators.</Text>
        </View>
    )
}

export const DoubleDoji = () => {
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
            <Bullet dot={true} text="The Bearish Engulfing Candlestick is a bearish reversal signal that suggests sellers are gaining control, increasing the probability of a price decline." />
            <Bullet dot={true} text="It helps traders identify potential trend reversals, allowing them to adjust their strategies and seize new market opportunities." />
        </View>
    )
}

export const TripleDoji = () => {
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
            <Bullet dot={true} heading="Reliability:" text="The Evening Star is a strong bearish reversal pattern when combined with other technical indicators like resistance levels, RSI, or moving averages." />
            <Bullet dot={true} heading="Confirmation:" text="Look for additional confirmation through increased volume on the third bearish candle or other bearish signals." />
            <Bullet dot={true} heading="Application:" text="The pattern is most effective in identifying potential selling opportunities at the top of an uptrend." />
            <Text style={styles.text}>By recognizing the Evening Star, traders can anticipate <Text style={styles.boldText}>trend reversals</Text> and adjust their strategies accordingly.</Text>
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



const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
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
        color: theme.colors.black,
        fontSize: 22,
        fontFamily: 'Gilroy-Bold',
        textAlign: 'left',
        width: '100%',
        marginTop: '5%'
    },
    text: {
        color: theme.colors.black,
        fontSize: 16,
        textAlign: 'left',
        width: '100%',
        marginTop: '5%'
    },
    boldText: {
        color: theme.colors.black,
        fontSize: 16,
        fontFamily: 'Gilroy-Bold'
    },
    image: {
        width: "100%",
        height: 200,
        marginTop: '5%',
    }
})