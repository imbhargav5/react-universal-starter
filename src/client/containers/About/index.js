import React, { Component } from "react";
import styled from "styled-components";

const Heading = styled.h1`font-size: 3em;`;
const Lipsum = styled.p`
  font-style: italic;
  max-width: 80%;
  margin: 1em auto;
`;

class About extends Component {
  render() {
    return (
      <div>
        <Heading>About</Heading>
        <Lipsum>
          Leo nullam arcu scelerisque hendrerit consectetur cum ullamcorper a
          hac erat turpis ac a hac porttitor suspendisse et a ac tristique. A
          eros neque integer fermentum pulvinar ut ullamcorper himenaeos a
          taciti commodo a nam nibh vel nunc mi praesent quam duis quam cursus
          sociosqu. Dictumst at eros cursus a sed mus cubilia adipiscing
          parturient ante hendrerit in litora felis leo. Lacinia vestibulum
          adipiscing vehicula etiam tortor maecenas felis vestibulum adipiscing
          rhoncus a suspendisse leo scelerisque ultrices elit parturient.
        </Lipsum>
        <Lipsum>
          Lorem mi tempus turpis quis adipiscing ac ipsum dui convallis dui
          class hendrerit ante neque dignissim taciti vestibulum libero
          tincidunt. Quis ligula suscipit non euismod ridiculus rhoncus
          vestibulum nec consectetur scelerisque imperdiet commodo diam erat
          orci dictum sapien malesuada per senectus a adipiscing. At nunc a
          vestibulum id adipiscing praesent tristique purus in est a parturient
          ullamcorper hac condimentum suspendisse a eget praesent cum in
          adipiscing natoque ullamcorper praesent non. Mus a vestibulum
          parturient eget nulla duis nunc fusce ipsum eu dapibus vivamus quam
          tempus a vestibulum platea maecenas sociis amet facilisis adipiscing
          consectetur ullamcorper neque dui nisl. A sem magna litora ad a
          condimentum scelerisque dui sociosqu ornare id a posuere dictum ad
          habitant netus a pretium nisi a torquent a vestibulum. Condimentum
          commodo duis rhoncus commodo a aptent sit ante urna in scelerisque
          parturient natoque augue ultricies diam eu ac.
        </Lipsum>
      </div>
    );
  }
}

export default About;
