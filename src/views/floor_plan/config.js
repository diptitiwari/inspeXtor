export const treeData = [
  {
    title: "Un Assigned",
    value: "UnAssigned",
    key: "0-0"
  },
  {
    title: "Ak Office",
    value: "Ak Office",
    key: "0-1",
    children: [
      {
        value: "0-0-1",
        key: "0-0-1",
        scopedSlots: {
          // custom title
          title: "title"
        }
      },
      {
        title: "0-0-2",
        value: "0-0-2",
        key: "0-0-2"
      }
    ]
  },
  {
    title: "Bench 1",
    value: "Bench 1",
    key: "0-3",
    children: [
      {
        value: "0-1-1",
        key: "0-1-1",
        scopedSlots: {
          // custom title
          title: "title"
        }
      },
      {
        title: "0-1-2",
        value: "0-1-2",
        key: "0-1-2"
      }
    ]
  },
  {
    title: "Bench 3",
    value: "Bench 3",
    key: "0-4",
    children: [
      {
        value: "0-2-1",
        key: "0-2-1",
        scopedSlots: {
          // custom title
          title: "title"
        }
      },
      {
        title: "0-2-2",
        value: "0-2-2",
        key: "0-2-2"
      }
    ]
  },
];

export const clusterNodeDetails = {
  "status": "1",
  "device": [
    {
      "ClusterID": "5",
      "NodeID": "166",
      "TagID": "818",
      "NodeName": "ND-10300",
      "PName": "DR1-20300",
      "MPName": null,
      "x_pos": null,
      "y_pos": null,
      "enabled": null,
      "NodeEnabled": null,
      "TagTypeID": 1,
      "NodeTagID": "818",
      "nxpos": null,
      "nypos": null,
      "Name": "ND-10300"
    },
    {
      "ClusterID": "5",
      "NodeID": "166",
      "TagID": "823",
      "NodeName": "ND-10300",
      "PName": "WS--25236",
      "MPName": null,
      "x_pos": null,
      "y_pos": null,
      "enabled": null,
      "NodeEnabled": null,
      "TagTypeID": "4",
      "NodeTagID": "818",
      "nxpos": null,
      "nypos": null,
      "Name": "WS--25236"
    }
  ],
  "image": "RoomSketcher-Custom-2D-Floor-Plan-Branding.jpg",
  "options":{"210":"Light ON","211":"Light OFF","113":"Light Dim","205":"Scene 1","206":"Scene 2","207":"Scene 3"}
}
