
/**
 * 
 * {
 *  title:'',
 *  img: '',
 *  description: '',
 *  id: 1
 * }
 * 
 * bucketItem = {
 *  title:'',
 *  img: '',
 *  description: '',
 *  id: 1
 * }
 */

import { useState } from 'react';
import './BucketItem.css';

export default function BucketItem( { children, title, description, img, id, likes, licked } ){


    let [ bucketLikes, setBucketLikes ] = useState( likes );
    
    function like(){
        setBucketLikes( (currentBuckeLIkes) => {
            const newUpdatedLikes = currentBuckeLIkes + 1;            
            licked( id, newUpdatedLikes);
            return newUpdatedLikes;
        } );
    }
    // console.log(count);

    return <div className="bucket-item">
        {children}
        <img src={ img } />
        <h3> { title } </h3>
        <p>{ description }</p>

        <button title="click to like" onClick={ like } ><span>{ bucketLikes }</span> Likes <strong>{likes}</strong> </button>

        <a href="" title="title">More Details</a>


    </div>

}