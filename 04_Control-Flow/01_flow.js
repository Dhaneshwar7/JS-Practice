/*  if Else Conditions */

let score = 23;

if (score >= 33) {
	console.log('You are pass');
} else {
	console.log('you Failed in the Exam');
}

if (score < 10) {
	console.log('Less than 10');
} else if (score < 20) {
	console.log('less than 20');
} else if (score < 30) {
	console.log('less than 30');
} else if (score < 40) {
	console.log('less than 40');
}

const isLoggedin = true;
const debitCard = false;
const loggeinfromGoogle = true;
const loginFromEmail = true;

if (isLoggedin && debitCard) {
	// Check both condition
	console.log('You can buy Course');
} else {
	console.log("You can't buy this course , Log in First");
}

if (loggeinfromGoogle || loginFromEmail || 2 == 3) {
	// Check any one  condition
	console.log('YOu logged in now ');
} else {
	console.log("you can watch login First");
}
