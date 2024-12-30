import Link from 'next/link'
const url = "http://127.0.0.1:3333/api/v1/products";

const getProducts = async ()=>{
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  return data;
}


const About = async () => {
 const data = await getProducts();
 console.log(data);


  return (
    <div>
      
      <h1>Test</h1>
      
    </div>
  )
}

export default About
