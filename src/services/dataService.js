import { SEED_STUDENTS, SEED_BOOKS, SEED_RENTAL_RECORDS } from './seedData';

function initializeStorage() {
  if (!sessionStorage.getItem('students')) {
    sessionStorage.setItem('students', JSON.stringify(SEED_STUDENTS));
    sessionStorage.setItem('books', JSON.stringify(SEED_BOOKS));
    sessionStorage.setItem('rentalRecords', JSON.stringify(SEED_RENTAL_RECORDS));
  }
}

initializeStorage();

function getCollection(key) {
  return JSON.parse(sessionStorage.getItem(key)) || [];
}

function saveCollection(key, data) {
  sessionStorage.setItem(key, JSON.stringify(data));
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// Student endpoints

export async function getAllStudents() {
  const students = getCollection('students');
  return { students };
}

export async function createStudent(body) {
  const students = getCollection('students');
  const newStudent = { ...body, _id: generateId() };
  students.push(newStudent);
  saveCollection('students', students);
  return newStudent;
}

export async function editStudent(student) {
  const students = getCollection('students');
  const index = students.findIndex((s) => s._id === student._id);
  if (index !== -1) {
    students[index] = student;
    saveCollection('students', students);
  }
  return student;
}

// Book endpoints

export async function getAllBooks() {
  const books = getCollection('books');
  return { books };
}

export async function createBook(body) {
  const books = getCollection('books');
  const newBook = { ...body, _id: generateId() };
  books.push(newBook);
  saveCollection('books', books);
  return newBook;
}

// Rental Record endpoints

export async function getAllRentalRecords() {
  const rentalRecords = getCollection('rentalRecords');
  return { rentalRecords };
}

export async function createRentalRecord(body) {
  const rentalRecords = getCollection('rentalRecords');
  const newRecord = { ...body, _id: generateId() };
  rentalRecords.push(newRecord);
  saveCollection('rentalRecords', rentalRecords);
  return newRecord;
}

export async function editRentalRecord(body) {
  const rentalRecords = getCollection('rentalRecords');
  const index = rentalRecords.findIndex((r) => r._id === body._id);
  if (index !== -1) {
    rentalRecords[index].paid = body.paid;
    saveCollection('rentalRecords', rentalRecords);
    return { rentalRecords: rentalRecords[index] };
  }
  return { rentalRecords: body };
}
