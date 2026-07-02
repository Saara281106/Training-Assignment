import { collection, addDoc } from "firebase/firestore"; 
import { Category } from "../Models/Category";
import { db } from"../Firebase" ;
const dbPath = "categories";

class CategoryService {
  async add(Data) {
    const newCategory = new Category();
    newCategory.name = Data.name;
    newCategory.description = Data.description;
    const docRef = await addDoc(collection(db , dbPath), {
      ...newCategory
    });
    return Category;
  }
}

export default new CategoryService()