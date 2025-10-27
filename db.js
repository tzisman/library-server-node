let books = [
    {
      code: 101,
      name: "המבוך הסודי",
      category: "מתח",
      price: 85,
      isBorrowed: true,
      borrows: [
        { date: "2025-10-20", customerCode: 2001 },
      ],
    },
    {
      code: 102,
      name: "ניצוץ בממלכה האפלה",
      category: "פנטזיה",
      price: 95,
      isBorrowed: false,
      borrows: [],
    },
    {
      code: 103,
      name: "צללים בגטו",
      category: "היסטוריה",
      price: 78,
      isBorrowed: true,
      borrows: [
        { date: "2025-09-25", customerCode: 2034 },
        { date: "2025-10-15", customerCode: 2055 },
      ],
    },
    {
      code: 104,
      name: "מסע אל האור",
      category: "ביוגרפיה",
      price: 88,
      isBorrowed: false,
      borrows: [],
    },
    {
      code: 105,
      name: "החדר הנעול",
      category: "מתח",
      price: 79,
      isBorrowed: false,
      borrows: [],
    },
    {
      code: 106,
      name: "שומר הסוד",
      category: "פנטזיה",
      price: 99,
      isBorrowed: true,
      borrows: [
        { date: "2025-10-23", customerCode: 2088 },
      ],
    },
    {
      code: 107,
      name: "ניצולי התקופה",
      category: "היסטוריה",
      price: 84,
      isBorrowed: false,
      borrows: [],
    },
    {
      code: 108,
      name: "האיש מאחורי המסכה",
      category: "ביוגרפיה",
      price: 92,
      isBorrowed: false,
      borrows: [],
    },
    {
      code: 109,
      name: "היעלמות ברחוב יפו",
      category: "מתח",
      price: 83,
      isBorrowed: true,
      borrows: [
        { date: "2025-10-24", customerCode: 2071 },
      ],
    },
    {
      code: 110,
      name: "עולם הצללים",
      category: "פנטזיה",
      price: 97,
      isBorrowed: false,
      borrows: [],
    },
  ];

  export default books;