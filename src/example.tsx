import React, { useState } from "react";
import { Container, FormControl, FormLabel, Code } from "@chakra-ui/react";
// import { Select } from "chakra-react-select";
import { groupedCountries } from "./docs/data";
import data from "./date.json";

import { Selectt } from "./form";

export default () => {
  const [selectChange, setSelectChange] = useState();

  const [state, setState] = React.useState({
    options: null
  });

  const categoryChange = (event) => {
    const category = event.target.value;
    console.log(category);
    const tem = data.values.filter((product) => product.id == category);
    setState({
      ...tem[0]
    });
  };
  const hasCategory = state.options && state.options;
  console.log(hasCategory);
  return (
    <Container mb={16}>
      <p>sssssssssss</p>

      <Selectt
        placeholder="Select Options"
        label="Select"
        name="ssss"
        options={data[0].values}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      {/* <FormControl p={4}>
        <FormLabel>
          Multi Select with <Code>hasStickyGroupHeaders</Code>
        </FormLabel>
        <Select placeholder="Select option" onChange={categoryChange}>
          {data.values.map((item) => (
            <option value={item.id}>{item.text}</option>
          ))}
        </Select>
        {hasCategory ? (
          <>
            <FormLabel>
              Multi Select with <Code>hasStickyGroupHeaders</Code>
            </FormLabel>
            <Select placeholder="Select option" onChange={categoryChange}>
              {state.options.map((item) => console.log(item))}
              <option value="{item.id}">2345</option>
            </Select>
          </>
        ) : (
          []
        )}
      </FormControl> */}
    </Container>
  );
};
