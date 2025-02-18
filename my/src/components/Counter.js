import React, { useState } from "react";
import { Button, Box } from "@mui/material";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ background: `rgba(0,0,255,${count / 10})`, padding: 4 }}>
      <h2>Counter: {count}</h2>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={() => setCount(count - 1)}>Decrement</Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
    </Box>
  );
};

export default Counter;
