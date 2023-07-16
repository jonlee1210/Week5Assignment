

// Week 5 Coding Assignment 

// Super Bowl Odds Menu

class Team {
    constructor(name, odds) {
        this.name = name;    // Assigning the team name to the 'name' property
        this.odds = odds;  // Assigning the odds to the 'odds' property
     }
    
    describe() { 
        return `The odds for the ${this.name} to win the Super Bowl this season are ${this.odds}`; // Giving a description string that includes both the name and odds
    }
}

class Menu {
    constructor() {
        this.teams = []; // Initializing an empty array to store the teams
        this.selectedTeam = null; // Initializing the selected team as null
    }

    start(){
        let selection = this.showMainMenuOptions();  // Prompting the user to select an option from the menu
            while (selection != 0) {  // Continuing the loop unit 0 is selected to exit
                switch (selection) {
                    case '1':
                        this.createTeam(); // Calling the createTeam method when '1' is selected
                        break;
                    case '2':
                        this.viewTeam(); // Calling the viewTeam method when '2' is selected
                        break;
                    case '3':
                        this.deleteTeam(); // // Calling the deleteTeam method when '3' is selected
                        break;
                    case '4':
                        this.displayTeams(); // Calling the displayTeams method when '4' is selected
                        break;
                        default:
                            selection = 0; // Set the election to 0 to exit the loop if invalid option is selected
                    
                }
                selection = this.showMainMenuOptions(); // Prompting the user to select an option again
            }
            alert('See ya!'); // Displaying a message after the end of the loop
    }
showMainMenuOptions() {
    return prompt(`
   0) Exit
   1) Add a new team
   2) View a team
   3) Remove a team
   4) Display all teams 
    `); // Displaying the menu options as well as returning the user's selections
}
showTeamMenuOptions(teamInfo) {
    return prompt(`
   0) Back
   ------------------
   ${teamInfo} 
    `); // // Displaying the team menu options as well as returning the user's selections
    }
displayTeams() {
    let teamString = '';
    for (let i = 0; i < this.teams.length; i++) {
        teamString += i + ') ' + this.teams[i].name + '\n'; // Looping through each team in the teams array, retrieving the description and adding to the teamString variable
     }
     alert(teamString); // Displays the teamString containing all the teams and their odds
    }   
    createTeam() {
        let name = prompt('Enter the name for the new team:'); // Prompts the user to enter a new team
        let odds = prompt('Enter the odds for the team:'); // Prompts the user to enter the odds for the team
        this.teams.push(new Team(name, odds)); // creates a new Team object with the provided name and odds while adding it to the teams array
    }
    viewTeam() {
        let index = prompt('Enter the index of the team you wish to view:'); // prompts the user to enter the index of the team they want to view
        if (index > -1 && index < this.teams.length) { // checks the validity of the index
            this.selectedTeam = this.teams[index]; //sets the slectedTeam to the team at the specific index
            this.selectedTeam = this.selectedTeam.describe(); // Shows the description of the selected team
            alert(description); // displays the description of the slected team
        }
    }
    deleteTeam(){
        let index = prompt('Enter the index of the team you wish to delete:'); // Prompts the user to enter the index of the team they'd like to remove/delete
        if (index > -1 && index < this.teams.length) { // Checks validity of the index
                this.teams.splice(index, 1); // Removes the team
        }
    }
}

let menu = new Menu(); // Creates a new instance of the menu class
menu.start; // Starts the menu interaction
