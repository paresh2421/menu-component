import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ['all', ...new Set(menu.map((item)=>item.category))]
// console.log(categories);

const App = () => {
  const [items, setItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories)

  const filters = (category) =>{
    if(category === 'all'){
      setItems(items);
      return;
    }
    const newItems = items.filter((item)=>item.category === category);
    console.log(newItems);
    
    setItems(newItems);
  }

  return (
    <main>
      <section className="menu">  
        <Title text = 'Our Menu' />
        <Categories categories={categories} filters={filters} />
        <Menu items={items} />
      </section>
    </main>
  );
};
export default App;
