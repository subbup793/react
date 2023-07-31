import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
let items = ["New York", "San Francico", "Tokyo", "London", "Paris"];
const handleSelectedItem = (item: string) => {
  console.log(item);
};
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
      {alertVisible && (
        <Alert onClose={() => {setAlertVisibility(false);console.log("Got the response..!");
        }}>
          Hello <span>World!</span>
        </Alert>
      )}
      <Button
        color="success"
        onClick={() => {
          setAlertVisibility(true);
          console.log("Greeted..!");
        }}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
