import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

const Expenses = () => {
    const expenses = [
        {
          date: new Date(2023, 9, 6),
          title: 'New Book',
          price: 30.99
        },
        {
          date: new Date(2023, 9, 6),
          title: 'New Jeans',
          price: 99.99
        }
    ]  

    const saveYearDataHandler = (yearData) => {
      console.log(yearData);
    } 

    return (
        <Card className='expenses'>
            <ExpensesFilter onSaveYearData ={saveYearDataHandler}/>
            <ExpenseItem
            expenseData = {expenses[0]}  
            />
            <ExpenseItem
            expenseData = {expenses[1]}  
            />
        </Card>
    )
} 

export default Expenses