const { useState } = React;

function GroceryListItem(props) {
  const [isHover, setIsHover] = useState(false);

  const style = {
    fontWeight: isHover ? 'bold' : 'normal'
  };

  return (
    <li style={style} onMouseEnter={() => setIsHover(!isHover)} onMouseLeave={() => setIsHover(!isHover)}>
      {props.items}
    </li>
  )
};