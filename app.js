const { useState } = React;

function GroceryList(props) {

  const [groceryItems, setGroceryItems] = useState(['beer', 'scratchers','mega millions tickets','powerball tickets','rolling papers', 'lighter']);

  return (
    <ul>
      {groceryItems.map((item) => <GroceryListItem items={item}/>)}
    </ul>
  )
}

ReactDOM.render(<GroceryList />, document.getElementById("app"));