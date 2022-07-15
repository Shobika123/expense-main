import StartingPageContent from '../components/StartingPage/StartingPageContent';
import Balance from '../components/StartingPage/Balance';
import IncomeExpenses from '../components/StartingPage/IncomeExpenses';
import {TransactionList} from '../components/StartingPage/TransactionList';
import AddTransaction from '../components/StartingPage/AddTransaction';
import {GlobalProvider} from '../context/GlobalState';


const HomePage = () => {
  return(
<GlobalProvider>
     <StartingPageContent />;
  <div className="container">
    <Balance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction />
  </div>
  </GlobalProvider>
  );
};

export default HomePage;