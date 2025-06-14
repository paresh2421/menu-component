import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";

const App = () => {
  const [items, setItems] = useState(menu);
  return (
    <main>
      <section className="menu">
        <Title text = 'Our Menu' />
        <Menu items={items} />
      </section>
    </main>
  );
};
export default App;
