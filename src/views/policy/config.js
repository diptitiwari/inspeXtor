export const tFields = [{
    key: 'Name',
    label: 'Name',
    sortable: true,
  },
  {
    key: "PolicyID",
    label: 'Policy Type',
    sortable: true,
  },
  {
    key: 'Time',
    label: 'Time',
  },
  {
    key: 'action',
  },
];

const AfterHours =  {
  "ID": "7",
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
  "ID": "9",
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
  "ID": "10",
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
  "ID": "8",
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

export const tItems = [
  AfterHours,
  afterhours2,
  morningPolicy,
  weekendPolicy
];

export const tPages = [
  1,
  2,
  5,
  10,
  20,
  30,
  40,
  50
];

export const policyType = [
  {
    id: 1,
    name: 'Time "Will Trigger when Time match"'
  },
  {
    id: 2,
    name: 'Time and date " Will Trigger when specific date match"'
  }
];

export const cluster = [
  'UNASSIGNED',
  'Ak office',
  'Bench 1',
  'Bench 2',
  'Bench 3'
];

export const policy = [
  'After hours',
  'afterhours',
  'weekendPolicy',
  'Morning-Policy'
];

export const clusterWisePolicy = {
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
