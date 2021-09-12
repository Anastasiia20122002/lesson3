const arr1=['Car','Mango', 'Table', 'Mouse']
const arr2=['Hand', 'Mango', 'Phone','Mouse']
function UpperReversedArray(arr1, arr2){
const merged=[...arr1,...arr2];
const unique=merged.filter((item, index,arr)=>arr.indexOf(item)===index);
const upper_reversed=unique.map(item=>item.split("").reverse().join("").toUpperCase());
const result=upper_reversed.join(" - ")
return result;
}
const array=UpperReversedArray(arr1, arr2);
console.log(array);

