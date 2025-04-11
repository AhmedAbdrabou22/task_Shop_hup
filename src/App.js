
import Header from './Components/Header.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Categories from './Components/Categories.jsx';
import NewProducts from './Components/NewProducts.jsx';
import Recommended from './Components/Recommended.jsx';
import Brands from './Components/Brands.jsx';
import Footer from './Components/Footer.jsx';
function App() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
    <Header />
    <div className='flex flex-1'>
      <Sidebar />
      <main className='flex-1 p-4'>
        <Categories />
        <NewProducts />
        <Recommended />
        <Brands />
      </main>
    </div>
    <Footer />
  </div>
    </>
  );
}

export default App;
