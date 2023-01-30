
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

import './BucketItem.css';

export default function BucketItem( { title, description, img, id } ){

    return <div className="bucket-item">

        <img src={ img } />
        <h3> { title } </h3>
        <p>{ description }</p>

        <a href="" title="title">More Details</a>

    </div>

}