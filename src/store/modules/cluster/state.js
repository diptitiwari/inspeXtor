const initState = {
    clusters: [
        {
            "ID": "1",
            "Name": "UNASSIGNED",
        },
        {
            "ID": "2",
            "Name": "Ak office"
        },
        {
            "ID": "3",
            "Name": "Bench 1"
        },
        {
            "ID": "4",
            "Name": "Bench 2"
        },
        {
            "ID": "5",
            "Name": "Bench 3"
        }
    ],
    nodes: [
        {
            "ClusterIDs": ["2"],
            "ID": "1",
            "Name": "ND-10201",
            createdAt: '2019-09-05 12:20:25',
        },
        {
            "ClusterIDs": ["2"],
            "ID": "2",
            "Name": "ND-10243A",
            createdAt: '2019-09-05 12:20:25',
        },
        {
            "ClusterIDs": ["3"],
            "ID": "3",
            "Name": "ND-10201",
            createdAt: '2019-09-05 12:20:25',
        },
        {
            "ClusterIDs": ["4"],
            "ID": "4",
            "Name": "ND-10216",
            createdAt: '2019-09-05 12:20:25',
        },
        
    ]
};

export default initState;
