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
  export const propertyval=[
    'context','identity','inventory','location'
  ]