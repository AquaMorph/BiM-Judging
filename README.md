# BiM Judging

BiM Judging is a Google Sheets add on for instant run off voting for Bricks in Motion contests.

## How to Judge a contest

### Judge Pool

The first part of running is a contest is selecting a list of judges. Ideally there should be 3 to 5 judges lined up for the contest. More is alright but three should be the minimum. The more judges the harder it is to cordinate getting the results in order. An odd number of judges is prefered because it minimizes ties. The criteria need to be a judge is left up to the contest runner. They can pull from experianced members of the community to people outside the community with film experiance.

### Watching the films

The judges should independatly watch all the films. In the past the connest runner has provided a short list of films but I would advise heavily against that since this increases the sway the contest runner has over the results. Maybe the show runner skipped over some films other judges would have liked and thus never got the change to view. When the judge has completed watching the films he or she should created an ordered rank list of number of placed films plus five. So for example if the contest is doing a top ten then each judge needs to create an indepentant top 15 list. These lists will be collected from each judge and ideally the contest runner should not look at them until he or she has finished their own list to prevent biasing. The size of the number of ranked film is up the the contest runner. Most of the time it is a top 10. In the past all films were ranked but BiM had several good reason for getting rid of that.

### Instant Runoff Voting

Bricks in Motion uses a voting system called Instant Runoff Voting or IRV for short. This voting system has been modified slightly to create rankings rather than just a winner. The advantage of IRV is that it create a consensus ranking off all the judges while allowing the judges to pick outlier films without consequence.

#### Algorithm
1) Each judge submits a ranked list of films
2) A list of all nominates films is created. If a judge has not added a particular film to their ranking that film is scored as the total number of ranked films plus one.
3) Sum the total of all judges rankings and pull the film or films with the highest total out and give it a ranking equal to the number of films left plus one.
4) For each judge rankings decrease all rankings for films ranked above the eliminated films or films by the number of films eliminated. Leave all rankings below alone.
5) Repeat steps 3 and 4 until all films have been eliminated.

#### Advantages of IRV

Instant Runoff Voting has a number of advantages and they are best highlighted by comparing IRV with other systems. In the past Bricks in Motion contests have used other judging systems which could be improved with IRV.

##### Rubric

Art is subjective and the idea that one can create an objective judging system is ridiculous. That being said steps can be done to help minimize the impact of subjectivity in the ranking process. An older judging system Brick in Motion used was having a rubric the judges filled out for each film. Aspects of a film were divided into categories and were given scores. These categories were things like animation, lighting, sound, writing, etc. The problem with this system is it overvalues the technical aspects of a film. A more holistic view of the films is needed. A film is a collection of all those parts and how well the entire film works with the summation of all individual parts. 

##### Averaging

Also in the past Brick in Motion contests have averaged score from judges. For the most part this is fine part there are a couple of issues that may pop up.

### Judge Consensus

After the IRV algorithm has generated a ranked list of films all the judges should get together and discuss the rankings. The IRV rankings are by no means the final rankings and can be completely changed by the judges as they see fit. The IRV should generate a ranked list that the judges are most happy with but they should discuss the rankings and can advocate for reordering. This process is left up to the contest runner but in most cases judges have opted to have unanimous consent to reorder the rankings.
