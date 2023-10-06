function checkingVotingEligibility(age) {
    if (age >=18){
        return "You are eligible to vote!";
    } else {
        return "Sorry, You are not eligible to vote yet.";
    }
}
 console.log(checkingVotingEligibility(16));
 console.log(checkingVotingEligibility(20));
 console.log(checkingVotingEligibility(18));
