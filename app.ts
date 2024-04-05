// EXERCISE:14

// let guest_list: string[]= ["Ahsan","Umar","Talib"];
// for(let i=0; i<guest_list.length;i++){
//     console.log(`Respected Sir ${guest_list[i]}` + "\nYou are invited for the dinner tomorrow.\n");
// }

// EXERCISE:15

/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

let guest_list: string[] = ["Ahsan", "Umar", "Talib"];

let cannot_attend: string = "Talib";
console.log(`MR.${cannot_attend} can not make the dinner with us.\n`);

// Modifying list:
let new_guest: string = "Abdullah";
guest_list[2] = new_guest;

// Sending Second set of invitation:
for (let i = 0; i < guest_list.length; i++) {
  console.log(`Mr${guest_list[i]}, you are cordially inivited to the dinner.`);
}
