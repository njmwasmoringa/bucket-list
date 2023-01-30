import logo from './logo.svg';
import './App.css';
import BucketItem from './components/bucket-item/BucketItem';
import data from './data/bucketitems.json';
function App() {

  return (
    <div>

      <h1>My Bucketlist Items</h1>
      
      <div className="bucket-container">
      { data.map( (item)=><BucketItem 
          title={item.title} 
          description={item.description}
          img={item.img}
          id={item.id}
        />  ) }
      </div>
      <div>Something</div>

    </div>
  );
}

export default App;
