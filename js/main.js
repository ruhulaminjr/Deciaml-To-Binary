// dom select 
const shownumber = document.getElementById('binary');

const convertBtn = document.getElementById('submit');





// function 

function decimalbinary(e){
    e.preventDefault();
    const userinput = document.getElementById('number').value;

  if (userinput === ''){
      alert('Enter A Number')
  }else if (userinput < 0){
      alert('Enter Positive Number')
  }else{
      shownumber.style.visibility = 'visible';
  }

let convert = Number(userinput).toString(2);
 
shownumber.innerText = convert;

}
// event listener 

convertBtn.addEventListener('click',decimalbinary);