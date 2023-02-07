import logo from './logo.svg';
import './App.css';
import BucketItem from './components/bucket-item/BucketItem';
import data from './data/bucketitems.json';
import { useState } from 'react';

function App() {

  const [buckets, setBuckets] = useState( data );

  function bucketLiked( id, newNumberOfLikes ){
    setBuckets( (currentBucket)=>{

      const newUpdateBuckets = [...currentBucket];

      const theLickedBucketIndex = newUpdateBuckets.findIndex( bucket => bucket.id === id );
      console.log(newUpdateBuckets[ theLickedBucketIndex ]);

      newUpdateBuckets[ theLickedBucketIndex ].likes = newNumberOfLikes;

      return newUpdateBuckets;
    } );
  }

  return (
    <div>

      <h1>My Bucketlist Items</h1>
      
      <div className="bucket-container">
      { buckets.map( (item, index)=><BucketItem key={item.id}
          title={item.title} 
          description={item.description}
          img={item.img}
          id={item.id}
          likes={item.likes}
          licked={ bucketLiked } 
        >{index}</BucketItem>  ) }
      </div>
      <div>Something</div>

    </div>
  );
}

export default App;
