/* 
*   Created by Madhavan 22/03/2020
**/
import { SERVICE_API } from '../helper/constants';
export default function getShoppingItems() {
    fetch(SERVICE_API)
        .then((resp) => resp.json())
        .then((items) => {
            return items;
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
        });
}