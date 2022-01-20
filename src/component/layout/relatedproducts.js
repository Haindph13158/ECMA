import { getAll, sortDesc } from "../../api/product";

const relatedproducts = {
    async render() {
        const {data} = await getAll();
        
        return`
        ${data.map(item => (
        `
       
        `

        )).join("")}
      
        `
    }
}