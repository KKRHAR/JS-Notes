function introduce(strings, arg0, arg1) {
    console.log('strings', strings);
    console.log('arg0', arg0);
    console.log('arg1', arg1);
  
    return 'introduce...';
  }
  
  const name = 'Joe';
  const color = 'purple';
  
  const message = introduce`Hello, I'm ${name} and ${color} is my favorite color!`;
   
  



//   function introduce(strings, ...values) {
//     console.log('strings', strings);
//     console.log('values', values);
  
//     return 'introduce...';
//   }
  
//   const name = 'Joe';
//   const color = 'purple';
  
//   const message = introduce`Hello, I'm ${name} and ${color} is my favorite color!`;
// We create a new template literal using the expression values 
// and wrap it with the span element. 
// Please notice, we have added a style to the span 
// element to color the text as well.

// Output,

{/* <span style="color:green">
    Hello Joe, Have a Nice Day! We know your favorite color is <u>green</u>
</span> */}
