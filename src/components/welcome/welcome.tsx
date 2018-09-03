import * as React from "react";
import { Wrapper, Text, Size, Style } from "./styles";

const welcome = () => {
  return (
    <Wrapper>
      <Text size={Size.large}>Welcome to WeatherNow</Text>
      <Text size={Size.medium}>Beautiful Weather Cards to make your life easier. Start searching for your city &amp; get a detailed weather report.</Text>
      {/* <Text size={Size.small} fontStyle={Style.italic}>
        Sunshine is delicious, rain is refreshing, wind braces us up, snow is
        exhilarating; there is really no such thing as bad weather, only
        different kinds of good weather. - John Ruskin
      </Text> */}
    </Wrapper>
  );
};

export default welcome;
