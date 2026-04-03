const SEED_STUDENTS = [
  { _id: "s1", first_name: "Alice", last_name: "Johnson", grade: 3, book_rental: [] },
  { _id: "s2", first_name: "Ben", last_name: "Martinez", grade: 4, book_rental: [] },
  { _id: "s3", first_name: "Clara", last_name: "Thompson", grade: 2, book_rental: [] },
  { _id: "s4", first_name: "David", last_name: "Lee", grade: 5, book_rental: [] },
  { _id: "s5", first_name: "Emma", last_name: "Wilson", grade: 3, book_rental: [] },
  { _id: "s6", first_name: "Frank", last_name: "Garcia", grade: 4, book_rental: [] },
];

const SEED_BOOKS = [
  { _id: "b1", name: "Charlotte's Web", price: 7.99 },
  { _id: "b2", name: "Matilda", price: 8.50 },
  { _id: "b3", name: "The Giving Tree", price: 6.99 },
  { _id: "b4", name: "Where the Wild Things Are", price: 9.25 },
  { _id: "b5", name: "Harry Potter and the Sorcerer's Stone", price: 12.99 },
  { _id: "b6", name: "The Very Hungry Caterpillar", price: 5.50 },
];

const SEED_RENTAL_RECORDS = [
  {
    _id: "r1",
    student: { _id: "s1", first_name: "Alice", last_name: "Johnson", grade: 3, book_rental: [[{ _id: "b1", name: "Charlotte's Web", price: 7.99 }]] },
    purchased_items: [{ _id: "b1", name: "Charlotte's Web", price: 7.99 }],
    rental_date: "2025-09-15",
    payment_due: 7.99,
    comment: "First purchase of the semester",
    paid: true,
  },
  {
    _id: "r2",
    student: { _id: "s2", first_name: "Ben", last_name: "Martinez", grade: 4, book_rental: [[{ _id: "b2", name: "Matilda", price: 8.50 }, { _id: "b5", name: "Harry Potter and the Sorcerer's Stone", price: 12.99 }]] },
    purchased_items: [{ _id: "b2", name: "Matilda", price: 8.50 }, { _id: "b5", name: "Harry Potter and the Sorcerer's Stone", price: 12.99 }],
    rental_date: "2025-10-02",
    payment_due: 21.49,
    comment: "",
    paid: false,
  },
  {
    _id: "r3",
    student: { _id: "s3", first_name: "Clara", last_name: "Thompson", grade: 2, book_rental: [[{ _id: "b3", name: "The Giving Tree", price: 6.99 }]] },
    purchased_items: [{ _id: "b3", name: "The Giving Tree", price: 6.99 }],
    rental_date: "2025-10-10",
    payment_due: 6.99,
    comment: "Birthday gift",
    paid: true,
  },
  {
    _id: "r4",
    student: { _id: "s4", first_name: "David", last_name: "Lee", grade: 5, book_rental: [[{ _id: "b4", name: "Where the Wild Things Are", price: 9.25 }]] },
    purchased_items: [{ _id: "b4", name: "Where the Wild Things Are", price: 9.25 }],
    rental_date: "2025-11-05",
    payment_due: 9.25,
    comment: "",
    paid: false,
  },
  {
    _id: "r5",
    student: { _id: "s5", first_name: "Emma", last_name: "Wilson", grade: 3, book_rental: [[{ _id: "b6", name: "The Very Hungry Caterpillar", price: 5.50 }]] },
    purchased_items: [{ _id: "b6", name: "The Very Hungry Caterpillar", price: 5.50 }],
    rental_date: "2025-11-20",
    payment_due: 5.50,
    comment: "Reading club selection",
    paid: false,
  },
];

// Update seed students' book_rental to match rental records
SEED_STUDENTS[0].book_rental = [[{ _id: "b1", name: "Charlotte's Web", price: 7.99 }]];
SEED_STUDENTS[1].book_rental = [[{ _id: "b2", name: "Matilda", price: 8.50 }, { _id: "b5", name: "Harry Potter and the Sorcerer's Stone", price: 12.99 }]];
SEED_STUDENTS[2].book_rental = [[{ _id: "b3", name: "The Giving Tree", price: 6.99 }]];
SEED_STUDENTS[3].book_rental = [[{ _id: "b4", name: "Where the Wild Things Are", price: 9.25 }]];
SEED_STUDENTS[4].book_rental = [[{ _id: "b6", name: "The Very Hungry Caterpillar", price: 5.50 }]];

export { SEED_STUDENTS, SEED_BOOKS, SEED_RENTAL_RECORDS };
