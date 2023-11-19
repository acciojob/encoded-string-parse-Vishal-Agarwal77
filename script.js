const parseCode = (str) => {
  // your code here
	let f_Name="";
	let l_name="";
	let id="";
	let i=0;
	while(str.charAt(i)!=="0"){
		f_Name+=str.charAt(i);
		i++;
	}
	while(str.charAt(i)==="0"){
		i++;
	}
	while(str.charAt(i)!=="0"){
		l_name+=str.charAt(i);
		i++;
	}
	while(str.charAt(i)==="0"){
		i++;
	}
	while(i<str.length && str.charAt(i)!=="0"){
		id+=str.charAt(i);
		i++;
	}
	return {
		firstName: f_Name,
		lastName: l_name,
		id: id
	}
};

// Do not change the code belo
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
