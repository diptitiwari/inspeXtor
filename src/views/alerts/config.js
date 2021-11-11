export const tFields = [{
        key: 'node',
        label: 'Node/Cluster',
        sortable: true,
    },
    {
        key: 'parameter',
        label: 'Parameter',
        sortable: true,
    },
    {
        key: 'condition',
        label: 'Condition',
        sortable: true,
    },
    {
        key: 'severity',
        label: 'Severity',
        sortable: true,
    },
    {
        key: 'startTime',
        label: 'Start Time',
        sortable: true,
    },
    {
        key: 'endTime',
        label: 'End Time',
        sortable: true,
    },
    {
        key: 'description',
        label: 'Description',
        sortable: true,
    },

];

export const tItems = [{
        id: '1',
        node: 'ND-10050',
        parameter: 'Temperature',
        condition: 'N/A',
        severity: 'N/A',
        startTime: '10-21-2019 01:52:28',
        endTime: '10-30-2019 01:52:28',
        description: 'lorem',
    },
    {
        id: '2',
        node: 'ND-10051',
        parameter: 'Temperature',
        condition: 'N/A',
        severity: 'N/A',
        startTime: '10-21-2019 01:52:28',
        endTime: '10-30-2019 01:52:28',
        description: 'lorem',
    }
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

export const cluster = [
    "Un Assigned",
    "Ak Office",
    "Bench 1",
    "Bench 2",
    "Bench 3",
];

export const severity = [
    'Critical (Red)', 'Caution (Yellow)'
];

export const parameterType = [
    'Temperature', 'Occupied'
];

export const node = [
    'ND-10273', 'ND-10215', 'ND-10272', 'ND-10094a', 'ND-10080', 'ND-10280', 'ND-10219', 'ND-10267', 'ND-10079', 'ND-10220'
];

export const condition = [
    'Greater-than', 'Less-than','less or equal to','Greater or equal to','Equal to','Not equal to'
];

export const daysOfWeekItem = [
    { text: "Mon", value: "Mon" },
    { text: "Tue", value: "Tue" },
    { text: "Wed", value: "Wed" },
    { text: "Thu", value: "Thu" },
    { text: "Fri", value: "Fri" },
    { text: "Sat", value: "Sat" },
    { text: "Sun", value: "Sun" }
  ];
