import React from 'react';
import './App.css';

import RentalRecordTable from './table/RentalRecordTable';
import AddStudentModal from './modals/AddStudentModal';
import AddBookModal from './modals/AddBookModal';
import AddRentalRecordModal from './modals/AddRentalRecordModal';
import FilterModal from './modals/FilterModal';
import * as dataService from './services/dataService';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      books: [],
      rentalRecords: [],
      filterConditions: [],
      isLoaded: false,
      openStudent: false,
      openBook: false,
      openRentalRecord: false,
      openFilter: false,
    };

    this.getAllStudents = this.getAllStudents.bind(this);
    this.getAllBooks = this.getAllBooks.bind(this);

  }

  // Get All Students
  async getAllStudents() {
    try {
      const responseData = await dataService.getAllStudents();
      this.setState({ students: responseData.students.sort((a, b) => a.first_name > b.first_name ? 1 : -1) });
    } catch (err) {
      console.error(err);
    }
  };

  async getAllBooks() {
    try {
      const responseData = await dataService.getAllBooks();
      this.setState({ books: responseData.books.sort((a, b) => a.name > b.name ? 1 : -1) });
    } catch (err) {
      console.error(err);
    }
  };

  async getAllRentalRecord() {
    try {
      const responseData = await dataService.getAllRentalRecords();
      this.setState({ rentalRecords: responseData.rentalRecords.sort((a, b) => a.student.first_name > b.student.first_name ? 1 : -1) });
    } catch (err) {
      console.error(err);
    }
  };

  async componentDidMount() {
    this.setState({ isLoaded: false });
    await this.getAllStudents();
    await this.getAllBooks();
    await this.getAllRentalRecord();
    this.setState({ isLoaded: true });
  }

  render() {
    const { 
      rentalRecords,
      isLoaded,
      students,
      books,
      openRentalRecord,
      openStudent,
      openBook,
      openFilter,
      filterConditions,
    } = this.state;
    return (
      <div>
        <header className="App-header">
          <div className='app-title'>
            <span>Cherrywood Learning Academy</span>
            <br />
            <span style={{ fontSize: 16 }}>Student Book Purchase Record</span>
          </div>
          <div>
            <button className='modal-button' onClick={() => this.setState({ openStudent: true })}>Add Student</button>
            <button className='modal-button' onClick={() => this.setState({ openBook: true })}>Add Book</button>
            <button className='modal-button' onClick={() => this.setState({ openRentalRecord: true })}>Add Purchase Record</button>
          </div>
        </header>
        <body style={{ minHeight: '90vh', overflow: 'auto', backgroundColor: '#212529' }}>
          { isLoaded ? (
            <RentalRecordTable
              rentalRecords={rentalRecords}
              isLoaded={isLoaded}
              setOpenFilter={(value) => this.setState({ openFilter: value })}
              filterConditions={filterConditions}
            />
          ) : (<>Loading...</>)}
          <AddStudentModal
            open={openStudent}
            handleClose={() => this.setState({ openStudent: false })}
            getAllStudents={this.getAllStudents}
          />
          <AddBookModal
            open={openBook}
            handleClose={() => this.setState({ openBook: false })}
            getAllBooks={this.getAllBooks}
          />
          <AddRentalRecordModal
            open={openRentalRecord}
            handleClose={() => {
              this.setState({ openRentalRecord: false })
              this.getAllRentalRecord();
            }}
            studentList={students}
            bookList={books}
          />
          <FilterModal
            open={openFilter}
            handleClose={() => {
              this.setState({ openFilter: false });
            }}
            studentList={students}
            bookList={books}
            filterConditions={filterConditions}
            setFilterConditions={(value) => this.setState({ filterConditions: value })}
          />
        </body>
      </div>
    );
  }
}

export default App;
