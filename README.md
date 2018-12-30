# BiM Judging

BiM Judging is a Google Sheets add on for instant run off voting for Bricks in Motion contests.

## How to Judge a contest

### Judge Pool

The first part of running is a contest is selecting a list of judges. Ideally there should be 3 to 5 judges lined up for the contest. More is alright but three should be the minimum. The more judges the harder it is to coordinate getting the results in order. An odd number of judges is preferred because it minimizes the chances for ties. The criteria need to be a judge is left up to the contest runner. They can pull from experienced members of the community to people or people outside the community with film experience.

### Watching the films

The judges should independently watch all the films. In the past the contest runner has provided a short list of films but I would advise heavily against that since this increases the sway the contest runner has over the results. Maybe the contest runner skipped over some films other judges would have ranked and thus never got a chance to view. When the judge has completed watching the films he or she should created an ordered rank list of number of placed films plus five. So for example if the contest is doing a top ten then each judge needs to create an independent top 15 list. These lists will be collected from each judge and ideally the contest runner should not look at them until he or she has finished their own list to prevent biasing their own rankings. The size of the number of ranked film is up the the contest runner. Most of the time it is a top 10. In the past all films were ranked but BiM had several good reason for getting rid of that.

### Instant Runoff Voting

Bricks in Motion uses a voting system called Instant Runoff Voting or IRV for short. This voting system has been modified slightly to create rankings rather than just a winner. The advantage of IRV is that it create a consensus ranking off all the judges while allowing the judges to pick outlier films without consequence.

#### Algorithm
1. Each judge submits a ranked list of films
2. A list of all nominates films is created. If a judge has not added a particular film to their ranking that film is scored as the total number of ranked films plus one.
3. Sum the total of all judges rankings and pull the film or films with the highest total out and give it a ranking equal to the number of films left plus one.
4. For each judge rankings decrease all rankings for films ranked above the eliminated films or films by the number of films eliminated. Leave all rankings below alone.
5. Repeat steps 3 and 4 until all films have been eliminated.

#### Running the Algorithm

Since this manually doing IRV is rather tedious I have developed a Google Sheets add on to automate the process. This add-on can be installed here: <https://chrome.google.com/webstore/detail/bim-judging/ojildlohncmpjlapkjmcohndkbencfpl> The add-on is also open sourced and the code is available here: <https://github.com/AquaMorph/BiM-Judging> The steps to run the BiM IRV algorithm or as follow.

1. Go to the Chrome Webstore link and install the "BiM Judging" add-on.
2. Create a new Google Sheets Spreadsheet.
3. In the new sheet click on the "Add-ons" menu item and select "Manage Add-ons."
4. A pop up window should appear and the BiM Judging add-on should be in the list. Click the green "Manage" button and select "Use in this document."
5. Close the pop up window and refresh the page.
6. The first row is reserved for column headers. The first few columns should contain film titles, creators name, or any other relevant information. After that in the first row should contain the name of each judge in their own column.
7. Enter each of the judges rankings giving the film a numeric value equal to that judges rank. Add films in a new row as necessary. There should only be one row per film.
8. Once all data is inputted create a copy of the sheet by clicking the error on the bottom where it says "Sheet1" and then click "Duplicate." This is a back up of the raw data before the algorithm begins manipulating the data.
9. Now navigate on Add-ons -> BiM Judging -> Rank by Instant Runoff.
10. A pop up will appear asking for the number of columns before ranking information. Enter a numerical of the number of columns that are before the judging rankings and select ok. If you are using the example document found below one would enter 2.
11. Another pop up will appear asking for the number of judges. Enter the number of judges as a number and click ok. If one is following the example document on would enter 5.
12. The algorithm will be begin running with an indicator on the screen showing that it is still running. It should take around a minute depending on the number of judges and films.
13. Once a ranks column is created at the very beginning of the sheet the algorithm is done running and those are the IRV rankings.

Here is an example sheet with fake data <https://docs.google.com/spreadsheets/d/1x4_81qYY7EWaWaxbwDm7ceQuvc_Eb0inCChMYu2trHk/edit?usp=sharing> One can copy the raw data sheet into their own sheet and run the algorithm to make sure they get the same results as the processed results sheet. 

#### Advantages of IRV

Instant Runoff Voting has a number of advantages and they are best highlighted by comparing IRV with other systems. In the past Bricks in Motion contests have used other judging systems which could be improved with IRV.

##### Rubric

Art is subjective and the idea that one can create an objective judging system is ridiculous. That being said steps can be done to help minimize the impact of subjectivity in the ranking process. An older judging system Brick in Motion used was having a rubric the judges filled out for each film. Aspects of a film were divided into categories and were given scores. These categories were things like animation, lighting, sound, writing, etc. The problem with this system is it overvalues the technical aspects of a film. A more holistic view of the films is needed. A film is a collection of all those parts and how well the entire film works with the summation of all individual parts. The weighting of these categories is also a problem for the rubric method. Should lighting be given the same weight as writing? Should it be given more and if do how much? Depending on how all this stuff is weighted it changes the competition and limits creativity because it encourages one to create a film to do well on a rubric rather than making a good film.

##### Averaging

Also in the past Brick in Motion contests have averaged score from judges. For the most part this is fine, but there are a couple of issues that may pop up. The first is that averaging gives more weight to outlier opinions. If all judges rank a film as first except for all one judge who ranked it eleventh. Then for another film all judges rank the film second. With five judges using averages the first film would have an average of 3.0 while the second film has an average of 2.0. With averaging the first film would get second despite being the favorite film of majority of the judges. IRV would fix this because as films were eliminated the outlier ranking would come down in value as the outlier judge rankings are adjust with the elimination of films on his or her list. This is closely related to the second problem with averaging which is that it does not produce the rankings that the judges are most content with. By using IRV several rounds of voting can be simulated without requiring the judges time. This assures that the rankings will reflect what the pool of judges want and allows for minority options to be represented without fear of wasting votes or being over represented in the outcome. 

### Judge Consensus

After the IRV algorithm has generated a ranked list of films, all the judges should get together and discuss the rankings. The IRV rankings are by no means the final rankings and can be completely changed by the judges as they see fit. The IRV should generate a ranked list that the judges are most happy with but they should discuss the rankings and can advocate for reordering. This process is left up to the contest runner but in most cases judges have opted to have unanimous consent to reorder the rankings. The judges are given complete autonomy to adjust rankings as they see fit but from the several contests I have been apart of for the most part the IRV rankings have been left mainly untouched. Changes typically came about from judges discussing the films and why they liked select films and changing the minds of other judges.

### Conclusion

I hope this helps clarify how the Bricks in Motion judging system works. Documenting the process is important for two reasons. The first is transparency so that people entering contest will understand how the judging process works. The second is for the judges and contest runners to have something to reference so I do not have to be involved in the process. I will continue to update this as need to add clarification or when new steps are added. Suggestions for improvement are welcome from improving the code base of the add-on to improving the judging process.
