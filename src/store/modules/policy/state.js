const AfterHours =  {
 "ID": "1",
 "PolicyID": "0",
 "Name": "After hours ",
 "Formate": "1",
 "ColorStatus": "0",
 "Color": "0",
 "Dim": "0",
 "MotionStatus": "0",
 "DurationHour": "0",
 "DurationMinute": "0",
 "TimeFormate": "0",
 "StartDate": null,
 "StartTime": "17:00:00",
 "EndTime": "20:00:00",
 "Day1": "1",
 "Day2": "1",
 "Day3": "1",
 "Day4": "1",
 "Day5": "1",
 "Day6": "1",
 "Day7": "1",
 "LightDefault": "0",
 "Createdby": "1",
 "CreatedOn": "2019-10-23 10:23:12",
 "Deleted": "0",
 "DeletedBy": null,
 "DeletedOn": null,
 "ModifiedBy": "1",
 "ModiFiedOn": "2019-10-23 10:10:25",
 "Synchronize": "2019-10-23 10:23:25"
};
const afterhours2 = {
 "ID": "2",
 "PolicyID": "1",
 "Name": "afterhours",
 "Formate": "1",
 "ColorStatus": "0",
 "Color": "0",
 "Dim": "10",
 "MotionStatus": "0",
 "DurationHour": "0",
 "DurationMinute": "0",
 "TimeFormate": "0",
 "StartDate": null,
 "StartTime": "21:00:00",
 "EndTime": "23:00:00",
 "Day1": "1",
 "Day2": "1",
 "Day3": "1",
 "Day4": "1",
 "Day5": "1",
 "Day6": "1",
 "Day7": "1",
 "LightDefault": "20",
 "Createdby": "1",
 "CreatedOn": "2019-10-24 01:21:41",
 "Deleted": "0",
 "DeletedBy": null,
 "DeletedOn": null,
 "ModifiedBy": null,
 "ModiFiedOn": null,
 "Synchronize": "2019-10-24 01:21:41"
};
const morningPolicy = {
 "ID": "3",
 "PolicyID": "0",
 "Name": "Morning-Policy",
 "Formate": "1",
 "ColorStatus": "0",
 "Color": "0",
 "Dim": "23",
 "MotionStatus": "0",
 "DurationHour": "0",
 "DurationMinute": "0",
 "TimeFormate": "0",
 "StartDate": null,
 "StartTime": "06:00:00",
 "EndTime": "08:00:00",
 "Day1": "1",
 "Day2": "1",
 "Day3": "1",
 "Day4": "1",
 "Day5": "1",
 "Day6": "1",
 "Day7": "1",
 "LightDefault": "20",
 "Createdby": "1",
 "CreatedOn": "2019-10-29 04:05:36",
 "Deleted": "0",
 "DeletedBy": null,
 "DeletedOn": null,
 "ModifiedBy": null,
 "ModiFiedOn": null,
 "Synchronize": "2019-10-29 04:05:36"
};
const weekendPolicy = {
 "ID": "4",
 "PolicyID": "2",
 "Name": "weekendPolicy",
 "Formate": "1",
 "ColorStatus": "0",
 "Color": "0",
 "Dim": "10",
 "MotionStatus": "0",
 "DurationHour": "0",
 "DurationMinute": "0",
 "TimeFormate": "0",
 "StartDate": null,
 "StartTime": "00:00:00",
 "EndTime": "06:00:00",
 "Day1": "0",
 "Day2": "0",
 "Day3": "0",
 "Day4": "0",
 "Day5": "0",
 "Day6": "1",
 "Day7": "1",
 "LightDefault": "10",
 "Createdby": "1",
 "CreatedOn": "2019-10-24 01:20:54",
 "Deleted": "0",
 "DeletedBy": null,
 "DeletedOn": null,
 "ModifiedBy": null,
 "ModiFiedOn": null,
 "Synchronize": "2019-10-24 01:20:54"
};
const clusterWisePolicy = {
 "UNASSIGNED": [
  weekendPolicy,
 ],
 "Ak office": [
  AfterHours,
 ],
 "Bench 1": [
  AfterHours,
  afterhours2,
  weekendPolicy,
 ],
 "Bench 2": [
  weekendPolicy,
 ],
 "Bench 3": [
  morningPolicy,
 ]
};
const policyType = [
 {
  id: '1',
  name: 'Time "Will Trigger when Time match"'
 },
 {
  id: '2',
  name: 'Time and date " Will Trigger when specific date match"'
 }
];

const initState = {
 policies: [
   AfterHours,
   afterhours2,
   morningPolicy,
   weekendPolicy
 ],
 clusterWisePolicy,
 policyType
};

export default initState;
