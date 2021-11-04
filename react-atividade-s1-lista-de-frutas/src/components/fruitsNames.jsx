const FruitList = ({ index, fruitsName }) => {
  return (
    <div>
      <li key={index}>{fruitsName}</li>
    </div>
  );
};
export default FruitList;
